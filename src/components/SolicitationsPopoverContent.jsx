import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const PopoverDiv = styled.div`

  .img_perfil_soli {
    border-radius: 100%;
    width: 70px;
    height: 70px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    overflow: hidden;
  }

  img {
    width: 70px;
    height: 70px;
  }

  .img-fluid {
    max-width: 200%;
  }
  
  .popup{
    display: flex;
    justify-content: space-around;
    border-bottom: 1px black solid;
    padding-bottom: 10px;
  }

  .info_text{
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .text_nome{
    font-size: 10px;
    margin: 0px 0px 0px 0px;
  }

  .text_projeto{
    font-size: 15px
  }

  .buttons_op{
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

export function SolicitationsPopoverContent({ solicitation }) {

  const deleteSolicitation = () => {

    fetch(`http://localhost:8080/solicitations/${solicitation.solicitationId}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
      }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Deletar projeto falhou");
        } else {
          window.location.reload();
        }
    })
    .catch(error => {
        console.error("Erro:", error);
    });

  }

  const acceptSolicitation = () => {

    fetch(`http://localhost:8080/users/${solicitation.sender.userId}/projects`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({ projectId: solicitation.project.projectId })
    })
    .then(response => {
        if (!response.ok) {
          throw new Error("Associar projeto falhou");
        } else {
          deleteSolicitation(); // Deletar solicitação caso o usuário aceite
        }
    })
    .catch(error => {
        console.error("Erro:", error);
    });

  }

  return (
    <PopoverDiv>
      <div className='popup'>
        <div className='img_perfil_soli'>
          <img src="images/user_icon.png" className="img-fluid" alt="..."/>
        </div>
        <div className='info_text'>
          <div className='text_soli'>
            <p className='text_nome'>Solicitação de {solicitation.sender.username}</p>
            <p className='text_projeto'>Participar de {solicitation.project.name}</p>
          </div>
          <div className='buttons_op'>
            <Button onClick={deleteSolicitation} style={{backgroundColor: "red", border: "none", fontSize: "10px"}}>
              Recusar
            </Button>
            <Button onClick={acceptSolicitation} style={{backgroundColor: "#06284B", border: "none", fontSize: "10px"}}>
              Aceitar
            </Button>
          </div>
        </div>
      </div>
    </PopoverDiv>
  );
}
import styled from "styled-components";

const FormInput = styled.input`
    width: 498px;
    margin-bottom: 10px;

    .inputDate {
        width: 200px;
    }
;`

export function SolicitacoesModal() {

    return (

      <div className="modal fade" id="SolicitacoesModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

        <div className="modal-dialog modal-xl">
          <div className="modal-content">

            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Solicitações</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
            </div>

          </div>
        </div>

      </div>

    );

  }
import styled from "styled-components";
import { useUser } from "../context/UserContext";

const CustomCard = styled.div`
    height: 450px;
    width: 500px;

    img {
        object-fit: cover;
        width: 100%;
        height: 225px;
        border-radius: 5px;
    }

    p {
        height: 90px;
        overflow: hidden; 
    }

    @media (max-width: 600px) {
        width: 80vw;
    }

    .btnSolicitar {
        width: 80px;
        height: 36px;
        border-radius: 5px;
        background-color: #06284B;
        border: none;
        color: white;
    }

`;

export function ProjetosCard({ project }) {

    const { user } = useUser();

    const handleClick = () => {

        fetch(`http://localhost:8080/solicitations`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ senderId: user.userId, recipientId: project.owner.userId, projectId: project.projectId })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Mandar solicitação falhou");
            }
        })
        .catch(error => {
            console.error("Erro:", error);
        });

    }

    return (
        <CustomCard className="card col-lg-4 col-10 p-3">
            <img src={project?.image ? project.image : "images/image (2).png"} className="card-img-top"/>
            <div className="card-body px-1">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
                <button className="btnSolicitar" onClick={handleClick}>Solicitar</button>
            </div>
        </CustomCard>
    );

}
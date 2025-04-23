import { useState } from "react";
import styled from "styled-components";
import { useUser } from "../context/UserContext";

const FormInput = styled.div`

    .new_project {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }

    .dates{
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        margin-bottom: 20px;
    }

    .date{
        width: 100%;
    }

    .projetos_texts{
        width: 40%;
    }

    .img-fluid{
        border: black 2px dashed;
        width: 30vw;
        min-width: 400px;
    }

    .projetos_texts{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .mb-3{
        width: 100%;
    }

    .btn-primary{
        margin-top: 30px;
        width: 20%;
        background-color: #06284B;
        border: none;
    }

`;

export function NewProjectModal() {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [start_date, setStartDate] = useState("");
    const [end_date, setEndDate] = useState("");
    const [image, setImage] = useState("");
    const [course, setCourse] = useState("");
    const { user } = useUser();

    const handleImageChange = (event) => {
        const arquivo = event.target.files[0];
        if (arquivo) {
            const leitor = new FileReader();
    
            leitor.onloadend = () => {
                setImage(leitor.result); // Aqui está a imagem em base64
            };
    
            leitor.readAsDataURL(arquivo);
        }
    };

    const handleClick = () => {

        fetch(`http://localhost:8080/projects`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, description, start_date, end_date, image, course })
        })
        .then(response => {
            if (response.ok) {
                const location = response.headers.get("Location");
                
                const projectId = location?.split("/").pop();

                associarProjeto(projectId);
            } else {
                throw new Error("Adicionar projeto falhou");
            }
        })
        .catch(error => {
            console.error("Erro:", error);
        });

    };

    const associarProjeto = (projectId) => {

        fetch(`http://localhost:8080/users/${user.userId}/projects`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ projectId })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Associar projeto falhou");
            }
        })
        .catch(error => {
            console.error("Erro:", error);
        });

    }

    return (
        <FormInput>
            <div className="modal fade" id="newProject" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

                <div className="modal-dialog modal-xl">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Novo Projeto</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
                        </div>

                        <div className="modal-body">
                            <div className="new_project">
                                <div className="img_escolha">
                                    <img src={image ? image : "images/placeholder_img.jpg"} className="img-fluid" alt="..."/>
                                    <div className="mb-3">
                                        <label htmlFor="formFile" className="form-label"></label>
                                        <input className="form-control" type="file" id="formFile" onChange={handleImageChange}/>
                                    </div>
                                </div>
                                <div className="projetos_texts">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Título</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setName(e.target.value)}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Descrição</label>
                                        <textarea type="text" className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={e => setDescription(e.target.value)}></textarea>
                                    </div>
                                    <div className="dates">
                                        <div>
                                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Data Início</label>
                                            <input type="date" className="form-control date" id="exampleInputEmail1" onChange={e => setStartDate(e.target.value)}/>
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Data Término</label>
                                            <input type="date" className="form-control date" id="exampleInputEmail1" onChange={e => setEndDate(e.target.value)}/>
                                        </div>
                                    </div>
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Escolha seu curso</label>
                                    <select className="form-select" aria-label="Default select example" onChange={e => setCourse(e.target.value)}>
                                        <option value=" ">Curso</option>
                                        <option value="Computação">Computação</option>
                                        <option value="Direito">Direito</option>
                                        <option value="Engenharia">Engenharia</option>
                                    </select>
                                    <button type="button" className="btn btn-primary" onClick={handleClick}>Salvar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FormInput>
    );

  }
  
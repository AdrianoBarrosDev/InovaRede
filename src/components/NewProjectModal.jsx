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
            body: JSON.stringify({ name, description, start_date, end_date, image, course, ownerId: user.userId
            })
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
                                        <optgroup label="Ciências Humanas">
                                            <option>Ciências Biológicas (Bacharelado e Licenciatura)</option>
                                            <option>Filosofia</option>
                                            <option>Geografia</option>
                                            <option>História</option>
                                            <option>Jornalismo</option>
                                            <option>Letras Português/Inglês</option>
                                            <option>Música</option>
                                            <option>Pedagogia</option>
                                            <option>Psicologia</option>
                                            <option>Relações Internacionais</option>
                                        </optgroup>

                                        <optgroup label="Direito">
                                            <option>Direito</option>
                                        </optgroup>

                                        <optgroup label="Engenharia">
                                            <option>Engenharia Ambiental</option>
                                            <option>Engenharia Civil</option>
                                            <option>Engenharia de Computação</option>
                                            <option>Engenharia de Produção</option>
                                            <option>Engenharia Elétrica</option>
                                            <option>Engenharia Mecânica</option>
                                            <option>Engenharia Química</option>
                                        </optgroup>

                                        <optgroup label="Gestão e Negócios">
                                            <option>Administração</option>
                                            <option>Ciências Contábeis</option>
                                            <option>Comércio Exterior</option>
                                            <option>Gastronomia</option>
                                            <option>Gestão Comercial</option>
                                            <option>Gestão da Tecnologia da Informação</option>
                                            <option>Gestão de Recursos Humanos</option>
                                            <option>Gestão Financeira</option>
                                            <option>Logística</option>
                                            <option>Marketing</option>
                                            <option>Processos Gerenciais</option>
                                            <option>Publicidade e Propaganda</option>
                                            <option>Turismo</option>
                                        </optgroup>

                                        <optgroup label="Outros">
                                            <option>Educação Física</option>
                                            <option>Química Tecnológica</option>
                                            <option>Tradução e Interpretação</option>
                                        </optgroup>

                                        <optgroup label="Saúde">
                                            <option>Biomedicina</option>
                                            <option>Enfermagem</option>
                                            <option>Farmácia</option>
                                            <option>Fisioterapia</option>
                                            <option>Nutrição</option>
                                            <option>Odontologia</option>
                                        </optgroup>

                                        <optgroup label="Tecnologia e Informação">
                                            <option>Análise e Desenvolvimento de Sistemas</option>
                                            <option>Arquitetura e Urbanismo</option>
                                            <option>Ciência da Computação</option>
                                            <option>Cinema e Audiovisual</option>
                                            <option>Redes de Computadores</option>
                                            <option>Sistemas de Informação</option>
                                        </optgroup>
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
  
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { useUser } from "../context/UserContext";
import CursosPorCategoria from '../data/Cursos';
import { ProjetosUsuario } from './ProjetosUsuario';

const DivHead = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .tabs{
        margin-top: 30px;
    }

    .tab_btn {
        margin-left: 30px;
        padding: 10px 30px;
        cursor: pointer;
        border: none;
        background: none;
        position: relative;
        font-size: 20px;
    }

    .line {
        position: absolute;
        height: 4px;
        background-color: #DAE6F2;
        transition: 0.3s;
        border-radius: 25px;
    }

    .content {
        display: none;
    }

    .contentProjects {
        width: 100%;
    }
    .contentInformations {
        width: 70%;
    }

    .content.active {
        display: block;
        display:flex;
        justify-content: center;
        align-items: center;
    }

    .user_info{
        margin-top: 100px;
        background-color: #E0E0E0;
        width: 70%;
        border-radius: 100px 100px 0px 0px;
        display: flex;
        justify-content: start;
        font-family: "Lexend Deca";
        gap: 44px;
    }

    .user_text {
        gap: 40px;
    }
    .user_name {
        font-weight: 400;
        font-size: 50px;
    }
    .user_course {
        opacity: 0.5;
        font-size: 25px;
        margin-top: 26px;
    }

    .user_img{
        border-radius: 100%;
        height: 200px;
        width: 200px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 25px 0px 25px 50px;
    }

    .user_img_edit{
        border-radius: 100%;
        height: 450px;
        width: 450px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .img-fluid{
        height: 100%;
    }

    .img_edit{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0px 0px 0px 0px
    }

    .user_info_edit{
        padding: 30px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .form-floating{
        width: 100%;
        margin-top: 20px;
    }

    .btn-primary{
        margin: 50px 0px 0px 0px; 
        height: 50px;
        background-color: #06284B;
        border:none
    }

    .text_info_edit{
        width: 30%;
        justify-content: center;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .user_div{
        background-color: #E0E0E0;
        border-radius: 0px 0px 100px 100px;
        margin: 60px 0px 0px 0px;
        width: 150%;  
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .btn-primary{
        width: 100%;
        height: 60px;
        justify-content: center;
        margin-bottom: 30px;
    }

    .btn-secondary{
        margin: 20px 0px 0px 0px;
    }

    .custom-file-upload {
        display: inline-block;
        padding: 10px 20px;
        cursor: pointer;
        background-color: rgb(6, 40, 75);
        color: white;
        border-radius: 5px;
        transition: background-color 0.3s;
        margin-top: 30px;
    }

    .custom-file-upload:hover {
        background-color: rgb(9, 55, 100);
    }

    .form-control,
    .form-select {
        padding: 0px 10px !important;
    }

    .exitButton {
        background-color: #E83F3F;
        width: 125px;
        height: 40px;
        color: white;
        cursor: pointer;
        border: none;
        border-radius: 5px;
    }

`;

export function UserInfo() {
    
    // Informações do Usuário
    const navigate = useNavigate();
    const { user, loginUser, isLoading, logoutUser } = useUser();

    useEffect(() => {
        if (!isLoading && user === null) {
            navigate('/login');
        }
    }, [user, isLoading, navigate]);


    // Variáveis de desenvolvimento
    const tabsRef = useRef([]);
    const allContentRef = useRef([]);
    const lineRef = useRef(null);

    const [isDisabled, setIsDisabled] = useState(true); // <- aqui controlamos os campos

    function updateLine(tab) {
        if (lineRef.current) {
            lineRef.current.style.width = tab.offsetWidth + "px";
            lineRef.current.style.left = tab.offsetLeft + "px";
        }
    }

    function initializeTabLine() {
        const activeTab = tabsRef.current.find(tab => tab.classList.contains('active'));
        if (activeTab) {
            updateLine(activeTab);
        }
    }

    useEffect(() => {
        tabsRef.current.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                tabsRef.current.forEach(tab => tab.classList.remove('active'));
                tab.classList.add('active');

                updateLine(tab);

                allContentRef.current.forEach(content => content.classList.remove('active'));
                allContentRef.current[index].classList.add('active');
            });
        });

        initializeTabLine();

        const handlePageShow = () => {
            initializeTabLine();
        };

        window.addEventListener('pageshow', handlePageShow);

        return () => {
            window.removeEventListener('pageshow', handlePageShow);
        };
    }, []);

    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [course, setCourse] = useState("");

    useEffect(() => {
        if (user) {
            setUsername(user.username || "");
            setName(user.name || "");
            setEmail(user.email || "");
            setCourse(user.course || "");
            setImage(user.image || "");
        }
    }, [user]);

    const handleClick = () => {

        fetch(`http://localhost:8080/users/${user.userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, name, email, image, course })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Atualização de dados falhou");
            } else {
                saveUser();
            }
        })
        .catch(error => {
            console.error("Erro:", error);
        });

    };

    const handleImageChange = (event) => {
        const arquivo = event.target.files[0];
        if (arquivo) {
            const leitor = new FileReader();
    
            leitor.onloadend = () => {
                setImage(leitor.result); // Aqui está a imagem em base64

                fetch(`http://localhost:8080/users/${user.userId}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ image: leitor.result })
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Atualização de imagem falhou");
                    } else {
                        saveUser();
                    }
                })
                .catch(error => {
                    console.error("Erro:", error);
                });
            };
    
            leitor.readAsDataURL(arquivo);
        }
    };

    const saveUser = async () => {

        const response = await fetch(`http://localhost:8080/users/username/${username}`);
    
        if (!response.ok) {
            throw new Error("Erro ao buscar dados");
        }

        const data = await response.json();
        loginUser(data);

    }

    return (
        <>
            <DivHead>
                <div className="user_info">
                    <div className="user_img">
                        <img src={image ? image : "images/user_icon.png"} className="img-fluid" alt="" style={{width: "100%", height: "100%", objectFit: "cover"}}/>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-start gap-5">
                        <div className="user_text d-flex justify-content-center align-items-start">
                            <div className="user_name">{name}</div>
                            <div className="user_course">{course}</div>
                        </div>
                        <button className="exitButton" onClick={logoutUser}>Sair</button>
                    </div>
                </div>
                <div className="tabs">
                    <button ref={el => tabsRef.current[0] = el} className="tab_btn active">Meus Projetos</button>
                    <button ref={el => tabsRef.current[1] = el} className="tab_btn">Informações</button>
                    <div ref={lineRef} className="line"></div>
                </div>

                <div ref={el => allContentRef.current[0] = el} className="content contentProjects active">
                    <ProjetosUsuario />
                </div>

                <div ref={el => allContentRef.current[1] = el} className="content contentInformations" style={{marginBottom: "100px"}}>
                    <div className="user_div">
                        <div className="user_info_edit">
                            <div className="text_info_edit">

                                <div className="form-floating">
                                    <div htmlFor="infoUsername">Nome de usuário</div>
                                    <input value={username} id="infoUsername" type="text" className="form-control" disabled={isDisabled} onChange={e => setUsername(e.target.value)}/>
                                </div>

                                <div className="form-floating">
                                    <div htmlFor="infoName">Nome</div>
                                    <input value={name} id="infoName" type="text" className="form-control" disabled={isDisabled} onChange={e => setName(e.target.value)}/>
                                </div>

                                <div className="form-floating">
                                    <div htmlFor="infoEmail">Email</div>
                                    <input value={email} id="infoEmail" type="text" className="form-control" disabled={isDisabled} onChange={e => setEmail(e.target.value)}/>
                                </div>

                                <div className="form-floating">
                                <div htmlFor="infoCourse">Curso</div>
                                    <select id="infoCourse" className="form-select" aria-label="Floating label disabled select example" disabled={isDisabled} value={course} onChange={e => setCourse(e.target.value)}>
                                        {CursosPorCategoria.map(grupo => (
                                            <optgroup key={grupo.categoria} label={grupo.categoria}>
                                                {grupo.cursos.map(curso => (
                                                <option key={curso}>{curso}</option>
                                                ))}
                                            </optgroup>
                                        ))}
                                    </select>
                                </div>

                                <button 
                                    type="button" 
                                    className="btn btn-primary" 
                                    style={{width: "200px"}}
                                    onClick={() => {
                                        if (isDisabled) {
                                            setIsDisabled(false); // Habilita os campos
                                        } else {
                                            setIsDisabled(true);
                                            handleClick();
                                        }
                                    }}
                                >
                                    {isDisabled ? "Alterar Dados" : "Salvar Alterações"}
                                </button>
                            </div>

                            <div className="img_edit">
                                <div className="user_img_edit">
                                    <img src={image ? image : "images/user_icon.png"} className="img-fluid" alt="Imagem do Usuário" style={{width: "100%", height: "100%", objectFit: "cover"}}/>
                                </div>
                                <label htmlFor="infoImage" className="custom-file-upload">Alterar Imagem</label>
                                <input type="file" id="infoImage" style={{display: "none"}} onChange={handleImageChange}/>
                            </div>
                        </div>

                    </div>
                </div>
            </DivHead>
        </>
    );
}
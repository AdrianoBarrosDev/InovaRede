import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { useUser } from "../context/UserContext";
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
        padding: 10px 60px;
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

    .content.active {
        display: block;
        display:flex;
        justify-content: center;
        align-items: center;
        width: 70%;
    }

    .user_info{
        margin-top: 100px;
        background-color: #E0E0E0;
        width: 70%;
        border-radius: 100px 100px 0px 0px;
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
        margin: 20px 0px 0px 50px;
    }

    .btn-primary{
        margin: 50px 0px 0px 0px; 
        height: 50px;
        background-color: #06284B;
        border:none
    }

    .text_info_edit{
        width: 30%;
        margin: 0px 0px 0px -80px;
        justify-content: left;
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

`;

export function UserInfo() {

    // Informações do Usuário
    const navigate = useNavigate();
    const { user, isLoading } = useUser();

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
    const [password, setPassword] = useState("");
    const [course, setCourse] = useState("");

    useEffect(() => {
        if (user) {
            setUsername(user.username || "");
            setName(user.name || "");
            setEmail(user.email || "");
            setPassword(user.password || "");
            setCourse(user.course || "");
        }
    }, [user]);

    const handleClick = () => {

        fetch(`http://localhost:8080/users/${user.userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, name, email, password, course })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Atualização de dados falhou");
            }
        })
        .catch(error => {
            console.error("Erro:", error);
        });
    };


    return (
        <>
            <DivHead>
                <div className="user_info">
                    <div className="user_img">
                        <img src="images/user_icon.png" className="img-fluid" alt=""/>
                    </div>
                </div>
                <div className="tabs">
                    <button ref={el => tabsRef.current[0] = el} className="tab_btn active">Meus Projetos</button>
                    <button ref={el => tabsRef.current[1] = el} className="tab_btn">Informações</button>
                    <div ref={lineRef} className="line"></div>
                </div>

                <div ref={el => allContentRef.current[0] = el} className="content active">
                    <ProjetosUsuario />
                </div>

                <div ref={el => allContentRef.current[1] = el} className="content" style={{marginBottom: "100px"}}>
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
                                    <div htmlFor="infoPassword">Senha</div>
                                    <input value={password} id="infoPassword" type="password" className="form-control" disabled={isDisabled} onChange={e => setPassword(e.target.value)}/>
                                </div>

                                <div className="form-floating">
                                    <select className="form-select" aria-label="Floating label disabled select example" disabled={isDisabled} value={course} onChange={e => setCourse(e.target.value)}>
                                        <option value="1">Ciência da Computação</option>
                                        <option value="2">Direito</option>
                                        <option value="3">Engenharia</option>
                                    </select>
                                </div>
                            </div>

                            <div className="img_edit">
                                <div className="user_img_edit">
                                    <img src="images/user_icon.png" className="img-fluid" alt="Imagem do Usuário"/>
                                </div>
                                <button type="button" className="btn btn-secondary">Alterar Imagem</button>
                            </div>
                        </div>


                        <div className="mt-3">
                            <button 
                                type="button" 
                                className="btn btn-primary" 
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
                    </div>
                </div>
            </DivHead>
        </>
    );
}
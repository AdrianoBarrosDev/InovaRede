import { useState } from "react";
import styled from "styled-components";
import { useUser } from "../context/UserContext";

const DivHead = styled.div`

    background-color:#e7e7e7f8;
    background-image: url("/images/Group 26 (1).png");
    background-repeat: no-repeat;
    background-size:100%;
    bottom: 0;
    color: black;
    left: 0;
    overflow: auto;
    padding: 3em;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
    background-size: cover;       
    align-items: center; 
    justify-content: center; 
    display: flex; 
    
    .login_tela{
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        border-radius: 0px 25px 25px  0px;
        background-color:white;
        width: 500px;
        height: 70%;
        padding: 50px;
        padding-top: 100px;
    }

    .left_div{
        background-color: #DAE6F2;
        border-radius: 25px 0px 0px 25px;
        width: 300px;
        height: 70%;
    }

    .fs-1{
        font-family: 'Poppins';
        font-size: 25px !important;
        margin-bottom: 60px;
    }

    .fs-2{
        margin: 120px 0px 100px 0px ;
        font-family: Lexend Mega;
    }

    .fs-3{
        font-family: 'Poppins';
        font-size: 18px !important;
    }

    .btn-light{
        margin-top: 20px;
        font-family: 'Poppins';
        font-size: 20px;
    }

    .form-floating{
        width: 90%;
    }

    .btn-secondary{
        font-family: 'Poppins';
        font-size: 20px;
        height: 50px;
        margin: 80px 0px 0px 0px;
        width: 130px;
    }

    ul{
        margin: 150px 0px 0px -35px;
        list-style-type:none;
        width: 100%;
        position: relative;
    }

`;

export function LoginUser() {

    const { loginUser } = useUser();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = () => {
        fetch("http://localhost:8080/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => {
            if (response.ok) {
                window.location.href = "/projetos";
                saveUser();
            } else {
                throw new Error("Login falhou");
            }
        })
        .catch(error => {
            console.error("Erro:", error);
            alert("Usuário ou senha inválidos!");
        });
    };
    
    const saveUser = () => {

        fetch(`http://localhost:8080/users/${username}`)
        .then((response) => {

            // Verifica se a resposta foi bem-sucedida
            if (!response.ok) {
                throw new Error('Erro ao buscar dados');
            }

            const data = response.json(); // Converte a resposta para JSON
            loginUser(data);

        })
        .catch(error => {
            console.error("Erro:", error);
            alert("Erro ao salvar usuário!");
        });

    }

    return (
        <DivHead>
            <div className="left_div">
                <p className="fs-2">InovaRede</p>
                <p className="fs-3">Ainda não possui uma conta?</p>
                <p className="fs-3">Faça o cadastro agora</p>
                <button type="button" className="btn btn-light" onClick={() => window.location.href = "/cadastro"}>Cadastrar</button>
            </div>

            <div className="login_tela">
                <p className="fs-1">Entrar</p>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setUsername(e.target.value)}/>
                    <label htmlFor="floatingInput" id="loginUsername">Nome de usuário</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    <label htmlFor="floatingPassword" id="loginPassword">Senha</label>
                </div>

                <button type="button" className="btn btn-secondary" onClick={handleClick}>Entrar</button>     
            </div>
            
        </DivHead>
    );

}
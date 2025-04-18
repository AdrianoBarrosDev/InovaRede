import styled from "styled-components";

const DivHead = styled.div`

    background-color:#e7e7e7f8;
    background-image: url("images/Group 26 (1).png");
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
        border-radius: 0px 25px 25px  0px;
        background-color:white;
        width: 500px;
        height: 70%;
        display: flex; 
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding: 50px;
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
        width: 110%;
    }

    .btn-secondary{
        font-family: 'Poppins';
        font-size: 20px;
        height: 50px;
        margin: 30px 0px 0px 0px;
        width: 130px;
    }

    .option{
        margin-top: 15px
    }
`;

export function CadastroUser() {

    const handleClick = () => {

        const username = document.getElementById("registerUsername").value;
        const name = document.getElementById("registerName").value;
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;
        const course = document.getElementById("registerCourse").value;

        fetch("http://localhost:8080/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, name, email, password, course })
        })
        .then(response => {
            if (response.ok) {
                window.location.href = "/login";
            } else {
                throw new Error("Cadastro falhou");
            }
        })
        .catch(error => {
            console.error("Erro:", error);
        });
    };

    return (
        <DivHead>
            <div className="col-mg- left_div">
                <p className="fs-2">
                    InovaRede
                </p>
                <p className="fs-3">Já possui uma conta?</p>
                <p className="fs-3">Entre agora mesmo</p>
                <button type="button" className="btn btn-light" onClick={() => window.location.href = "/login"}>Entrar</button>
            </div>
                <div className="col-mg- login_tela">
                    <p className="fs-1">Cadastrar</p> 
                    
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="registerUsername" placeholder=" "/>
                        <label htmlFor="registerUsername" id="CadastroNomeUser">Nome de usuário</label>
                    </div>
                    
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="registerName" placeholder=" "/>
                        <label htmlFor="registerName" id="CadastroNome">Nome</label>
                    </div>
                    
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="registerEmail" placeholder=" "/>
                        <label htmlFor="registerEmail" id="CadastroEmail">Email</label>
                    </div>
                    
                    <div className="form-floating senha">
                        <input type="password" className="form-control" id="registerPassword" placeholder=" "/>
                        <label htmlFor="registerPassword" id="CadastroSenha">Senha</label>  
                    </div>
                    
                    <div className="form-floating option">
                        <select className="form-select" id="registerCourse" aria-label="Floating label select example">
                            <option value="" disabled hidden>Selecione o curso</option>
                            <option value="Computação">Computação</option>
                            <option value="Direito">Direito</option>
                            <option value="Sistemas">Sistemas</option>
                            <option value="Engenharia">Engenharia</option>
                        </select>
                        <label htmlFor="registerCourse">Selecione o curso</label>
                    </div>
                    <button type="button" className="btn btn-secondary" onClick={handleClick}>Cadastrar</button>     
                </div>
        </DivHead>
    );

}
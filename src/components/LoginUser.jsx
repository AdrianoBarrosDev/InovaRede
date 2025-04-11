import styled from "styled-components";

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
        border-radius: 0px 25px 25px  0px;
        background-color:white;
        width: 450px;
        height: 500px;
        display: flex; 
        justify-content: center;

    }

    .left_div{
        background-color: #DAE6F2;
        border-radius: 25px 0px 0px 25px;
        width: 250px;
        height: 500px;
    }

    .fs-1{
        position: absolute;
        font-family: 'Poppins';
        font-size: 25px !important;
    }

    .fs-2{
        margin: 50px 0px 0px 0px ;
        font-family: Lexend Mega;
    }

    .fs-3{
        font-family: 'Poppins';
        font-size: 18px !important;
        text-align: left;
        margin-left: 15px;
    }

    .btn-light{
        margin-top: 20px;
        font-family: 'Poppins';
        font-size: 20px;
    }

    .form-floating{
        width: 100%;
    }

    .senha{
        width: 100%;
    }

    .btn-secondary{
        font-family: 'Poppins';
        font-size: 20px;
        height: 50px;
        margin: 400px 0px 0px -0px;
        width: 130px;
        position: absolute;
    }

    ul{
        margin: 150px 0px 0px -35px;
        list-style-type:none;
        width: 100%;
        position: relative;
    }
`;

export function LoginUser() {

    return (
        <>
                <DivHead>
                    <div class="col-mg- left_div">
                        <p class="fs-2">
                            InovaRede <br /> <br /><br />
                        </p>
                        <p class="fs-3">ainda não possui uma conta?<br /><br />
                                faça o cadastro agora:
                            </p>
                            <button type="button" class="btn btn-light">Cadastrar</button>
                    </div>
                        <div class="col-mg- login_tela">
                            <p class="fs-1"><br />Entrar:</p> 
                            <ul>
                                <li>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput">Email ou nome de usuário</label>
                                </div>
                                </li>
                                <li>
                                    <br />
                                </li>
                                <li>
                                <div class="form-floating senha">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                                    <label for="floatingPassword">Senha</label>
                                </div>
                                </li>
                            </ul>
                            <button type="button" class="btn btn-secondary">Entrar</button>     
                        </div>
                </DivHead>
        </>
    );

}
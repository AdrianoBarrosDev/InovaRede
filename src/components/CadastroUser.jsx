import styled from "styled-components";

const DivHead = styled.div`

    background-color:#e7e7e7f8;
    background-image: url("public/images/Group 26 (1).png");
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
        height: 60%;
        display: flex; 
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding: 50px;
    }

    .left_div{
        background-color: #DAE6F2;
        border-radius: 25px 0px 0px 25px;
        width: 250px;
        height:60%;
    }

    .fs-1{
        font-family: 'Poppins';
        font-size: 25px !important;
    }

    .fs-2{
        margin: 80px 0px 100px 0px ;
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

    return (
        <>
                <DivHead>
                    <div className="col-mg- left_div">
                        <p className="fs-2">
                            InovaRede
                        </p>
                        <p className="fs-3">Ainda não possui uma conta?</p>
                        <p className="fs-3">Faça o cadastro agora</p>
                                
                            
                            <button type="button" className="btn btn-light">Cadastrar</button>
                    </div>
                        <div className="col-mg- login_tela">
                            <p className="fs-1">Cadastrar:</p> 
                           
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label htmlFor="floatingInput" id="CadastroNomeUser">Nome de usuário</label>
                            </div>
                            
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label htmlFor="floatingInput" id="CadastroNome">Nome</label>
                            </div>
                            
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label htmlFor="floatingInput" id="CadastroEmail">Email</label>
                            </div>
                            
                            <div className="form-floating senha">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                                <label htmlFor="floatingPassword" id="CadastroSenha">Senha</label>
                            </div>
                            
                            <div className="form-floating option">
                                <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                    <option selected>Selecione o curso</option>
                                    <option value="1">Computação</option>
                                    <option value="2">Direito</option>
                                    <option value="3">Sistemas</option>
                                    <option value="4">Engenharia</option>
                                </select>
                                <label htmlFor="floatingSelect">Selecione o curso</label>
                            </div>
                            <button type="button" className="btn btn-secondary">Cadastrar</button>     
                        </div>
                </DivHead>
        </>
    );

}
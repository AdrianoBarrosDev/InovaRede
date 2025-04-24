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
                        <label htmlFor="registerCourse">Selecione o curso</label>
                    </div>
                    <button type="button" className="btn btn-secondary" onClick={handleClick}>Cadastrar</button>     
                </div>
        </DivHead>
    );

}
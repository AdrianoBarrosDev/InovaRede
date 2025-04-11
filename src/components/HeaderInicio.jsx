import styled from "styled-components";

const DivHead = styled.div`
    background-color: #DAE6F2;

    .bg-body-tertiary{
        background-color: #DAE6F2 !important; 
    }

    .navbar-brand{
        font-family: Lexend Mega;
    }
    
    .btn{
        margin-left: 1vw;
    }

    .navbar-nav{
        margin-left: 20vw;
    }

`;

export function HeaderInicio() {

    return (
        <>
            <DivHead className="container-fluid">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">InovaRede</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <button type="button" class="btn">O que fazemos?</button>
                        </li>
                        <li class="nav-item">
                        <button type="button" class="btn">Quem somos?</button>
                        </li>
                        <li class="nav-item dropdown">  
                        </li>
                        <li class="nav-item">
                        <button type="button" class="btn">Contatos</button>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                    <button type="button" class="btn">Entrar</button>
                        <button type="button" class="btn btn-primary">Cadastrar</button>
                    </form>
                    </div>
                </div>
                </nav>
            </DivHead>
        </>
    );

}
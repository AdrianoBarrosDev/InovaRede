import styled from "styled-components";

const DivHead = styled.div`

background-color: #DAE6F2;

.bg-body-tertiary{
    background-color: #DAE6F2 !important; 
}

.navbar-brand{
    font-family: Lexend Mega;
    font-size: 30px;
}

.perfil{
    border-radius: 100%;
    width: 50px;
    height: 50px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.navbar-nav{
}

.collapse{
    justify-content: center;
}

.img-fluid{
    max-width: 300%;
}

.btn-dark{
    color: white;
}

.btn{
    margin: 0px 15px 0px 15px;
}
`;

export function Header() {

    return (
        <>
            <DivHead>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="http://localhost:5173/projetos">IR</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a type="button" href="http://localhost:5173/projetos" className="btn">Projetos</a>
                        </li>
                        <li className="nav-item">
                        <button type="button" className="btn btn-dark"><strong>➕︎</strong></button>

                        </li>
                        <li className="nav-item dropdown">  
                        </li>
                        <li className="nav-item">
                        <button type="button" className="btn">Solicitaçoes</button>
                        </li>
                    </ul>
                    </div>
                        <div className="user_button">
                            <a type="button" href="http://localhost:5173/usuario" className="btn perfil"><img src="images/user_icon.png" className="img-fluid" alt=""/></a>
                        </div>
                </div>
                </nav>
            </DivHead>
        </>
    
    );

}
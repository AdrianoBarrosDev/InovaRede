import styled from "styled-components";

const DivContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .logo_projetos{
        text-align: center;
        font-family: Lexend Mega;
        margin-top: 100px
    }

    .lupa{
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: -65px;
        border-radius: 0px 25px 25px 0px !important;
    }

    .d-flex{
        margin-top: 60px;
        width: 50%;
        border-radius: 25px !important;
        height: 50px;
    }

    .form-control{
        border-radius: 30px !important;
        background-color: #E0E0E0;
    }

    .btn-secondary{
        background-color: #E0E0E0;  
        color: black;
        border: none;
    }

    .down-buttons{
        margin-top: 20px;
        width: 46%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

`;




export function ProjetosContent() {

    return (
        <DivContent>
            <h1 className="logo_projetos">InovaRede</h1>
            <form className="d-flex" role="search">
                <input className="form-control me-2" placeholder="Pesquise projetos de seu interesse..." aria-label="Search"/>
                <button type="button" className="btn lupa">🔍︎</button>
            </form>
            <div className="down-buttons">
                <button className="btn" type="button"  data-bs-toggle="modal" data-bs-target="#newProject">➕︎ Novo Projeto</button>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Filtrar</button>
                </div>
            </div>
        </DivContent>
    );

}

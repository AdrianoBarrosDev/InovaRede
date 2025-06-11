import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useUser } from "../context/UserContext";
import CursosPorCategoria from "../data/Cursos";
import { ProjetosCards } from "./ProjetosCards";

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

    const navigate = useNavigate();
    const { user, isLoading } = useUser();

    useEffect(() => {
        if (!isLoading && user === null) {
            navigate('/login');
        }
    }, [user, isLoading, navigate]);
    
    const [searchText, setSearchText] = useState("");
    const [filter, setFilter] = useState("");

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleFilterChange = (value) => {
        setFilter(value);
    };

    return (

        <DivContent>
            <h1 className="logo_projetos">InovaRede</h1>

            <form className="d-flex col-lg-6 col-10" role="search">
                <input
                    className="form-control me-2"
                    placeholder="Pesquise o nome do projeto"
                    aria-label="Search"
                    value={searchText}
                    onChange={handleSearchChange}
                />
                <button type="button" className="btn lupa">🔍︎</button>
            </form>

            <div className="down-buttons">

                <button className="btn" type="button" data-bs-toggle="modal" data-bs-target="#newProject">
                    ➕︎ Novo Projeto
                </button>

                <div className="dropdown d-flex justify-content-end align-items-center m-0">

                    {filter && (
                        <div style={{ padding: '8px', borderRadius: '4px' }}>
                            <strong>Filtro selecionado:</strong> {filter}
                        </div>
                    )}
                    
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                    >
                        Filtrar
                    </button>
                    <ul className="dropdown-menu overflow-y-auto" style={{ maxHeight: "300px", width: "50vw" }}>

                        <li>
                            <button className="dropdown-item" onClick={() => handleFilterChange("")}>
                                Todos
                            </button>
                        </li>

                        {CursosPorCategoria.map((grupo) => (
                            <li key={grupo.categoria} className="dropdown-submenu">
                                <span className="dropdown-header">{grupo.categoria}</span>
                                <ul> {/* Lista intermediária para cursos */}
                                    {grupo.cursos.map((curso) => (
                                        <li key={curso}>
                                            <button
                                                className="dropdown-item"
                                                onClick={() => handleFilterChange(curso)}
                                            >
                                                {curso}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
            
            {!isLoading && user && (
                <ProjetosCards searchText={searchText} filter={filter} username={user.username} />
            )}
        </DivContent>
    );
}

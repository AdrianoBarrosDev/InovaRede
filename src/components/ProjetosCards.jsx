import { useEffect, useState } from "react";
import styled from "styled-components";
import { ProjetosCard } from "./ProjetosCard";

const DivContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 100px;
    width: 100%;

    .cards_projetos{
        margin-top: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card{
        margin: 0px 10px 0px 10px;
        background-color: #ebebeb;
    }

    .div_bottom{
        border-radius: 100px 100px 0px 0px;
        margin-top: 100px;
        width: 100%;
        height: 80px;
        background-color: #DAE6F2;
        margin-right: 0px;
        position: absolute;
        bottom: 0% ;
    }

    .btn{
        background-color: #06284B;
        border: none;
    }

`;

export function ProjetosCards({ searchText, filter, username }) {

    const [projetos, setProjetos] = useState([]);

    useEffect(() => {
        
        if (!username) return;

        const params = new URLSearchParams();
        if(searchText) params.append("name", searchText);
        if(filter) params.append("course", filter);
        if(username) params.append("username", username);

        fetch(`http://localhost:8080/projects?${params.toString()}`)
        .then(response => response.json())
        .then(data => {
            setProjetos(data);
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
        });

    }, [searchText, filter]);

    return (
        <DivContent className="overflow-hidden">
            <div className="cards_projetos row gap-4">
                {projetos.map((project) => {
                    return (
                        <ProjetosCard key={project.projectId} project={project}/>
                    );
                })}
            </div>
        </DivContent>
    );

}

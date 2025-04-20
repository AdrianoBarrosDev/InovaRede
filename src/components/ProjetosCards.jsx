import { useEffect, useState } from "react";
import styled from "styled-components";
import { ProjetosCard } from "./ProjetosCard";

const DivContent = styled.div`

display: flex;
justify-content: center;
flex-direction: column;

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

export function ProjetosCards() {

    const [projetos, setProjetos] = useState([]);

    useEffect(() => {

        fetch('http://localhost:8080/projects')
        .then(response => response.json())
        .then(data => {
            setProjetos(data);
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
        });

    }, []);

    return (
        <>
            <DivContent className="overflow-hidden">
                <div className="cards_projetos row gap-4">
                    {projetos.map((projeto) => {
                        return (
                            <ProjetosCard key={projeto.projectId} projeto={projeto}/>
                        );
                    })}
                </div>
            </DivContent>
        </>
    
    );

}

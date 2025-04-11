import styled from "styled-components";

const DivHead = styled.div`
    background-color: #7299c4;

    .img-fluid{
        width: 150%;
    }


`;

export function TopInicio() {

    return (
        <>
            <DivHead>
                <img  src="public\images\img_comece.png" class="img-fluid" alt="..."></img>
            </DivHead>
        </>
    );

}
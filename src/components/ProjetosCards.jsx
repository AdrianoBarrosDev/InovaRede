import styled from "styled-components";

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

    return (
        <>
            <DivContent>
            <div className="cards_projetos">
                <div className="card" style={{width: "18rem"}}>
                <img src="images/image (2).png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card" style={{width: "18rem"}}>
                <img src="images/image (2).png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card" style={{width: "18rem"}}>
                <img src="images/image (2).png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card" style={{width: "18rem"}}>
                <img src="images/image (2).png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            </DivContent>
        </>
    
    );

}

export function ProjetosCard({ projeto }) {

    return (
        <div className="card col-3 p-3">
            <img src="images/image (2).png" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{projeto.name}</h5>
                <p className="card-text">{projeto.description}</p>
                <button className="btn btn-primary">Solicitar</button>
            </div>
        </div>
    );

}
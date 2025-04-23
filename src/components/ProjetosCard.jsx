export function ProjetosCard({ projeto }) {

    return (
        <div className="card col-3 p-3">
            <img src={projeto.image ? projeto.image : "images/image (2).png"} className="card-img-top" alt="..." style={{width: "100%", objectFit: "cover"}}/>
            <div className="card-body px-1">
                <h5 className="card-title">{projeto.name}</h5>
                <p className="card-text">{projeto.description}</p>
                <button className="btn btn-primary">Solicitar</button>
            </div>
        </div>
    );

}
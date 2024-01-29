function Card({title, cover,id}){
    return (
        <div className="card">
            
            <div className="cardContent">
                <a href={`/house/${id}`} ><img src={cover} alt="Aperçu du logement " /></a>
                <div className="cardTitle"><p>{title}</p></div>
            </div>
            
            
        </div>
    )
}

export default Card
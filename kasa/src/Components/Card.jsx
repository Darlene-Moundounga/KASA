
function Card({title, cover}){
    
    return (
        <div className="card">
            
            <div className="cardContent">
                
                <img src={cover} alt="House Cover" />
                <div className="cardTitle"><p>{title}</p></div>
            </div>
            
            
        </div>
    )
}

export default Card
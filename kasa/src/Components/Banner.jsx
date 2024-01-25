function Banner({text,image}){
    
    return (
        <div className="homeBanner">
            <img src={image} alt="Bannière" />
            <h1>{text}</h1>
        </div>
    )
}

export default Banner
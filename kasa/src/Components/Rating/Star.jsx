export default function Star({isFilled}){

    return(
        <div>
            {
                isFilled ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>
            }
        </div>
    )
}
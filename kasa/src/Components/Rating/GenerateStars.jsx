import Star from "./Star"

function generateFilledStars(starsFilled){
    const starsFilledArray = Array.from({length : starsFilled})
    return starsFilledArray.map((_, index)=> <Star isFilled={true} key={index}/>)
}

function generateEmptyStars(emptyStars){
    const emptyStarsArray = Array.from({length : emptyStars})
    return emptyStarsArray.map((_, index)=> <Star isFilled={false} key={index}/>)
}

export default function generateRating({rating}){
    return <div className="rating">
                {generateFilledStars(rating)}
                {generateEmptyStars(5-rating)}
            </div>
    
}
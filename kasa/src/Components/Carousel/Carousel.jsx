import { useState } from 'react'

export default function Carousel({pictures}){
    const images = pictures
    let [currentImage,setcurrentImage]= useState(images[0])

    return(
        <div className='carousel'>
            <img src={currentImage} alt="Aperçu de la propriété " />

                { images.length > 1? (
                    <div className='slide'>
                        <div className='vectors'>
                            <i className="fa-solid fa-angle-left" onClick={()=> setcurrentImage(getPreviousImage(currentImage,images))}></i>
                            <i className="fa-solid fa-angle-right" onClick={()=> setcurrentImage(getNextImage(currentImage,images))}></i>
                        </div>
                        <p className='numbers'>
                            {
                                `${images.indexOf(currentImage)+ 1 } / ${images.length}`
                            }
                        </p>
                    </div>)
                    :
                    null
                }
        </div>
    )

    function getPreviousImage(currentImage,images){
        const currentIndex = images.indexOf(currentImage)
        return currentIndex === 0? images[images.length-1] : images[currentIndex-1]

    }
    function getNextImage(currentImage,images){
        const currentIndex = images.indexOf(currentImage)
        return currentIndex+1 === images.length? images[0] : images[currentIndex+1]

    }
    
   
}

import {useState} from 'react'
import Chevron from './Carousel/Chevron';

function Collapse({title,description}){
    const [isUnrolled,setIsUnrolled]= useState(false)    
    const toggle = () => {
        setIsUnrolled(!isUnrolled);
    }
    
    return (
        <div className='collapseContent'>
            <div className='collapseClose' >
                <h3>{title}</h3>
                <div onClick={toggle}>
                <Chevron/>
                </div>
            </div>
            <div className={`collapseOpen ${isUnrolled && 'open'}`}> 
            {isUnrolled && (
                
                    <ul >{description}</ul> )}
            </div>
            
        </div>
    )
}

export default Collapse

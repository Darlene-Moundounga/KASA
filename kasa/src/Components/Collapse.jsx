import {useState} from 'react'
import Chevron from './Chevron';
import './chevron.css'

function Collapse({title,description}){
    const [isUnrolled,setIsUnrolled]= useState(false)    
    const toggle = () => {
        setIsUnrolled(!isUnrolled);
    }
    
    return (
        <div className='collapseContent'>
            <div className='collapseClose' onClick={toggle}>
                <h3>{title}</h3>
                <Chevron/>
            </div>
            {isUnrolled && (
                <div className='collapseOpen'> 
                    <ul>{description}</ul>
                </div>
            )}
        </div>
    )
}

export default Collapse

//animer collapse
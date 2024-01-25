import {useState} from 'react'
function Collapse({title,description}){
    const [isUnrolled,setIsUnrolled]= useState(false)    
    const toggle = () => {
        setIsUnrolled(!isUnrolled);
    }
    
    return (
        <div className='collapseContent'>
            <div className='collapseClose' onClick={toggle}>
                <h3>{title}</h3>
                {isUnrolled ? <i className="fa-solid fa-chevron-down"></i> : <i className="fa-solid fa-chevron-up"></i>}
            </div>
            {isUnrolled && (
                <div className='collapseOpen'> 
                    <p>{description}</p>
                </div>
            )}
        </div>
    )
}

export default Collapse

//animer collapse
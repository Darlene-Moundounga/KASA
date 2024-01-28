
export default function Chevron() {
    return <div className='container-chevron'>
            <i className="fa-solid fa-chevron-up chevron" 
            onClick={ (e) => animated(e.target)}></i>
    </div>
}


function animated(chevron) {
    //animer
    if(chevron.classList.contains('fa-chevron-up')) {
        removeOrAddClass(chevron, "reverseAnimation", "animated")
    } else {
        removeOrAddClass(chevron, "animated", "reverseAnimation")
    }

    //fin animation etc..
    chevron.addEventListener('animationend', () => {
        // si l'animation vers le bas est finie : afficher chevron bas
        if(chevron.classList.contains("fa-chevron-up") && chevron.classList.contains("animated")) {
            removeOrAddClass(chevron, "fa-chevron-up", "fa-chevron-down")
        } else {
            removeOrAddClass(chevron, "fa-chevron-down", "fa-chevron-up")
        }
    })
}

function removeOrAddClass(HTMLElement, classToRemove, classToAdd) {
    HTMLElement.classList.remove(classToRemove)
    HTMLElement.classList.add(classToAdd)
}



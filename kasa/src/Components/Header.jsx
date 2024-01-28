import * as React from 'react'
import Logo from '../assets/LOGO.png'
import {Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Header(){
    const currentLocation = useLocation()
    const homePath = currentLocation.pathname === "/"
    const aboutPath = currentLocation.pathname ==="/about" 
    


    return (
        <header>
            <img src={Logo} alt="Logo de Kasa" />
            <nav>
                <ul>
                    <li>
                        <Link to="/" style={ { textDecorationLine : homePath ? "underline" : "none"}}> Accueil </Link>
                    </li>
                    <li>
                        <Link to="/about" style={ { textDecorationLine : aboutPath ? "underline" : "none"}}> A Propos </Link>
                    </li>
                </ul>
            </nav>        
        </header>
    )
}

export default Header
import * as React from 'react'
import Logo from '../assets/LOGO.png'
import {Link } from 'react-router-dom'
import '../index.css'

function Header(){
    return (
        <header>
            <img src={Logo} alt="Logo de Kasa" />
            <nav>
                <ul>
                    <li><Link to="/"> Accueil </Link></li>
                    <li><Link to="/about"> A Propos </Link></li>
                </ul>
            </nav>        
        </header>
    )
}

export default Header
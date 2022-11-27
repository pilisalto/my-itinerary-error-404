import React, { useState } from 'react'
import {Link} from "react-router-dom"

export default function NavBar() {
    let [mostrarOcultar, setMostarOcultar] = useState(false)
    let [mostrarOcultar1, setMostarOcultar1] = useState(false)
    let mostrar1 = () => {
        setMostarOcultar1(!mostrarOcultar1)
        if(!mostrarOcultar1){
            setMostarOcultar(false)
        }      
    }
    let mostrar = () => {
        setMostarOcultar(!mostrarOcultar)
        if(!mostrarOcultar){
            setMostarOcultar1(false)
        } 
    }
    return (
        <>
        <div className='nav_bar'>       
            <div>
                <Link to="/">
                    <img src="/img/imagenes/logo3.png" alt="logo" className='logo2'/>
                </Link>
            </div>

            <div className='navbar'>
                <p  onClick={mostrar1} className='none nav_style_navegation nav_style'>Home</p>
                    {mostrarOcultar1 ? (
                        <div className='nav_bar nav_style row'>
                            <Link to="/cities" onClick={mostrar1} className='none nav_style'>Cities</Link>
                            <Link to="/hotels" onClick={mostrar1} className='none nav_style'>Hotels</Link>
                            <Link to="/contact" onClick={mostrar1} className='none nav_style'>Contact</Link>
                        </div>
                    )
                        : ("")}
            </div>

            <div className='nav_bar_acceso'>
                <img src="/img/icons/acceso.png" className='icons' alt="user" onClick={mostrar}/>
                    {mostrarOcultar ? (
                        <div className='column'>
                            <Link to="/signup" onClick={mostrar} className='none nav_style'>Sign Up</Link>
                            <Link to="/signin" onClick={mostrar} className='none nav_style'>Sign In</Link>
                            <Link to="/newcities" onClick={mostrar} className='none nav_style'>New City</Link>
                            <Link to="/newhotel" onClick={mostrar} className='none nav_style'>New Hotel</Link>
                        </div>
                    )
                        : ("")}
                </div>
        </div>
        </>
    )
}

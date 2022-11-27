import React, { useState } from 'react'
import {Link} from "react-router-dom"

export default function NavBar(props) {
    let {logged} = props
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
                            {!logged ?
                            (<><Link to="/cities" onClick={mostrar1} className='none nav_style'>Cities</Link>
                            <Link to="/hotels" onClick={mostrar1} className='none nav_style'>Hotels</Link>
                            <Link to="/contact" onClick={mostrar1} className='none nav_style'>Contact</Link>
                            </> )
                            :(<> <Link to="/cities" onClick={mostrar1} className='none nav_style'>Cities</Link>
                            <Link to="/hotels" onClick={mostrar1} className='none nav_style'>Hotels</Link>
                            <Link to="/mytineraries" onClick={mostrar1} className='none nav_style'>My Tineraries</Link>
                            <Link to="/myshows" onClick={mostrar1} className='none nav_style'>My Shows</Link>
                            <Link to="/myhotels" onClick={mostrar1} className='none nav_style'>My Hotels</Link>
                            <Link to="/mycities" onClick={mostrar1} className='none nav_style'>My Cities</Link></> )}
                        </div>
                    )
                        : ("")}
            </div>

            <div className='nav_bar_acceso'>
                <img src="/img/icons/acceso.png" className='icons' alt="user" onClick={mostrar}/>
                    {mostrarOcultar ? ( !logged ?
                        (<div className='column'>
                            <Link to="/signup" onClick={mostrar} className='none nav_style'>Sign Up</Link>
                            <Link to="/signin" onClick={mostrar} className='none nav_style'>Sign In</Link>
                          
                        </div>):(<> 
                        <div className='column'>
                        <p  onClick={mostrar} className='none nav_style'>Sign Out</p>
                        <Link to="/newcities" onClick={mostrar} className='none nav_style'>New City</Link>
                        <Link to="/newhotel" onClick={mostrar} className='none nav_style'>New Hotel</Link>
                        </div>
                        </> )
                    )
                        : ("")}
                </div>
        </div>
        </>
    )
}

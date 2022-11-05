import React, { useState } from 'react'
import {Link} from "react-router-dom"
import AutoToTop from './AutoToTop';

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
    <AutoToTop/>
    return (
        <>       
            <div className='flex space-around align-center'>
                <div>
                    <button onClick={mostrar1}> pags</button>
                    {mostrarOcultar1 ? (
                        <>
                            <div className='flex '>
                                <Link to="/index" >
                                <button onClick={mostrar1}>Home</button>
                                </Link>
                                <Link to="/activities" >
                                <button onClick={mostrar1}>Activities</button>
                                </Link>
                                <Link to="/shows" >
                                <button onClick={mostrar1}>Shows</button>
                                </Link>
                                <Link to="/about" >
                                <button onClick={mostrar1}>About Us</button>
                                </Link>
                            </div>
                        </>
                    )
                        : ("")}

                </div>
                <div>
                    <img src="/img/login.png" className='icon userNav' alt="" onClick={mostrar} />
                    {mostrarOcultar ? (
                        <>
                            <div className='flex direction-column'>
                                <Link to="/signup" >
                                <button onClick={mostrar}>SignUp</button>
                                </Link>
                                <Link to="/signin" >
                                <button onClick={mostrar}>SignIn</button>
                                </Link>
                            </div>
                        </>
                    )
                        : ("")}
                </div>
            </div>
        
        </>
    )
}

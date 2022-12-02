import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import signInAction from "../redux/actions/signInAction"
import { useNavigate } from 'react-router-dom'

export default function NavBar(props) {
    let { logged, role } = props
    let { photo, name} = useSelector(store => store.signInReducer)
    let [mostrarOcultar, setMostarOcultar] = useState(false)
    let [mostrarOcultar1, setMostarOcultar1] = useState(false)
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const Swal = require('sweetalert2')
    let mostrar1 = () => {
        setMostarOcultar1(!mostrarOcultar1)
        if (!mostrarOcultar1) {
            setMostarOcultar(false)
        }
    }
    let mostrar = () => {
        setMostarOcultar(!mostrarOcultar)
        if (!mostrarOcultar) {
            setMostarOcultar1(false)
        }
    }


    let signOut = async () => {
        setMostarOcultar(!mostrarOcultar)
        if (!mostrarOcultar) {
            setMostarOcultar1(false)
        }
        let token = JSON.parse(localStorage.getItem('token'))
        let user = await dispatch(signInAction.salir(token.token.user))
        console.log(user)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: user.payload.response,
            showConfirmButton: false,
            timer: 2000
        })
        navigation("/")

    }
    return (
        <>
            <div className='nav_bar'>
                <div>
                    <Link to="/">
                        <img src="/img/imagenes/logo3.png" alt="logo" className='logo2' />
                    </Link>
                </div>

                <div className='navbar'>
                    <p onClick={mostrar1} className='none nav_style_navegation nav_style'>Home</p>
                    {mostrarOcultar1 ? (
                        <div className='nav_bar nav_style row'>
                            {!logged ?
                                (<><Link to="/cities" onClick={mostrar1} className='none nav_style'>Cities</Link>
                                    <Link to="/hotels" onClick={mostrar1} className='none nav_style'>Hotels</Link>
                                    <Link to="/contact" onClick={mostrar1} className='none nav_style'>Contact</Link>
                                </>)
                                : (role === "user" ? (<> <Link to="/cities" onClick={mostrar1} className='none nav_style'>Cities</Link>
                                    <Link to="/hotels" onClick={mostrar1} className='none nav_style'>Hotels</Link>
                                    <Link to="/mytineraries" onClick={mostrar1} className='none nav_style'>My Tineraries</Link>
                                    <Link to="/myshows" onClick={mostrar1} className='none nav_style'>My Shows</Link>
                                </>)
                                    : (<> <Link to="/cities" onClick={mostrar1} className='none nav_style'>Cities</Link>
                                        <Link to="/hotels" onClick={mostrar1} className='none nav_style'>Hotels</Link>
                                        <Link to="/myhotels" onClick={mostrar1} className='none nav_style'>My Hotels</Link>
                                        <Link to="/mycities" onClick={mostrar1} className='none nav_style'>My Cities</Link></>)
                                )}
                        </div>
                    )
                        : ("")}
                </div>

                <div className='nav_bar_acceso'>

                    {!logged ? (<img src="/img/icons/acceso.png" className='icons' alt="user" onClick={mostrar} />) :
                        (<><img src={photo} className='icons' alt="user" onClick={mostrar} /> <p className='p'>{name}</p>  </>)
                    }
                    {mostrarOcultar ? (!logged ?
                        (<div className='column'>
                            <Link to="/signup" onClick={mostrar} className='none nav_style'>Sign Up</Link>
                            <Link to="/signin" onClick={mostrar} className='none nav_style'>Sign In</Link>

                        </div>) : (<>
                            <div className='column'>
                                <p onClick={signOut} className='none nav_style'>Sign Out</p>
                                {role === "user" ?
                                    (<><Link to="/newhotel" onClick={mostrar} className='none nav_style'>New Hotel</Link>
                                        <Link to={"/profile"} onClick={mostrar1} className='none nav_style'>Profile</Link>
                                    </>)
                                    : (<><Link to="/newcities" onClick={mostrar} className='none nav_style'>New City</Link>
                                    <Link to="/newreactions" onClick={mostrar} className='none nav_style'>New Reactions</Link></>)}
                            </div>
                        </>)
                    )
                        : ("")}
                </div>
            </div>
        </>
    )
}

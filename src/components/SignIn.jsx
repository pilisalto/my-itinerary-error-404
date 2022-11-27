import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ButtonGoogle from './ButtonGoogle'
import NavBar from './NavBar'
import { useSelector, useDispatch } from 'react-redux'
import signInAction from "../redux/actions/signInAction"
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
    let [nam, setNam] = useState("")
    let [pw, setPw] = useState("")
    const navigation = useNavigate()
    const users = useSelector(store => store.signInReducer.ingresar)
    const dispatch = useDispatch()
    const Swal = require('sweetalert2')
    let name = (e) => {
        setNam(e)
    }
    let pwd = (a) => {
        setPw(a)
    }
    let val = async (e) => {
        e.preventDefault()
        try{
            let user = await dispatch(signInAction.ingresar({email:nam,password:pw}))
            if(user.payload.success){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: user.payload.response.message,
                    showConfirmButton: false,
                    timer: 2000
                })
                navigation("/")
            }
            else{
                Swal.fire({
                    title: 'Error!',
                    text: user.payload.response.message,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            }
        }
        catch(error){
            console.log(error)
        }

    }
    return (
        <>
        <div className='image_back3'>
        <div><NavBar/></div>
        <div className='container'>
        <h1 className='h1 row'>Sign<span className='resaltado'>In</span></h1>
            <div class="login-box">
                <img src="img/imagenes/fondo1.png" class="avatar" alt="AvatarImage"/>
                <h1 className='h1_2'>Login Here</h1>
                <form>
                    <label className='label'>Email</label>
                    <input className='input' onChange={e => name(e.target.value)} type="text" placeholder="Enter Email" required />
                    <label className='label'>Password</label>
                    <input className='input' onChange={a => pwd(a.target.value)} type="password" placeholder="Enter Password"  required/>
                    
                        <input onClick={e =>val(e)} className='boton a' type="submit" value="Log In" />
                    <Link to={"/signup"} className='none a' >Don't have An account?</Link>
                    <div>
                    <ButtonGoogle/>
                    </div>
                </form>
            </div>
            </div>
            </div>

        </>
    )

}

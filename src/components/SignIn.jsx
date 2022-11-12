import React, { useState } from 'react'
import users from "../data/user"
import { Link } from 'react-router-dom'
import ButtonGoogle from './ButtonGoogle'
import NavBar from './NavBar'

export default function SignIn() {
    let [nam, setNam] = useState("")
    let [pw, setPw] = useState("")
    let name = (e) => {
        setNam(e)
    }
    let pwd = (a) => {
        setPw(a)
    }
    let val = (e) => {

        let user = users.find(value => value.email === nam.toLowerCase())
        if (user) {
            if (pw === user.password) {
                alert("Contraseña correcta")

            }
            else if(pw.length){
                alert("Contraseña incorrecta")
            }
        }
        else if(nam.length && pw.length){
            alert("email no valid")
        }
    }
    return (
        <>
        <div className='image_back3'>
        <div className='home3'>
        <div><NavBar/></div>
        <h1 className='h1 row'>Sign<span className='resaltado'>In</span></h1>
            <div class="login-box">
                <img src="img/imagenes/fondo1.png" class="avatar" alt="AvatarImage"/>
                <h1 className='h1_2'>Login Here</h1>
                <form>
                    <label className='label'>Username</label>
                    <input className='input' onChange={e => name(e.target.value)} type="text" placeholder="Enter Email" required />
                    <label className='label'>Password</label>
                    <input className='input' onChange={a => pwd(a.target.value)} type="password" placeholder="Enter Password"  required/>
                    
                        <input onClick={e =>val(e)} className='boton1 a' type="submit" value="Log In" />
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

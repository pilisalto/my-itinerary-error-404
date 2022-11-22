import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import users from '../data/user'
import NavBar from './NavBar'

export default function SignUp() {
    let [emaili, setEmaili] = useState("")
    const event = (e) => {
        setEmaili(e)
    }
    const confEmail = (a) => {
        
        let bool = false
        let array = []
        for(let i=0;i<5;i++){
            if(a.target.form[i].value.length){
                array.push(a.target.form[i].value)
                bool = true
            }
            else{
                bool = false
                return bool
            }
        } 
        if(bool){
            let user = users.find(e => e.email === emaili.toLowerCase())
            if(user){
                alert("Correo ya registrado")
            }
            else{
                localStorage.setItem("user",array)
                alert("Registro exitoso")
            }
        }
        console.log(bool)

    }
    return (
        <>
        <div className='image_back2'>
            <div><NavBar/></div>
            <div className='container'>
                <div className='container1'>
                <h1 className='h1_2'>Login Here</h1>
                    <form>
                        <div>
                            <div>
                                <label className='.titulo'>Full Name</label>
                                <input className='input' type="text" placeholder="Enter your name " required />
                            </div>
                            <div >
                                <label >Username</label>
                                <input  className='input' type="text" placeholder="Enter your Username " required />
                            </div>
                            <div>
                                <label>Contact No</label>
                                <input className='input' type="text" placeholder="Enter your Contact No " required />
                            </div>
                            <div>
                                <label>E-mail</label>
                                <input className='input' type="text" onChange={e => event(e.target.value)} placeholder="Enter your Email " required />
                            </div>
                            <div>
                                <label>Password</label>
                                <input className='input' type="password" placeholder="Enter your Password " required />
                            </div>
                        </div>
                        <div>
                            <input onClick={a =>confEmail(a)} type="submit" className='boton a send1' value="Register" />
                        </div>
                        </form>
                <Link to={"/signin"} className='none a'>Do you have An account?</Link>
        </div>
        </div>
        </div>
        </>
    )
}
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import { useSelector, useDispatch } from 'react-redux'
import usersAction from '../redux/actions/usersAction'

export default function SignUp() {
    const users = useSelector(store => store.usersReducer.getUsers)
    const dispatch = useDispatch()
    const Swal = require('sweetalert2')
    const [addCity, setAddCity] = useState({
        "name": "",
        "lastName": "",
        "photo": "",
        "age": "",
        "email": "",
        "password": ""
    })
    const event = (e) => {
        const value = e.target.value
        const prop = e.target.name
        setAddCity({
            ...addCity,
            [prop]: value
        })
    }
    const confEmail = async (a) => {
        a.preventDefault()
        try {
            let res = await dispatch(usersAction.newUsers(addCity))
            if (res.payload.success) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: "check your email to verify account",
                    showConfirmButton: false,
                    timer: 4000
                })
                for (let i = 0; i < 6; i++) {
                    document.getElementsByTagName("input")[i].value = "";
                }
                setAddCity({
                    "name": "",
                    "lastName": "",
                    "photo": "",
                    "age": "",
                    "email": "",
                    "password": ""
                })


            } else {
                Swal.fire({
                    title: 'Error!',
                    text: res.payload.response,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            }

        }
        catch (error) {
            console.log(error)
            Swal.fire({
                title: 'Error!',
                text: error,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }


    }
    return (
        <>
            <div className='image_back2'>
                <div><NavBar /></div>
                <div className='container'>
                    <div className='container1' id="myForm">
                        <h1 className='h1_2'>Login Here</h1>
                        <form>
                            <div>
                                <div>
                                    <label className='.titulo'>Name</label>
                                    <input name="name" className='input' type="text" onChange={e => event(e)} placeholder="Enter your name " required />
                                </div>
                                <div >
                                    <label >Last Name</label>
                                    <input name="lastName" className='input' type="text" onChange={e => event(e)} placeholder="Enter your Username " required />
                                </div>
                                <div>
                                    <label>Photo</label>
                                    <input name="photo" className='input' type="text" onChange={e => event(e)} placeholder="Enter your photo " required />
                                </div>
                                <div>
                                    <label>Age</label>
                                    <input name="age" className='input' type="text" onChange={e => event(e)} placeholder="Enter your photo " required />
                                </div>

                                <div>
                                    <label>E-mail</label>
                                    <input name="email" className='input' type="text" onChange={e => event(e)} placeholder="Enter your Email " required />
                                </div>
                                <div>
                                    <label>Password</label>
                                    <input name="password" className='input' type="password" onChange={e => event(e)} placeholder="Enter your Password " required />
                                </div>
                            </div>
                            <div>
                                <input onClick={a => confEmail(a)} type="submit" className='boton a send1' value="Register" />
                            </div>
                        </form>
                        <Link to={"/signin"} className='none a'>Do you have An account?</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
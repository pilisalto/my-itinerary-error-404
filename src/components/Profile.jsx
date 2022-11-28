import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import signInAction from "../redux/actions/signInAction"
import { BASE_URL } from '../api/url'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Profile() {
    const { user, _id } = useSelector(store => store.signInReducer)
    let [stat, setStat] = useState("")
    const dispatch = useDispatch()
    const Swal = require('sweetalert2')
    const [addPro, setAddPro] = useState({
        "name": '',
        "lastName": '',
        "photo": '',
        "age": ''
    })
    const readInput = (e) => {
        const value = e.target.value
        const prop = e.target.name
        setAddPro({
            ...addPro,
            [prop]: value
        })
    }

    useEffect(() => {
        dispatch(signInAction.getUser(_id))
    }, [])

    const ValidateInfo = async (e) => {
        e.preventDefault()
        await axios.patch(`${BASE_URL}/api/auth/me/${_id} `, addPro)
            .then(function (response){
                console.log(response.data)
                if(response.data.success){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Profil Edit',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      window.location.reload()       

                }
                else{
                    Swal.fire({
                        title: 'Error!',
                        text: response.data.message.join("- - - - -"),
                        icon: 'error',
                        confirmButtonText: 'Cool'
                      })
                }
            })
            .catch(function (error) {
                console.log(error.message);
                Swal.fire({
                    title: 'Error!',
                    text: 'profil was not edit',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                  })
            })
    }

    console.log(stat)
    return (
        <div className='image_back2'>
            <div className='container'>
                <div>
                    <div>
                        <img className='img_user' src={user.photo}/>
                        <h4 className='h4_2 row'><p>Name: </p> {user.name}</h4>
                        <h4 className='h4_2 row'><p>Last Name: </p> {user.lastName}</h4>
                        <h4 className='h4_2 row'><p>Age: </p> {user.age}</h4>
                    </div>
                    <div className='container1'>
                        <h1 className='h1_2'>My Profile</h1>
                        <form action="">
                            <label className='label '>Name: </label>
                            <input className='input' onChange={readInput} name="name" type="text" place="Name" />
                            <label className='label'>Last Name: </label>
                            <input className='input' onChange={readInput} name="lastName" type="text" place='Last Name' />
                            <label className='label'>Photo: </label>
                            <input className='input' onChange={readInput} name="photo" type="text" place='Photo' />
                            <label className='label'>Age: </label>
                            <input className='input' onChange={readInput} name="age" type="number" place="Age" />
                            <div>
                                <button className='boton a send1' onClick={(e) => ValidateInfo(e)}>Edit Profil</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

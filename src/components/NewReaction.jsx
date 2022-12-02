import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../api/url'
import { useState } from 'react'

export default function NewReaction() {
    const Swal = require('sweetalert2')
    const [addCity, setAddCity] = useState({
        "itineraryId": "",
        "name": '',
        "icon": '',
        "iconBack": ''
    })

    const readInput = (e) => {
        const value = e.target.value
        const prop = e.target.name
        setAddCity({
            ...addCity,
            [prop]: value
        })
    }
    const func = async (e) => {
        e.preventDefault()
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be continue!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
          }).then((result) => {
            if (result.isConfirmed) {
             
        (axios.post(`${BASE_URL}/api/reactions`,addCity)
        .then(function (response){
            console.log(response.data)
            if(response.data.success){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'was successfully created',
                    showConfirmButton: false,
                    timer: 1500
                  })
                
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
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        }))
            }
          })
          
        

    }
    return (
        <div className='image_back3'>
            <div className='container'>
                <div className='container1'>
                    <h1 className='h1_2'>Enter the Reaction information</h1>
                    <form action="">

                        <label htmlFor="">
                        </label>

                        <label className='.titulo' htmlFor="">Itineray Id</label>
                        <input className='input' name='itineraryId' onChange={readInput} type="text" placeholder="itinerary Id"/>
                        
                        <label className='.titulo' htmlFor="">Name</label>
                        <input className='input' name='name' onChange={readInput} type="text" placeholder="Name" />

                        <label className='.titulo' htmlFor="">Icon</label>
                        <input className='input' name='icon' onChange={readInput} type="text" placeholder="icon" />

                        <label className='.titulo' htmlFor="">Icon Back</label>
                        <input className='input' name='iconBack' onChange={readInput} type="text" placeholder="iconBack" />

                        <div>
                            <button className='boton a send1' onClick={(e) => func(e)}>Send Information</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import HotelCard from "./HotelCard"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import NavBar from './NavBar'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import myHotelsAction from '../redux/actions/myHotelsAction'
import axios from 'axios'
import { BASE_URL } from '../api/url'

export default function MyHotels() {
    const filtrarCities = useSelector(store => store.myHotelsReducer.hotelsFiltrados)
    const dispatch = useDispatch()
    const Swal = require('sweetalert2')
    const [addCity, setAddCity] = useState({
        "_id": "",
        "name": "",
        "photo": [],
        "capacity": "",
        "cityId": "",
        "userId": ""
    })

    const readInput = (e) => {
        const value = e.target.value
        const prop = e.target.name
        setAddCity({
            ...addCity,
            [prop]: value
        })
    }

    useEffect(() => {
        dispatch(myHotelsAction.filtrarHotels("636e63981471b35a5c064d4d"));
    }, []);
    console.log(filtrarCities)
    async function deleteHotels(e) {
        console.log(e)
        dispatch(myHotelsAction.eliminarHotels(e))
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Hotel Delete',
            showConfirmButton: false,
            timer: 1500
          })
        window.location.reload()
    }

    async function ValidateInfo(e) {
        e.preventDefault()
        await axios.put(`${BASE_URL}/api/hotels/${addCity._id} `, addCity)
            .then(function (response){
                console.log(response.data)
                if(response.data.success){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Hotel Edit',
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
                console.log(error);
                Swal.fire({
                    title: 'Error!',
                    text: 'The hotel was not edit',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                  })
            })
        
    }
    return (
        <>
            <div><NavBar /></div>
            <div>
            <div className='container'>
            <div className='container1'>
            <h1 className='h1_2'>Enter the Hotel information</h1>
            <form>
<label className='.titulo' htmlFor="">Id</label>                
<input className='input' name="_id" type="text" placeholder='_id' onChange={readInput} required />
<label className='.titulo' htmlFor="">Hotel's Name</label>
<input className='input' name="name" type="text" placeholder='Hotel´s Name' onChange={readInput} required />
<label className='.titulo' htmlFor="">Photo</label>
<input className='input' name="photo" type="text" placeholder='Photo' onChange={readInput} required />
<label className='.titulo' htmlFor="">Capacity</label>
<input className='input' name="capacity" type="number" placeholder='Capacity' onChange={readInput} required />
<label className='.titulo' htmlFor="">City Id</label>
<input className='input' name="cityId" type="text" placeholder='City Id' onChange={readInput} required />
<label className='.titulo' htmlFor="">Your Id</label>
<input className='input' name="userId" type="text" placeholder='Your Id' onChange={readInput} required />

<button className='boton a send1' onClick={e =>ValidateInfo(e)}>Edit Hotel</button>
</form>
            </div>
            <div> {filtrarCities.map((e, b, c) => (<> <Link to={"/hotel/" + c[b]._id}><HotelCard name={e.name} photo={e.photo} capacity={e.capacity} /></Link> <button name={e._id} onClick={e => deleteHotels(e.target.name)}>Delete</button></>))} </div>
            </div>
            </div>
        </>

    )
}

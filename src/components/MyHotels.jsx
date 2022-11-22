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
        alert("Hotel Delete")
        window.location.reload()
    }

    async function ValidateInfo(e) {
        e.preventDefault()
        await axios.put(`${BASE_URL}/api/hotels/${addCity._id} `, addCity)
            .then(function (response){
                console.log(response.data)
                if(response.data.success){
                    alert("Hotel Edit")
                    window.location.reload()                  

                }
                else{
                    alert(response.data.message.join("- - - - -"))
                }
            })
            .catch(function (error) {
                console.log(error);
                alert("The hotel was not edit")
            })
        
    }
    return (
        <>
            <div><NavBar /></div>
            <div>
            <form className='sign-in'   >

<h3>Enter the Hotel information</h3>
<input name="_id" type="text" placeholder='_id' onChange={readInput} required />
<input name="name" type="text" placeholder='Hotel´s Name' onChange={readInput} required />
<input name="photo" type="text" placeholder='Photo' onChange={readInput} required />
<input name="capacity" type="number" placeholder='Capacity' onChange={readInput} required />
<input name="cityId" type="text" placeholder='City Id' onChange={readInput} required />
<input name="userId" type="text" placeholder='Your Id' onChange={readInput} required />

<button className=' button login' onClick={e =>ValidateInfo(e)}>Edit Hotel</button>
</form>
            </div>
            <div> {filtrarCities.map((e, b, c) => (<> <Link to={"/hotel/" + c[b]._id}><HotelCard name={e.name} photo={e.photo} capacity={e.capacity} /></Link> <button name={e._id} onClick={e => deleteHotels(e.target.name)}>Delete</button></>))} </div>
        </>
    )
}

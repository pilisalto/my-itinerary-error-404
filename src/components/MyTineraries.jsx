import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import NavBar from './NavBar'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import myTinerariesAction from '../redux/actions/myTinerariesAction'
import axios from 'axios'
import { BASE_URL } from '../api/url'
import Itinerary from "./Itinerary"

export default function MyTineraries() {
    const filtrarTineraries = useSelector(store => store.myTinerariesReducer.tinerariesFiltrados)
    const dispatch = useDispatch()
    const [addCity, setAddCity] = useState({
        "_id": "",
        "cityId": "",
        "name": "",
        "photo": [],
        "descripcion": "",
        "duration": "",
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
        dispatch(myTinerariesAction.filtrarTineraries("636e63981471b35a5c064d4e"));
    }, []);
   
    async function deleteTineraries(e) {
        console.log(e)
        dispatch(myTinerariesAction.eliminarTineraries(e))
        alert("Tinerary Delete")
        window.location.reload()
    }

    async function ValidateInfo(e) {
        e.preventDefault()
        await axios.put(`${BASE_URL}/api/itineraries/${addCity._id} `, addCity)
            .then(function (response) {
                console.log(response.data)
                if (response.data.success) {
                    alert("Tinerary Edit")
                    window.location.reload()

                }
                else {
                    alert(response.data.message.join("- - - - -"))
                }
            })
            .catch(function (error) {
                console.log(error);
                alert("The Tinerary was not edit")
            })

    }
    return (
        <>
            <div><NavBar /></div>
            <div>
            <div className='container'>
            <div className='container1'>
            <h1 className='h1_2'>Enter the Itinerary information</h1>
                <form>
                    <label className='.titulo' htmlFor="">Id</label>
                    <input name="_id" type="text" placeholder='_id' onChange={readInput} required />
                    <label className='.titulo' htmlFor="">City Id</label>
                    <input name="cityId" type="text" placeholder='City Id' onChange={readInput} required />
                    <label className='.titulo' htmlFor="">Name</label>
                    <input name="name" type="text" placeholder='Tinerary´s Name' onChange={readInput} required />
                    <label className='.titulo' htmlFor="">Photo</label>
                    <input name="photo" type="text" placeholder='Photo' onChange={readInput} required />
                    <label className='.titulo' htmlFor="">Descripcion</label>
                    <input name="descripcion" type="text" placeholder='descripcion' onChange={readInput} required />
                    <label className='.titulo' htmlFor="">Duration</label>
                    <input name="duration" type="text" placeholder='duration' onChange={readInput} required />
                    <label className='.titulo' htmlFor="">Your Id</label>
                    <input name="userId" type="text" placeholder='Your Id' onChange={readInput} required />

                    <button className=' buoton a send1' onClick={e => ValidateInfo(e)}>Edit Hotel</button>
                </form>
            </div>
            <div> {filtrarTineraries.map((e) => (<> <Itinerary name={e.name} photo={e.photo[0]} descripcion={e.descripcion} price={e.price} /> <button name={e._id} onClick={e => deleteTineraries(e.target.name)}>Delete</button></>))} </div>
            </div>
            </div>
        </>
    )
}

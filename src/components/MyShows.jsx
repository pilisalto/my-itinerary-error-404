import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import NavBar from './NavBar'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import myShowsAction from '../redux/actions/myShowsAction'
import axios from 'axios'
import { BASE_URL } from '../api/url'
import Shows from './Shows'

export default function MyShows() {
    const filtrarShows = useSelector(store => store.myShowsReducer.showsFiltrados)
    const dispatch = useDispatch()
    const [addCity, setAddCity] = useState({
        "_id": "",
        "hotelId": "",
        "name": "",
        "description": "",
        "photo": "",
        "price": "",
        "date": "",
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
        dispatch(myShowsAction.filtrarShows("636e63981471b35a5c064d4d"));
    }, []);

    async function deleteShows(e) {
        console.log(e)
        dispatch(myShowsAction.eliminarShows(e))
        alert("Show Delete")
        window.location.reload()
    }

    async function ValidateInfo(e) {
        e.preventDefault()
        await axios.put(`${BASE_URL}/api/shows/${addCity._id} `, addCity)
            .then(function (response) {
                console.log(response.data)
                if (response.data.success) {
                    alert("Show Edit")
                    window.location.reload()

                }
                else {
                    alert(response.data.message.join("- - - - -"))
                }
            })
            .catch(function (error) {
                console.log(error);
                alert("The Shows was not edit")
            })

    }
    return (
        <>
            <div><NavBar /></div>
            <div>
                <form className='sign-in'   >

                    <h3>Enter the Show information</h3>
                    <input name="_id" type="text" placeholder='_id' onChange={readInput} required />
                    <input name="hotelId" type="text" placeholder='Hotel Id' onChange={readInput} required />
                    <input name="name" type="text" placeholder='Show´s Name' onChange={readInput} required />
                    <input name="descripcion" type="text" placeholder='descripcion' onChange={readInput} required />
                    <input name="photo" type="text" placeholder='Photo' onChange={readInput} required />
                    <input name="price" type="number" placeholder='Price' onChange={readInput} required />
                    <input name="date" type="number" placeholder='date' onChange={readInput} required />
                    <input name="userId" type="text" placeholder='Your Id' onChange={readInput} required />

                    <button className=' button login' onClick={e => ValidateInfo(e)}>Edit Show</button>
                </form>
            </div>
            <div> {filtrarShows.map((e) => (<> <Shows Shows name={e.name} photo={e.photo} description={e.description} price={e.price} /> <button name={e._id} onClick={e => deleteShows(e.target.name)}>Delete</button></>))} </div>
        </>
    )
}

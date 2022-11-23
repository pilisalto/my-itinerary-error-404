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
    const Swal = require('sweetalert2')
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
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Show Delete',
            showConfirmButton: false,
            timer: 1500
          })
        window.location.reload()
    }

    async function ValidateInfo(e) {
        e.preventDefault()
        await axios.put(`${BASE_URL}/api/shows/${addCity._id} `, addCity)
            .then(function (response) {
                console.log(response.data)
                if (response.data.success) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Show Edit',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    window.location.reload()

                }
                else {
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
                    position: 'top-end',
                    icon: 'success',
                    title: 'The Shows was not edit',
                    showConfirmButton: false,
                    timer: 1500
                  })
            })

    }
    return (
        <>
            <div><NavBar /></div>
            <div>
            <div className='container'>
            <div className='container1'>
            <h1 className='h1_2'>nter the Show information</h1>
                <form>
                    <label className='.titulo' htmlFor="">Id</label>  
                    <input className='input' name="_id" type="text" placeholder='_id' onChange={readInput} required />
                    <label className='.titulo' htmlFor="">Hotel Id</label>  
                    <input className='input' name="hotelId" type="text" placeholder='Hotel Id' onChange={readInput} required />
                    <label className='.titulo' htmlFor="">Name</label>  
                    <input className='input' name="name" type="text" placeholder='Show´s Name' onChange={readInput} required />
                    <label className='.titulo' htmlFor="">Description</label>  
                    <input className='input' name="descripcion" type="text" placeholder='descripcion' onChange={readInput} required />
                    <label className='.titulo' htmlFor="">Photo</label>  
                    <input className='input' name="photo" type="text" placeholder='Photo' onChange={readInput} required />
                    <label className='.titulo' htmlFor="">Price</label>  
                    <input className='input' name="price" type="number" placeholder='Price' onChange={readInput} required />
                    <label className='.titulo' htmlFor="">Date</label>  
                    <input className='input' name="date" type="number" placeholder='date' onChange={readInput} required />
                    <label className='.titulo' htmlFor="">Your Id</label>  
                    <input className='input' name="userId" type="text" placeholder='Your Id' onChange={readInput} required />

                    <button className='boton a send1' onClick={e => ValidateInfo(e)}>Edit Show</button>
                </form>
            </div>
            <div> {filtrarShows.map((e) => (<> <Shows Shows name={e.name} photo={e.photo} description={e.description} price={e.price} /> <button name={e._id} onClick={e => deleteShows(e.target.name)}>Delete</button></>))} </div>
            </div>
            </div>
        </>
    )
}

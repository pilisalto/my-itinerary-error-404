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
import signInAction from "../redux/actions/signInAction"
import citiesAction from '../redux/actions/citiesAction'

export default function MyTineraries() {
    const filtrarTineraries = useSelector(store => store.myTinerariesReducer.tinerariesFiltrados)
    const { user, _id , token} = useSelector(store => store.signInReducer)
    let headers = {headers: {'Authorization': `Bearer ${token}`}}
    const listaCities = useSelector(store => store.citiesReducer.listaCities)
    const citiesFiltrados = useSelector(store => store.citiesReducer.citiesFiltrados)
    const dispatch = useDispatch()
    const Swal = require('sweetalert2')
    const [addCity, setAddCity] = useState({
        "_id": "",
        "cityId": "",
        "name": "",
        "photo": "",
        "descripcion": "",
        "price":"",
        "duration": "",
        "userId": _id

    })
    const [addCity1, setAddCity1] = useState({
        "cityId": "",
        "name": "",
        "photo": "",
        "descripcion": "",
        "price":"",
        "duration": "",
        "userId": _id

    })

    const readInput = (e) => {
        const value = e.target.value
        const prop = e.target.name
        setAddCity({
            ...addCity,
            [prop]: value
        })
    }
    const readInput1 = (e) => {
        const value = e.target.value
        const prop = e.target.name
        setAddCity1({
            ...addCity1,
            [prop]: value
        })
    }


    useEffect(() => {
        dispatch(myTinerariesAction.filtrarTineraries(_id));
        dispatch(citiesAction.filtrarCities(["", ""]))
    }, []);
    async function deleteTineraries(e) {
        console.log(e)
        let g = {
            idCity: e,
            token: token
        }
        await dispatch(myTinerariesAction.eliminarTineraries(g))
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tinerary Delete',
            showConfirmButton: false,
            timer: 1500
        })
        await dispatch(myTinerariesAction.filtrarTineraries(_id))
    }
    async function ValidateInfo(e) {
        e.preventDefault()
        await axios.put(`${BASE_URL}/api/itineraries/${addCity._id} `, addCity,headers)
            .then(function (response) {
                if (response.data.success) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Tinerary Edit',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    
                }
                else {
                    Swal.fire({
                        title: 'Error!',
                        text: response.data.message,
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
                Swal.fire({
                    title: 'Error!',
                    text: 'The Tinerary was not edit',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })
            dispatch(myTinerariesAction.filtrarTineraries(_id))

    }
    async function ValidateInfo1(e) {
        e.preventDefault()
        console.log(addCity1)
        await axios.post(`${BASE_URL}/api/itineraries`, addCity1, headers)
            .then(function (response) {
                if (response.data.success) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'New Tinerary',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    dispatch(myTinerariesAction.filtrarTineraries(_id))

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
                    title: 'Error!',
                    text: 'The Tinerary was not Create',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })

    }
    return (
        <>
            <div className='image_back4'>
                <div className='container'>
                    <div className='container1'>
                        <h1 className='h1_2'>Edit the Itinerary information</h1>
                        <form>
                            <label className='.titulo' htmlFor="">Id</label>
                            <input className='input' name="_id" type="text" placeholder='_id' onChange={readInput} required />
                            <label className='.titulo' htmlFor="">City Id</label>
                            <input className='input' name="cityId" type="text" placeholder='City Id' onChange={readInput} required />
                            <label className='.titulo' htmlFor="">Name</label>
                            <input className='input' name="name" type="text" placeholder='Tinerary´s Name' onChange={readInput} required />
                            <label className='.titulo' htmlFor="">Photo</label>
                            <input className='input' name="photo" type="text" placeholder='Photo' onChange={readInput} required />
                            <label className='.titulo' htmlFor="">Descripcion</label>
                            <input className='input' name="descripcion" type="text" placeholder='descripcion' onChange={readInput} required />
                            <label className='.titulo' htmlFor="">Duration</label>
                            <input className='input' name="duration" type="text" placeholder='duration' onChange={readInput} required />
                            <label className='.titulo' htmlFor="">Price</label>
                            <input className='input' name="price" type="text" placeholder='price' onChange={readInput} required />
                            <button className=' boton a send1' onClick={e => ValidateInfo(e)}>Edit Tinerary</button>
                        </form>
                        <h1 className='h1_2'>New Itinerary information</h1>
                    <form action="">
                        <label className='.titulo' htmlFor="">Name:
                        <input className='input' onChange={readInput1} name="name" type="text" place="Name" id="name" />
                        </label>
                        <label className='.titulo' htmlFor="">Photo:
                        <input className='input' onChange={readInput1} name="photo" type="text" place='Photo' id="Photo1" />
                        </label>
                        <label className='.titulo' htmlFor="">Description:
                        <input className='input' onChange={readInput1} name="descripcion" type="text" place="Description" id="description" />
                        </label>
                        <label className='.titulo' htmlFor="">Price:
                        <input className='input' onChange={readInput1} name="price" type="number" place="Price" id="price" />
                        </label>
                        <label className='.titulo' htmlFor="">Duration:
                        <input className='input' onChange={readInput1} name="duration" type="number" place="Duration" id="duration" />
                        </label>
                        <label className='.titulo' htmlFor='cityId'>Select a city :</label>
                        <select onChange={readInput1} name="cityId" id="cityId">
                            {citiesFiltrados.map(city => <option  name="cityId" key={city._id} value={city._id}>{city.name}</option>)}
                        </select>
                        <button className=' boton a send1' onClick={e => ValidateInfo1(e)}>New Tinerary</button>
                    </form>
                </div>
                <div> {filtrarTineraries.map((e) => (<> <Itinerary name={e.name} photo={e.photo[0]} descripcion={e.descripcion} price={e.price} _id={e._id} /> <button className='boton a send1' name={e._id} onClick={e => deleteTineraries(e.target.name)}>Delete</button></>))} </div>
                </div>
            </div>
        </>
    )
}

import React from 'react'
import CityCard from "./CityCard"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import NavBar from './NavBar'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import myCitiesAction from '../redux/actions/myCitiesAction'
import axios from 'axios'
import { BASE_URL } from '../api/url'

export default function MyCities() {
    const filtrarCities = useSelector(store => store.myCitiesReducer.citiesFiltrados)
    const dispatch = useDispatch()
    const [addCity, setAddCity] = useState({
        "_id": "",
        "name": '',
        "continent": '',
        "photo": '',
        "population": '',
        "userId": '',

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
        dispatch(myCitiesAction.filtrarCities("636e63981471b35a5c064d4e"));
    }, []);
    console.log(filtrarCities)
    async function deleteCity(e) {
        console.log(e)
        dispatch(myCitiesAction.eliminarCities(e))
        alert("City Delete")
        window.location.reload()
    }

    async function ValidateInfo(e) {
        e.preventDefault()
        await axios.put(`${BASE_URL}/api/cities/${addCity._id} `, { name: addCity.name, continent: addCity.continent, photo: addCity.photo, population: Number(addCity.population), userId: addCity.userId })
            .then(function (response){
                console.log(response.data)
                if(response.data.success){
                    alert("City Edit")
                    window.location.reload()                  

                }
                else{
                    alert(response.data.message.join("- - - - -"))
                }
            })
            .catch(function (error) {
                console.log(error);
                alert("The city was not edit")
            })
        
    }
    return (
        <>
            <div><NavBar /></div>
            <div>
                <form className='sign-in' action="">
                    <h3> Enter the City information</h3>

                    <label htmlFor="">
                    </label>

                    <label htmlFor=""></label>
                    <input name='_id' onChange={readInput} type="text" placeholder="_id" />

                    <label htmlFor=""></label>
                    <input name='name' onChange={readInput} type="text" placeholder="Name" />

                    <label htmlFor=""></label>
                    <input name='continent' onChange={readInput} type="text" placeholder="Continent" />

                    <label htmlFor=""></label>
                    <input name='photo' onChange={readInput} type="text" placeholder="Photo" />

                    <label htmlFor=""></label>
                    <input name='population' onChange={readInput} type="text" placeholder='Population' />

                    <label htmlFor=""></label>
                    <input name='userId' onChange={readInput} type="text" placeholder='UserAdmin' />

                    <div>
                        <button className=' button login' onClick={(e) => ValidateInfo(e)}>Edit City</button>
                    </div>
                </form>
            </div>
            <div> {filtrarCities.map((e, b, c) => (<>  <Link to={"/city/" + c[b]._id}><CityCard name={e.name} photo={e.photo} /></Link> <button name={e._id} onClick={e => deleteCity(e.target.name)}>Delete</button></>))} </div>
        </>
    )
}

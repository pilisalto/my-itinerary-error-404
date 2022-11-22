import React from 'react'
import { useState } from 'react'
import { BASE_URL } from '../../src/api/url'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'


export default function FormCities() {
    const navigation = useNavigate()
    const [addCity, setAddCity] = useState({
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
    
    const ValidateInfo = async (e) => {
        e.preventDefault()
      await axios.post(`${BASE_URL}/api/cities`, { name: addCity.name, continent: addCity.continent, photo: addCity.photo, population: Number(addCity.population), userId: addCity.userId })
            .then(function (response){
                console.log(response.data)
                if(response.data.success){
                    alert("was successfully created")
                    
                    navigation("/city/"+response.data.id)
                }
                else{
                    alert(response.data.message.join("- - - - -"))
                }
            })
            .catch(function (error) {
                console.log(error);
                alert("The city was not created")
            })
    }

    return (

        <div className='image_back2'>
        <div><NavBar/></div>
        <div className='container'>
            <div className='container1'>
            <h1 className='h1_2'>Enter the City information</h1>
        <form  action="">

            <label htmlFor="">
            </label>

            <label className='.titulo' htmlFor="">Name</label>
            <input className='input' name='name' onChange={readInput} type="text" placeholder="Name" />

            <label className='.titulo' htmlFor="">Continent</label>
            <input className='input' name='continent' onChange={readInput} type="text" placeholder="Continent" />

            <label className='.titulo' htmlFor="">Photo</label>
            <input className='input' name='photo' onChange={readInput} type="text" placeholder="Photo" />

            <label className='.titulo' htmlFor="">Population</label>
            <input className='input' name='population' onChange={readInput} type="text" placeholder='Population' />

            <label className='.titulo' htmlFor="">UserAdmin</label>
            <input className='input' name='userId' onChange={readInput} type="text" placeholder='UserAdmin' />

            <div>
                <p className='boton a send1' onClick={() => ValidateInfo()}>Add City</p>
            </div>
        </form>
        </div>
        </div>
        </div>

    )
}
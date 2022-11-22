import React from 'react'
import { useState } from 'react'
import { BASE_URL } from '../../src/api/url'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

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


        <form className='sign-in' action="">
            <h3> Enter the City information</h3>

            <label htmlFor="">
            </label>

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
                <p className='boton' onClick={() => ValidateInfo()}>Add City</p>
            </div>
        </form>

    )
}
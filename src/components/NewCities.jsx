import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../src/api/url'
import { useEffect} from 'react'
import axios from 'axios'

export default function FormCities() {
    const navigate = useNavigate();

    const [addCity, setAddCity] = useState([{
        "name": '',
        "continent": '',
        "photo": '',
       "population": '',
        "userId": '',

    }])

    const readInput = (e) => {
        const value = e.target.value
        const prop = e.target.name
        setAddCity({
            ...addCity,
            [prop]: value
        })
        console.log(addCity.name)
    }

    const ValidateInfo = async () => {
            console.log(addCity)
            
                axios.post(`${BASE_URL}/cities`,{name:addCity.name,continent:addCity.continent,photo:addCity.photo,population:Number(addCity.population),userId:addCity.userId})
                  .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
            
        
    }

    return (
        
                <form className='sign-in' action="">
                    <h3> Enter the City information</h3>

                    <label htmlFor="">
                    </label>

                        <label htmlFor=""></label>
                        <input name='name' onChange={readInput} type="text" placeholder="Name"/>

                        <label htmlFor=""></label>
                        <input name='continent'  onChange={readInput} type="text" placeholder="Continent"/>

                        <label htmlFor=""></label>
                        <input name='photo'  onChange={readInput} type="text" placeholder="Photo"/>

                        <label htmlFor=""></label>
                        <input name='population'  onChange={readInput} type="text" placeholder='Population'/>

                        <label htmlFor=""></label>
                        <input name='userId' onChange={readInput} type="text" placeholder='UserAdmin'/>

                <div>
                    <p className=' button login' onClick={() => ValidateInfo()}>Add City</p>
                </div>
                </form>

    )
}
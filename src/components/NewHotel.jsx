import React from 'react'
import { useState } from 'react'
import { BASE_URL } from '../../src/api/url'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function FormHotel() {
  let [form, setForm] = useState({});
  const navigation = useNavigate()

  let handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`${BASE_URL}/api/hotels`, form)
      .then(function (response) {
        if (response.data.success) {
          alert("was successfully created")
          navigation("/hotel/"+response.data.id)
        }
        else {
          alert(response.data.message.join("- - - - -"))
        }
      })
      .catch(function (error) {
        console.log(error);
        alert("The hotel was not created")
      })
  }
  return (
    <>

      <form className='sign-in'   >

        <h3>Enter the Hotel information</h3>
        <input name="name" type="text" placeholder='Hotel´s Name' onChange={handleChange} required />
        <input name="photo" type="text" placeholder='Photo' onChange={handleChange} required />
        <input name="capacity" type="number" placeholder='Capacity' onChange={handleChange} required />
        <input name="cityId" type="text" placeholder='City Id' onChange={handleChange} required />
        <input name="userId" type="text" placeholder='Your Id' onChange={handleChange} required />

        <button className=' button login' onClick={e => handleSubmit(e)}>Add Hotel</button>
      </form>
    </>


  )

}
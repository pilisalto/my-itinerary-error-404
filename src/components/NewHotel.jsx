import React from 'react'
import { useState } from 'react'
import { BASE_URL } from '../../src/api/url'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'


export default function FormHotel() {
  let [form, setForm] = useState({});
  const navigation = useNavigate()
  const Swal = require('sweetalert2')

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
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'was successfully created',
            showConfirmButton: false,
            timer: 1500
          })
          navigation("/hotel/"+response.data.id)
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
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      })
  }
  return (
    <>

<div className='image_back2'>
        <div className='container'>
            <div className='container1'>
            <h1 className='h1_2'>Enter the Hotel information</h1>

<form>
<label className='.titulo' htmlFor="">Hotel's Name</label>
<input className='input' name="name" type="text" placeholder='Hotel´s Name' onChange={handleChange} required />
<label className='.titulo' htmlFor="">Photo</label>
<input className='input' name="photo" type="text" placeholder='Photo' onChange={handleChange} required />
<label className='.titulo' htmlFor="">Capacity</label>
<input className='input' name="capacity" type="number" placeholder='Capacity' onChange={handleChange} required />
<label className='.titulo' htmlFor="">City Id</label>
<input className='input' name="cityId" type="text" placeholder='City Id' onChange={handleChange} required />
<label className='.titulo' htmlFor="">Your Id</label>
<input className='input' name="userId" type="text" placeholder='Your Id' onChange={handleChange} required />

<button className='boton a send1' onClick={handleSubmit}>Add Hotel</button>
</form>
</div>
</div>
</div>
    </>


  )

}
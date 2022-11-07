import React from 'react'
import { Route,Routes } from 'react-router-dom'
import AutoToTop from './AutoToTop'
import Cities from './Cities'
import City from './City'
import Hotels from "./Hotels"
import Home from './Home'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Hotel from "./Hotel"
import Contact from './Contact'
import Shows from './Shows'
import Itinerary from './Itinerary'



export default function Redirect() {
  return (
    <>
    <AutoToTop/>
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cities' element={<Cities/>}/>
            <Route path='/hotels' element={<Hotels/>} />
            <Route path='/itinerary' element={<Itinerary/>}/>
            <Route path='/shows' element={<Shows/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/signin'element={<SignIn/>} />
            <Route path='/city/:setIndex'element={<City/>} />
            <Route path='/hotel/:setHotel'element={<Hotel/>} />
      </Routes> 
    </>
  )
}

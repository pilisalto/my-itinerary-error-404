import React from 'react'
import { Route, Routes } from 'react-router-dom'
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
import NewHotel from './NewHotel'
import NewCity from './NewCities'
import MyCities from './MyCities'
import MyHotels from './MyHotels'
import MyTineraries from './MyTineraries'
import MyShows from './MyShows'
import ProtectedRoute from './ProtectedRoute'



export default function Redirect(props) {
  let { logged, role } = props
  console.log(logged)
  return (
    <>
      <AutoToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cities' element={<Cities />} />
        <Route path='/hotels' element={<Hotels />} />
        <Route path='/itinerary' element={<Itinerary />} />
        <Route path='/shows' element={<Shows />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/city/:setIndex' element={<City />} />
        <Route path='/hotel/:setHotel' element={<Hotel />} />
        <Route path="/newhotel" element={<NewHotel />} />
        <Route path="/newcities" element={<NewCity />} />
        <Route path="/mycities" element={<MyCities />} />
        <Route path="/myhotels" element={<MyHotels />} />
        <Route path="/mytineraries" element={<MyTineraries />} />
        <Route path="/myshows" element={<MyShows />} />
      </Routes>
    </>
  )
}

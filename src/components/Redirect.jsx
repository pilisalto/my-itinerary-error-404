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
import NewHotel from './NewHotel'
import NewCity from './NewCities'
import MyCities from './MyCities'
import MyHotels from './MyHotels'
import MyTineraries from './MyTineraries'
import MyShows from './MyShows'



export default function Redirect(props) {
  let {logged} = props
  return (
    <>
    <AutoToTop/>
      <Routes>
            <Route path='/' element={<Home logged={logged} />}/>
            <Route path='/cities' element={<Cities logged={logged} />}/>
            <Route path='/hotels' element={<Hotels logged={logged} />} />
            <Route path='/itinerary' element={<Itinerary logged={logged} />}/>
            <Route path='/shows' element={<Shows logged={logged} />}/>
            <Route path='/contact' element={<Contact logged={logged} />}/>
            <Route path='/signup' element={<SignUp logged={logged} />}/>
            <Route path='/signin'element={<SignIn logged={logged} />} />
            <Route path='/city/:setIndex'element={<City logged={logged} />} />
            <Route path='/hotel/:setHotel'element={<Hotel logged={logged} />} />
            <Route path="/newhotel" element={<NewHotel logged={logged} />} />
            <Route path="/newcities" element={<NewCity logged={logged} />}/>
            <Route path="/mycities" element={<MyCities logged={logged} />}/>
            <Route path="/myhotels" element={<MyHotels logged={logged} />}/>
            <Route path="/mytineraries" element={<MyTineraries logged={logged} />}/>
            <Route path="/myshows" element={<MyShows logged={logged} />}/>
      </Routes> 
    </>
  )
}

import React from 'react'
import { useParams } from 'react-router-dom'
import hotels from '../data/hotels'
import activities from "../data/activities"
import HotelCard from './HotelCard'
import NavBar from './NavBar'



export default function DetailsCity() {
  let {setHotel} = useParams()
  let hotel = hotels.find(a => a.id === setHotel)
  let it = activities.filter(e => hotel.citiId ===setHotel)
  let basc = ""

  return (
    <>
    <div className='image_back2'>
    <NavBar/>
    <div className='home3 container cards_flex'>
    <HotelCard name={hotel.name} photo={hotel.photo} capacity={hotel.capacity}/>
    </div>
    </div>
    </>
  )
}
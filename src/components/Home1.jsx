import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'


export default function Home1() {
  return (
    <div className='image_back'>
    <div className='container'>  
      <h1 className='h1'>Find your perfect trip, <span className='resaltado h1'>designed by insiders</span> who know <br/> and love their cities!</h1>
    
    <div className='row botons'>      
      <Link to={"/Cities"} className='boton a'>Cities</Link>
      <Link to={"/Hotels"} className='boton a'>Hotels</Link>
    </div>
    </div>
    </div>
  )
}
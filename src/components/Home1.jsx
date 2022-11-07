import React from 'react'
import CallToAction from './CallToAction'

export default function Home1() {
  return (
    <div>
        <div><img src="img/imagenes/logo1.png" alt="" /></div>
        <h1>Find your perfect trip, designed by insiders who know and love their cities!</h1>
        <CallToAction link={"./cities"} text={"Cities"}/>
        <CallToAction link={"./hotels"} text={"Hotels"}/>
    </div>
  )
}

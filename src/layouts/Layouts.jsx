import React from 'react'
import Redirect from '../components/Redirect'
import Footer from '../components/Footer'

export default function Layouts() {
  return (
    <div className='flex direction-column align-center v100 h100'>
      <div className='grow '><Redirect/></div>
      <div className=''><Footer/></div>
    </div>
  )
}

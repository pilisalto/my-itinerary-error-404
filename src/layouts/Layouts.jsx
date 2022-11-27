import React from 'react'
import Redirect from '../components/Redirect'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

export default function Layouts(props) {
  let {logged,role} = props
  return (
    <div className='flex direction-column align-center v100 h100'>
      <div><NavBar logged={logged} role={role} /></div>
      <div className='grow'><Redirect logged={logged} role={role} /></div>
      <div className=''><Footer/></div>
    </div>
  )
}

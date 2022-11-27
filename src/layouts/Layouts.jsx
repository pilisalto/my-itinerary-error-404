import React from 'react'
import Redirect from '../components/Redirect'
import Footer from '../components/Footer'

export default function Layouts(props) {
  let {logged} = props
  return (
    <div className='flex direction-column align-center v100 h100'>
      <div className='grow'><Redirect logged={logged}/></div>
      <div className=''><Footer/></div>
    </div>
  )
}

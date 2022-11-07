import React from 'react'
import { Route,Routes } from 'react-router-dom'
import AutoToTop from './AutoToTop'
import Home from './Home'


export default function Redirect() {
  return (
    <>
    <AutoToTop/>
      <Routes>
            <Route path='/' element={<Home/>}/>
      </Routes> 
    </>
  )
}

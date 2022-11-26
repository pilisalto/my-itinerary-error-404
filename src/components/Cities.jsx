import React from 'react'
import CityCard from "./CityCard"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import NavBar from './NavBar'
import { BASE_URL } from '../../src/api/url'
import axios from 'axios'
import { useEffect } from 'react'

export default function Cities() {
  let [filcheck, setFilcheck] = useState([])
  let [inp, setInp] = useState("")
  let [api, setApi] = useState([])
  let [ho, setHo] = useState([])


  useEffect(() => {
    axios.get(`${BASE_URL}/api/cities`).then((res) => {
      setApi(res.data.response)
    })
      .catch(err => console.log(err))
    axios.get(`${BASE_URL}/api/cities`).then((res) => {
      setHo(res.data.response)
    })
      .catch(err => console.log(err))

  }, [])

  let checkbox = ([... new Set(ho.map(e => e.continent))].map(s => <form><label>{s}<input type="checkbox" onClick={e => check(e.target.value)} value={s} ></input> </label></form >))

  function check(e) {
    if (filcheck.includes(e)) {
      let i = filcheck.indexOf(e)
      filcheck.splice(i, 1)
      setFilcheck(filcheck)
    }
    else {
      filcheck.push(e)
      setFilcheck(filcheck)
    }
    axios.get(`${BASE_URL}/api/cities?name=${inp}&continent=${filcheck.toString()}`).then((response) => {
      setApi(response.data.response)
    })
      .catch(err => console.log(err))
  }
  function funInput(e) {
    setInp(e)
    axios.get(`${BASE_URL}/api/cities?name=${e}&continent=${filcheck.toString()}`).then((response) => {
      setApi(response.data.response)
    })
      .catch(err => console.log(err))
  }
  return (
    <>
      <div className='image_back4'>
        <div><NavBar /></div>
        <div className='home1'>
          <h1 class="h1 row">Ci<span className='resaltado'>t</span>ies</h1>
          <div className='contenedor'>
            <div className='check'>{checkbox}</div>
            <form role="search">
              <input type="search" className='search' onChange={e => funInput(e.target.value)} placeholder="Search" /> <img src="/img/icons/busqueda.png" alt="" />
            </form>
          </div>
          <div className='cards_flex none'>{api.map((e, b, c) => (<Link to={"/city/" + c[b]._id}><CityCard name={e.name} photo={e.photo} /></Link>))}</div>
        </div>
      </div>
    </>
  )
}

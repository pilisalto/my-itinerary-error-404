import React from 'react'
import CityCard from "./CityCard"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import NavBar from './NavBar'
import { BASE_URL } from '../../src/api/url'
import axios from 'axios'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import citiesAction from '../redux/actions/citiesAction'


export default function Cities() {
  let [filcheck, setFilcheck] = useState([])
  let [inp, setInp] = useState("")
  const listaCities = useSelector(store => store.citiesReducer.listaCities)
  const citiesFiltrados = useSelector(store => store.citiesReducer.citiesFiltrados)
  const reducer = useSelector(store => store.citiesReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(citiesAction.getCities())
    if(citiesFiltrados.length === 0){
      dispatch(citiesAction.filtrarCities(["",""]))
    }
  }, [])
  
  let checkbox = ([... new Set(listaCities.map(e => e.continent))].map(s => <form><label>{s}<input type="checkbox" onClick={e => check(e.target.value)} value={s} ></input> </label></form >))

  async function check(e) {
    if (filcheck.includes(e)) {
      let i = filcheck.indexOf(e)
      filcheck.splice(i, 1)
      setFilcheck(filcheck)
    }
    else {
      filcheck.push(e)
      setFilcheck(filcheck)
    }
    const y = filcheck.toString()
    const data = [inp,y]
    dispatch(citiesAction.filtrarCities(data))
  }
  async function funInput(e) {
    setInp(e)
    const y = filcheck.toString()
    const data = [e,y]
    dispatch(citiesAction.filtrarCities(data))
  }
  return (
    <>
      <div className='image_back4'>
        <div><NavBar /></div>
        <div className='container'>
          <h1 class="h1 row">Ci<span className='resaltado'>t</span>ies</h1>
          <div className='container'>
            <div className='check'>{checkbox}</div>
            <form role="search">
              <input type="search" className='search' onChange={e => funInput(e.target.value)} placeholder="Search" /> <img src="/img/icons/busqueda.png" alt="" />
            </form>
          </div>
          <div className='card none'>{citiesFiltrados.map((e, b, c) => (<Link to={"/city/" + c[b]._id}><CityCard name={e.name} photo={e.photo} /></Link>))}</div>
        </div>
      </div>
    </>
  )
}

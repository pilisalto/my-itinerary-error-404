import React from 'react'
import HotelCard from './HotelCard'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavBar from './NavBar'
import { BASE_URL } from '../../src/api/url'
import axios from 'axios'



export default function Cities() {
  let [api, setApi] = useState([])
  let [inp, setInp] = useState("")
  let [apiCo, setApiCo] = useState([])
  let [check, setCheck] = useState("")
  let checkbox = (<form><label>Ascending<input type="radio" name='1' onClick={e => filterCheck(e.target.value)} value="asc" ></input> </label><label>Descending<input type="radio" name='1' onClick={e => filterCheck(e.target.value)} value="desc" ></input> </label></form >)
  useEffect(() => {
    axios.get(`${BASE_URL}/api/hotels/`).then((res) => {
      (setApi(res.data.response))
    })
      .catch(err => console.log(err))
    axios.get(`${BASE_URL}/api/hotels`).then((res) => {
      (setApiCo(res.data.response))
    })
      .catch(err => console.log(err))

  }, [])
  
  function filterInp(e) {
    setInp(e)
    console.log(`${BASE_URL}/api/hotels?name=${inp}&order=${check} `)
    (axios.get(`${BASE_URL}/api/hotels?name=${e}&order=${check}`).then((response) => {
      setApi(response.data.response)
    })
      .catch(err => console.log(err)))
  }
  function filterCheck(e) {
    console.log(`${BASE_URL}/api/hotels?name=${inp}&order=${e} `)
    setCheck(e)
   (axios.get(`${BASE_URL}/api/hotels?name=${inp}&order=${e}`).then((response) => {
      setApi(response.data.response)
    })
      .catch(err => console.log(err)))
  }
  console.log(api)

  //<CityCard name={e.name} photo={e.photo} continent={e.continent} population={e.population}/>
  return (
    <>
      <div className='image_back5'>
        <div><NavBar /></div>
        <div className='home1'>
          <h1 className='h1 row'>H<span className='resaltado'>o</span>tels</h1>
          <div className='contenedor'>
            <div className='check'>{checkbox}</div>
            <form role="search">
              <input type="search" className='search' onChange={e => filterInp(e.target.value)} placeholder="Search" /> <img src="/img/icons/busqueda.png" alt="" />
            </form>
          </div>
          <div className='cards_flex'>{api.map((e, b, c) => (<Link to={"/hotel/" + c[b]._id}><HotelCard name={e.name} photo={e.photo} capacity={e.capacity} /></Link>))}</div>
        </div>
      </div>

    </>
  )
}
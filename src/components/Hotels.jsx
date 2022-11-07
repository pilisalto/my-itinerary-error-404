import React from 'react'
import hotels from '../data/hotels'
import HotelCard from './HotelCard'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import appli from '../data/appli'
import NavBar from './NavBar'




export default function Cities() {
  let [cards, setCards] = useState(hotels.map((e, b) => (<Link to={"/hotel/" + hotels[b].id}><HotelCard name={e.name} photo={e.photo} capacity={e.capacity} /></Link>)))
  let [conti, setConti] = useState([])
  let [cardSearch, setCardSearch] = useState(hotels)
  let [cardIm, setCardIm] = useState(hotels)
  let [array, setArray] = useState(hotels)
  let checkbox = ( <form><label>Ascending<input type="radio" name='1' onClick={e => filterCru("filterCheck",e.target.value)} value="ascending" ></input> </label><label>Descending<input type="radio" name='1' onClick={e => filterCru("filterCheck",e.target.value)} value="descending" ></input> </label></form >)
  
  const filterCru = (fn, value) => {
    setArray(array = hotels)
    appli[fn] = value
    console.log(appli)
    for (let name in appli) {
      if (name === "cardFilter") {
        setArray(array = cardFilter(array, appli[name]))
      }
      if (name === "filterCheck") {
        setArray(array = filterCheck(array, appli[name]))
      }
    }
    setArray(array)
    console.log(array)
    localStorage.setItem("hotels",JSON.stringify(array))
    return array
  }
  const filterCheck = (ci,e) => {
   
      let gh 
      if (e === "ascending") {
        gh = ci.sort((a,b) => b.capacity - a.capacity)
        setCardIm(cardIm = gh)
        return gh
      }
      else {
        gh = ci.sort((a,b) => a.capacity - b.capacity)
        setCardIm(cardIm = ci)
        return ci
      }
    

  }

  const cardFilter = (ci, es) => {
    if (es.length) {
      let bh = ci.filter(i => i.name.toLowerCase().includes(es.toLowerCase()))
      setCardSearch(cardSearch = bh)
      return bh
    }
    else {
      setCardSearch(cardSearch = ci)
      return ci
    }
  }

  //<CityCard name={e.name} photo={e.photo} continent={e.continent} population={e.population}/>
  return (
    <>
      <div className='image_back5'>
      <div><NavBar/></div>
      <div className='home1'>
      <h1 className='h1 row'>H<span className='resaltado'>o</span>tels</h1>
      <div className='contenedor'>
      <div className='check'>{checkbox}</div>
      <form role="search">
        <input type="search" className='search' onChange={e => filterCru("cardFilter",e.target.value)} placeholder="Search"/> <img src="/img/icons/busqueda.png" alt="" />
      </form>
      </div>
      <div className='cards_flex'>{cards}</div>
      </div>
      </div>
    
    </>
  )
}
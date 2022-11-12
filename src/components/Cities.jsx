import React from 'react'
import citys from '../data/citys'
import CityCard from './CityCard'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import appli from '../data/appli'
import NavBar from './NavBar'


export default function Cities() {
  let [cards, setCards] = useState(citys.map((e, b) => (<Link to={"/city/" + citys[b].id}><CityCard name={e.name} photo={e.photo} /></Link>)))
  let [conti, setConti] = useState([])
  let [cardSearch, setCardSearch] = useState(citys)
  let [cardIm, setCardIm] = useState(citys)
  let [array, setArray] = useState(citys)
  let checkbox = ([... new Set(citys.map(e => e.continent))].map(s => <form><label>{s}<input type="checkbox" onClick={e => filterCru("filterCheck",e.target.value)} value={s} ></input> </label></form >))
  const filterCru = (fn, value) => {
    setArray(array = citys)
    if (fn === "filterCheck") {
      if (!conti.includes(value)) {
        conti.push(value)
      }
      else {
        let i = conti.indexOf(value)
        conti.splice(i, 1)
      }
      appli[fn] = conti
    }
    else {
      appli[fn] = value
    }
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
    localStorage.setItem("cities",JSON.stringify(array))
    return array
  }
  const filterCheck = (ci,e) => {
    if (e.length > 0) {
      let gh = ci.filter(d => e.includes(d.continent))
      if (gh.length) {
        setCardIm(cardIm = gh)
        return gh
      }
      else {
        setCardIm(cardIm = ci)
        return ci
      }
    }
    else {
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
      <div className='image_back4'>
        <div><NavBar/></div>
        <div className='home1'>
        <h1 class="h1 row">Ci<span className='resaltado'>t</span>ies</h1>
        <div className='contenedor'>
          <div className='check'>{checkbox}</div>
          <form role="search">
            <input type="search" className='search' onChange={e => filterCru("cardFilter",e.target.value)} placeholder="Search" /> <img src="/img/icons/busqueda.png" alt="" />
          </form>
        </div>
      <div className='cards_flex none'>{cards}</div>
      </div>
      </div>
    </>
  )
}

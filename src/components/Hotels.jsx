import React from 'react'
import HotelCard from './HotelCard'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavBar from './NavBar'
import { useSelector, useDispatch } from 'react-redux'
import hotelsAction from '../redux/actions/hotelsAction'


export default function Cities() {
  let [inp, setInp] = useState("")
  let [check, setCheck] = useState("")
  const hotelsFiltrados = useSelector(store => store.hotelsReducer.hotelsFiltrados)
  const dispach = useDispatch()

  let checkbox = (<form><label>Ascending<input type="radio" name='1' onClick={e => filterCheck(e.target.value)} value="asc" ></input> </label><label>Descending<input type="radio" name='1' onClick={e => filterCheck(e.target.value)} value="desc" ></input> </label></form >)
  useEffect(() => {
    if(hotelsFiltrados.length === 0){
      dispach(hotelsAction.filtrarHotels(["",""]))
    }
  }, [])
  async function filterInp(e) {
    setInp(e)
    const data = [e, check]
    dispach(hotelsAction.filtrarHotels(data))
  }
  async function filterCheck(e) {
    setCheck(e)
    const data= [inp, e]
    dispach(hotelsAction.filtrarHotels(data))
  }

 return (
    <>
      <div className='image_back5'>
        <div><NavBar/></div>
        <div className='container'>
          <h1 className='h1 row'>H<span className='resaltado'>o</span>tels</h1>

            <div className='check'>{checkbox}</div>
            <form role="search">
              <input type="search" className='search' onChange={e => filterInp(e.target.value)} placeholder="Search" /> <img src="/img/icons/busqueda.png" alt="" />
            </form>
          </div>
          <div className='container'>{hotelsFiltrados.map((e, b, c) => (<Link to={"/hotel/" + c[b]._id}><HotelCard className='card none row' name={e.name} photo={e.photo} capacity={e.capacity} /></Link>))}</div>
        </div>

    </>
  )
}
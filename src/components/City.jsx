import React from 'react'
import { useParams } from 'react-router-dom'
import citys from '../data/citys'
import Cardscity from './Cardscity'
import activities from "../data/activities"
import Itinirary from './Itinerary'
import NavBar from './NavBar'
import { useState } from 'react'
import { BASE_URL } from '../../src/api/url'
import { useEffect } from 'react'
import axios from 'axios'


export default function DetailsCity() {
  let { setIndex } = useParams()
  let [api, setApi] = useState([])
  let [apiCo, setApiCo] =useState([])

  useEffect(() => {
    axios.get(`${BASE_URL}/api/cities/${setIndex}`).then((res) => {
      (setApi(res.data.data))
    })
      .catch(err => console.log(err))
    axios.get(`${BASE_URL}/api/itineraries`).then((res) => {
      (setApiCo(res.data.data))
    })
      .catch(err => console.log(err))

  }, [])
  let it = apiCo.filter(e => e.cityId === setIndex)
  let basc = ""

  if(it.length){
   
    basc = it.map(e => <Itinirary name={e.name} photo={e.photo[1]} descripcion={e.descripcion} price={e.price} />)
    
   
  }
  else{
    basc = "not itinirary"
  }
  return (
    <>
      <div className='image_back4'>
        <div><NavBar /></div>
        <div className='container'>
          <div className='cards_flex column'>
            <Cardscity className='cards_flex none column' name={api.name} photo={api.photo} continent={api.continent} population={api.population} text={"Population: "} />
            {basc}
          </div>
        </div>
      </div>

    </>
  )
}

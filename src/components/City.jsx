import React from 'react'
import { useParams } from 'react-router-dom'
import citys from '../data/citys'
import Cardscity from './Cardscity'
import activities from "../data/activities"
import Itinirary from './Itinerary'
import NavBar from './NavBar'


export default function DetailsCity() {
  let {setIndex} = useParams()
  let city = citys.find(a => a.id === setIndex)
  let it = activities.filter(e => e.citiId ===setIndex)
  let basc = ""
  if(it.length){
    basc = <>
    <Itinirary name={it[0].name} photo={it[0].photo[0]} descripcion={it[0].descripcion} price={it[0].price} />
    <Itinirary name={it[1].name} photo={it[1].photo[0]} descripcion={it[1].descripcion} price={it[1].price}/>
    </>
  }
  else{
    basc = "not itinirary"
  }
  return (
    <>
    <div className='image_back4'>
        <div><NavBar/></div>
    <div className='home3'>
    <div className='cards_flex column'>
    <Cardscity className='cards_flex none column' name={city.name} photo={city.photo} continent={city.continent} population={city.population} text={"Population: "}/>
    {basc}
    </div>
    </div>
    </div>

    </>
  )
}

import React from 'react'
import Reaction from './Reaction'



export default function activitie(props) {
  let { name, photo, descripcion, price ,_id} = props
  return (
    <>
      <div>
        <div className='card'>
          <h2 className='info-card'>{name}</h2>
          <img className='img' src={photo} alt={name} />
          <h4 className='info-card'>{descripcion}</h4>
          <p className='info-card'>{"Price: " + price + " $"}</p>
          <p className='info-card'>{"Duration : " + price + " hrs"}</p>

        </div>
        <div>
          <Reaction _id={_id} />
        </div>
      </div>

    </>
  )
}

import React from 'react'




export default function activitie(props) {
let {name, photo, descripcion, price} = props
  return (
    <>
        <div>
      <div className='card'>
                <h2 className='info-card'>{name}</h2>
                <img className='img' src={photo} alt={name} />
                <h4 className='info-card'>{descripcion}</h4>
                <p className='info-card'>{"Price: "+price+" $"}</p>
                <p className='info-card'>{"Duration : "+price+" hrs"}</p>
    </div>
    </div>

    </>
  )
}

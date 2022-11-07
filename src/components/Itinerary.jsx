import React from 'react'


export default function activitie(props) {
let {name, photo, descripcion, price} = props
  return (
    <>
        <div className='home1'>
      <div className='home1 container cards_flex column'>
                <h2 className='h2'>{name}</h2>
                <img className='image' src={photo} alt={name} />
                <h4 className='h4'>{descripcion}</h4>
                <h4 className='h4'>{"Price: "+price+" $"}</h4>
                <h4 className='h4'>{"Duration : "+price+" hrs"}</h4>
    </div>
    </div>

    </>
  )
}

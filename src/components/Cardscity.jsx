import React from 'react'

export default function Cardscity(props) {
    let {name, photo, continent, population} = props
    return (
        <>
            <div className='card'>
                <h2 className='info-card none'>{name}</h2>
                <img className='img' src={photo} alt={name} />
                <h3 className='info-card'><img src="/img/icons/ubicacion.png" alt="" />{continent}</h3>
                <p className='info-card'>{population}</p>
            </div>
        </>
    )
}

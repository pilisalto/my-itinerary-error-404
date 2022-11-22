import React from 'react'

export default function CityCard(props) {
    let {name, photo, continent, population, text} = props
    return (
        <>
            <div className='card'>
                <h2 className='info-card none'><img src="/img/icons/ubicacion.png" alt="ubication"/>{name}</h2>
                <img className='img' src={photo} alt={name} />
                <h3 className='info-card none'>{continent}</h3>
                <p className='info-card none'>{text}{population}</p>
            </div>
        </>
    )
}

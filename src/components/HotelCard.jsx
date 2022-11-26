import React from 'react'

export default function HotelCard(props) {
    let {name, photo , capacity} = props
    return (
        <>
        <div>
            <div className='card'>
                <h2 className='info-card none'>{name}</h2>
                <img className='img' src={photo} alt={name} />
                <h3 className='info-card none'>Capacidad: {capacity}</h3>
            </div>
        </div>
        </>
    )
}

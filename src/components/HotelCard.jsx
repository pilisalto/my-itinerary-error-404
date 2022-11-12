import React from 'react'

export default function HotelCard(props) {
    let {name, photo , capacity} = props
    return (
        <>
        <div>
            <div className='cards_flex2'>
                <h2 className='h2 none'>{name}</h2>
                <img className='image' src={photo} alt={name} />
                <h3 className='h3 none'>Capacidad: {capacity}</h3>
            </div>
        </div>
        </>
    )
}

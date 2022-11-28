import React from 'react'

export default function show(props) {
    let {name, photo, description, price, date} = props
    return (
        <>
    <div>
        <div>
                <div className='card'>
                <h2 className='info-card'>{name}</h2>
                <img className='img' src={photo} alt={name} />
                <h3 className='info-card'>{description}</h3>
                <p className='info-card'>{price}</p>
                <p className='info-card'>{date}</p>
            </div>
            </div>
            </div>
        </>
    )
}
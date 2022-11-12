import React from 'react'

export default function CityCard(props) {
    let {name, photo, continent, population, text} = props
    return (
        <>
            <div className='cards_flex2'>
                <h2 className='h2_card none'><img src="/img/icons/ubicacion.png" alt="ubication"/>{name}</h2>
                <img className='image' src={photo} alt={name} />
                <h3 className='h3_card m none'>{continent}</h3>
                <h4 className='h4 none'>{text}{population}</h4>
            </div>
        </>
    )
}

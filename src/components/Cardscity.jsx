import React from 'react'

export default function Cardscity(props) {
    let {name, photo, continent, population} = props
    return (
        <>
            <div className='cards_flex2'>
                <h2 className='h2_card none'>{name}</h2>
                <img className='image' src={photo} alt={name} />
                <h3 className='h3_card'><img src="/img/icons/ubicacion.png" alt="" />{continent}</h3>
                <h4 className='h4'>{population}</h4>
            </div>
        </>
    )
}

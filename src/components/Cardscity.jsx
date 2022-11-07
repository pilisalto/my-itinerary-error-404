import React from 'react'

export default function Cardscity(props) {
    let {name, photo, continent, population, text} = props
    return (
        <>
            <div className='card card1 gap-5 text-center'>
                <h2>{name}</h2>
                <img className='image' src={photo} alt={name} />
                <h3 className='bg-black'>{continent}</h3>
                <h4>{text}{population}</h4>
            </div>
        </>
    )
}

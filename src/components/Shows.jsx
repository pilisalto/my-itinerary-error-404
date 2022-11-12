import React from 'react'
import NavBar from './NavBar'

export default function show(props) {
    let {name, photo, description, price, date} = props
    return (
        <>
            <div className='card text-center'>
            <div className='image_back6'>
            <div><NavBar/></div>
            <div className='home1'>
                <div className='container_home1'>
                <h2>{name}</h2>
                <img className='image' src={photo} alt={name} />
                <h3 className='bg-black'>{description}</h3>
                <h4>{price}</h4>
                <p>{date}</p>
            </div>
            </div>
            </div>
            </div>
        </>
    )
}
import React from 'react'
import CardsCity from './Cardscity'
import citys from '../data/citys'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function Carousel() {
    let [index, setIndex] = useState(0)
    let [id,setId] = useState(0)
    useEffect(
        () => {
            let idInterval = setInterval(
                () => {
                    next()
                }, 5000
            )
            setId(idInterval)
            return clearInterval(id)
        }
        , [index])
    let next = () => {
        if (index < citys.length - 4) {
            setIndex(index += 4)
        }
        else {
            setIndex(0)
        }
        clearInterval(id)
    }
    let prev = () => {
        if (index > 0) {
            setIndex(index -= 4)
        }
        else {
            setIndex(citys.length - 4)
        }
        clearInterval(id)
    }
    return (
<>
<div className='carousel'>
    <div className='row_carousel'>
        <Link className='none' to={"/city/" + citys[index].id}/>
            <CardsCity className='card img' name={citys[index].name} photo={citys[index].photo} continent={citys[index].continent} />
        <Link className='none' to={"/city/" + citys[index+1].id}>
            <CardsCity name={citys[index + 1].name} photo={citys[index + 1].photo} continent={citys[index + 1].continent} />
        </Link>
    </div>
    <div className='botons1'>
        <button className='boton' onClick={prev}>Anterior</button>
        <button className='boton' onClick={next}>Siguiente</button>
    </div>
    <div className='flex direction-row space-around gap-5 wrap row_carousel'>
        <Link className='none' to={"/city/" + citys[index+2].id}>
            <CardsCity name={citys[index + 2].name} photo={citys[index + 2].photo} continent={citys[index + 2].continent} />
        </Link>
        <Link className='none' to={"/city/" + citys[index+3].id}>
            <CardsCity name={citys[index + 3].name} photo={citys[index + 3].photo} continent={citys[index + 3].continent} />
        </Link>
    </div>
</div>
</>
    )
}


import React from 'react'
import CardsCity from './CardsCity'
import citys from '../data/citys'

export default function Carousel() {

    return (
        <>
            <div className='flex direction-column gap-5'>
                <div className='flex direction-row space-around gap-5 wrap'>
                    <CardsCity city={citys[0].name} img={citys[0].photo} place={citys[0].continent} />
                    <CardsCity city={citys[1].name} img={citys[1].photo} place={citys[1].continent} />
                </div>
                <div className='flex direction-row space-around gap-5 wrap'>
                    <CardsCity city={citys[2].name} img={citys[2].photo} place={citys[2].continent} />
                    <CardsCity city={citys[3].name} img={citys[3].photo} place={citys[3].continent} />
                </div>
            </div>
        </>   
    )
}

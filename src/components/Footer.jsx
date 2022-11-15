import React from 'react'
import ScrollToTop from "react-scroll-to-top"


export default function Footer() {

    return (
        <>
            <div className='footer'>
                <ScrollToTop smooth top='20' img='/img/icons/instagram.png'/>
                <div className='column'>
                    <img src="/img/imagenes/logo3.png" alt="logo" className='logo'/>
                    <p className='p'>©2022 My Tinerary.</p>
                    <p className='p'>All rights reserved.</p>
                </div>
                <div className='column'>
                    <a href="./Cardscity" className='a'>Cities</a>
                    <a href="./Cardshotels" className='a'>Hotels</a>
                    <a href="./Contact" className='a'>Contact</a>
                </div>
                <div className='column'>
                    <div className='row'>
                        <img src="/img/icons/youtube.png" alt="youtube" className='icons'/>
                        <p className='p'>Mi Tinerary</p>
                    </div>
                    <div className='row'>
                        <img src="/img/icons/instagram.png" alt="instagram" className='icons'/>
                        <p className='p'>@mytinerary</p>
                    </div>
                    <div className='row'>
                        <img src="/img/icons/facebook.png" alt="facebook" className='icons'/>
                        <p className='p'>My Tinerary</p>
                    </div>
                </div>
            </div>
        </>   
    )
}
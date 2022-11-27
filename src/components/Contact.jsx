import React from 'react'
import NavBar from './NavBar'


export default function Contact() {

    return (
        <>
        <div className='image_back6'>
        <div className='container'>
        <div class="contact-form column">
            <h4 className='h1_2 column'>Contact us</h4>
            <form>
                <p>
                    <label>FullName</label>
                    <input className='input' type="text" name="fullname"/>
                </p>
                <p>
                    <label>Email Adress</label>
                    <input className='input' type="email" name="email"/>
                </p>
                <p>
                    <label>Phone Number</label>
                    <input className='input' type="tel" name="phone"/>
                </p>
                <p>
                    <label>Affair</label>
                    <input className='input' type="text" name="affair"/>
                </p>
                <p class="block">
                    <label>Message</label> 
                    <textarea name="message" rows="3"></textarea>
                </p>
                <p class="block">
                <input type="submit" className='boton a send' value="Send"/>
                </p>
            </form>
        </div>
    </div>
    </div>
</>
)
}

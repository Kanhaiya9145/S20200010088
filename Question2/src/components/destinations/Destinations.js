import React from 'react'
import './DestinationsStyles.css'
import Train1 from '../../assets/train1.jpg'
import Train2 from '../../assets/train2.avif'
import Train3 from '../../assets/train3.jfif'
import Train4 from '../../assets/train4.jpg'

function Destinations() {
    return (
        <div name='about_us' className='destinations'>
            <div className="container">
                <h1>About Us</h1>
                <p className='title'>Welcome to Train - Your Ultimate Train Booking Solution!</p>
                <div className="img-container">
                <p className='desc'>Welcome to Train, where travel meets simplicity. We're dedicated to streamlining your train booking experience. With an intuitive interface, real-time updates, and a commitment to security, we're here to make your journey seamless. Join us in redefining travel convenience, one booking at a time.</p>
                    <img src={Train1} alt="/"/>
                    <img src={Train2} alt="/"/>
                    <img src={Train3} alt="/"/>
                    <img src={Train4} alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default Destinations

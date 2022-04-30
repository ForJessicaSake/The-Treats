import React from 'react';
import Hero from '../images/hero.png';
import './sales.css'

function Sales() {
    return (
        <section className='Sales'>
            <div className='Sales-text'>
                <h1>Sales!</h1>
                <p> What are you waiting for?</p>
                <button>Order Now</button>
            </div>
            <div>
                <img className='Sales-image' src={Hero} alt='hamburger'></img>
            </div>
        </section>
    )
}

export default Sales;
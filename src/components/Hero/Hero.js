import React from 'react';
import Hero from '../images/hero.png';
import './Hero.css';

function Main() {
    return (
        <section className='hero-page'>
            <div>
                <img className='hero-img' src={Hero} alt='logo'></img>
            </div>
    
     <div className='hero-text'>
        <h1>GREATEST<br></br> FAST FOOD EVER</h1>
        <h2>READY IN 60 SECONDS.</h2>
        <button>Place Order</button>
    </div> 
        </section>
    )
}
export default Main;
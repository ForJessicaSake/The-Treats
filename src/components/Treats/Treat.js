import React from 'react';
import doughnut from '../images/doughnut.png';
import icecream from '../images/icecream.png';
import cake from '../images/cake.png';
import './Treat.css';

function Treat() {
    return (
        <section className='Treats'>
            <div className='treats-heading'>
                <h1>Sweet Treats For You</h1>
            </div>
            <artcle className='menu-item'>
                <div className='item-one'>
                    <img className='doughnut-img' src={doughnut} alt='doughnut'></img>
                    <div className='text'>
                    <h3>Tasty Doughnut</h3>
                    <p>Get this delicious family size doughnut at only;</p>
                    <h2>N2,500</h2>
                    <button>Add to Cart</button>
                    </div>
                </div>
                <div className='item-one'>
                    <img className='icecream-img' src={icecream} alt='ice-cream'></img>
                    <div className='text'>
                    <h3>Ice cream</h3>
                    <p>Get this tasty icecream at only;</p>
                    <h2>N1,500</h2>
                    <button>Add to Cart</button>
                    </div>
                </div>
                <div className='item-one'>
                    <img className='cake-img' src={cake} alt='cake'></img>
                    <div className='text'>
                    <h3>Taco</h3>
                    <p>Get this delicious piece of cake at only;</p>
                    <h2>N1,000</h2>
                    <button>Add to Cart</button>
                </div>
                </div>
            </artcle>
        </section>

    )
}

export default Treat;
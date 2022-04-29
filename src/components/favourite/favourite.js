import React from 'react';
import pizza from '../images/pizza.png';
import ham from '../images/hamburger.png';
import taco from '../images/taco.png';
import './favourite.css';

function Favourite() {
    return (
        <section className='favourite'>
            <div className='favourite-heading'>
                <h1>Choose Your Favourite</h1>
            </div>
            <artcle className='menu-item'>
                <div className='item-one'>
                    <img className='pizza-img' src={pizza} alt='pizza'></img>
                    <div className='text'>
                        <h3>Supreme Pizza</h3>
                        <p>Get this tasty delicious family size pizza at only;</p>
                        <h2>N5,000</h2>
                        <button>Add to Cart</button>
                    </div>
                    
                </div>
                <div className='item-one'>
                    <img className='ham-img' src={ham} alt='hamburger'></img>
                    <div className='text'>

                    <h3>Ham Burger</h3>
                    <p>Get this tasty delicious ham burger at only;</p>
                    <h2>N2,000</h2>
                    <button>Add to Cart</button>
                    </div>

                </div>
                <div className='item-one'>
                    <img className='taco-img' src={taco} alt='taco'></img>
                        <div className='text'>

                    <h3>Taco</h3>
                    <p>Get this tasty delicious family size pizza at only;</p>
                    <h2>N3,000</h2>
                    <button>Add to Cart</button>
                    </div>

                </div>
            </artcle>
        </section>

    )
}

export default Favourite;
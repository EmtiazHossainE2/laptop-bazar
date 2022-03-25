import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Laptop.css'
const Laptop = (props) => {
    const { handleAddToCart, product } = props
    const { name, img, price, processor } = product
    return (
        <div className='col-lg-4 col-md-6 laptop-container'>
            <div className="cart mx-2 my-3 border border-1">
                <div className='text-center mt-3 '>
                    <img className='laptop-img ' src={img} alt="" />
                </div>
                <div className='ms-4 mt-3'>
                    <h5> {name} </h5>
                    <p>Processor : {processor.slice(0, 20)}</p>
                    <h5>Price : $ {price}</h5>
                </div>
                <button className='cart-btn' onClick={() => handleAddToCart(product)} >
                    <p className='my-2'>Add To Cart <FontAwesomeIcon className='icon' icon={faShoppingCart}></FontAwesomeIcon></p>
                </button>
            </div>
        </div>
    );
};

export default Laptop;
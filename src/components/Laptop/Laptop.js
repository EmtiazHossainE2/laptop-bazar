import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Laptop.css'
const Laptop = (props) => {
    const { name, img, price, processor } = props.product
    return (
        <div className='col-lg-4 laptop-container'>
            <div className="cart mx-2 my-3 border border-1">
                <div className='text-center'>
                    <img className='laptop-img' src={img} alt="" />
                </div>
                <h5> {name} </h5>
                <p>Processor : {processor.slice(0, 20)}</p>
                <h5>Price : $ {price}</h5>
                <button className='cart-btn' >
                    <p className='my-2'>Add To Cart <FontAwesomeIcon className='icon' icon={faShoppingCart}></FontAwesomeIcon></p>
                </button>
            </div>
        </div>
    );
};

export default Laptop;
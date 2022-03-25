import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBabyCarriage, faTrash } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = () => {
    return (
        <div>
            <div className="cart-container px-2">
                <h3 className='pt-3'>Selected Items</h3>
                <button className='get-btn' >
                    <p className='my-2'>Get One <FontAwesomeIcon className='icon' icon={faBabyCarriage}></FontAwesomeIcon></p>
                </button>
                <button className='reset-btn' >
                    <p className='my-2'>Reset <FontAwesomeIcon className='icon' icon={faTrash}></FontAwesomeIcon></p>
                </button>
            </div>
        </div>
    );
};

export default Cart;
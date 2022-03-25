import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBabyCarriage, faTrash } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = ({ cart, remove }) => {
    const [getOneItem, SetGetOneItem] = useState([])
    // console.log(cart);
    const getOne = (cart) => {
        let luckyOne = cart[Math.floor(Math.random() * cart.length)];
        SetGetOneItem(luckyOne.name);
    }

    return (
        <div>

            <div className="cart-container px-2">
                <h3 className='pt-3 pb-2 text-center px-5'>Selected Items</h3>
                <div className='ps-2'>
                    {cart.map(pd => (
                        <p key={pd.id}>{pd.name}</p>
                    ))}
                </div>
                <button className='get-btn' onClick={() => getOne(cart)} >
                    <p className='my-2 fs-5'>Get One <FontAwesomeIcon className='icon' icon={faBabyCarriage}></FontAwesomeIcon></p>
                </button>
                <p className='my-2 ps-3'>{getOneItem}</p>
                <button className='reset-btn' onClick={remove} >
                    <p className='my-2 fs-5'>Reset <FontAwesomeIcon className='icon' icon={faTrash}></FontAwesomeIcon></p>
                </button>
            </div>
        </div>
    );
};

export default Cart;
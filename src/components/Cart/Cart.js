import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBabyCarriage, faTrash } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
import RandomName from '../RandomName/RandomName';
import { removeFromDb } from '../../utilities/fakedb';

const Cart = ({ cart, setCart, remove, deleteAll }) => {
    const [getOneItem, SetGetOneItem] = useState({})
    const getOne = (cart) => {
        let luckyOne = cart[Math.floor(Math.random() * cart.length)];
        SetGetOneItem(luckyOne);
    }
    const removeAll = () => {
        let newCart = []
        SetGetOneItem(newCart)
    }

    const deleteSingleBtn = (id) => {
        const deleteMe = cart.filter(product => product.id !== id)
        setCart(deleteMe)
        removeFromDb(id)
    }

    return (
        <div>

            <div className="cart-container px-2">
                <h3 className='pt-3 pb-2 text-center px-5'>Selected Items</h3>
                <div className='ps-2'>
                    {cart.map(pd => (
                        <RandomName pd={pd} key={pd.price} deleteSingleBtn={deleteSingleBtn}></RandomName>
                    ))}
                </div>
                <button className='get-btn' onClick={(e) => {
                    e.preventDefault()
                    getOne(cart)
                }} >
                    <p className='my-2 fs-5'>Get One <FontAwesomeIcon className='icon' icon={faBabyCarriage}></FontAwesomeIcon></p>
                </button>

                {
                    getOneItem?.id ? <div className='cart-item'>
                        <div className="cart-img my-2 ps-4">
                            <img src={getOneItem.img} alt="" />
                        </div>
                        <p className='my-2 pe-4'>{getOneItem.name}</p>
                    </div> : null
                }

                {/* <p className='my-2 ps-3'>{getOneItem}</p> */}
                <div onClick={deleteAll}>
                    <button className='reset-btn' onClick={remove} >
                        <p className='my-2 fs-5' onClick={() => removeAll(cart)}>Reset <FontAwesomeIcon className='icon' icon={faTrash}></FontAwesomeIcon></p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
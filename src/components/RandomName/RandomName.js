import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTrash } from '@fortawesome/free-solid-svg-icons'

const RandomName = ({ pd }) => {
    return (
        <div>
            <div className='cart-item'>
                <div className="cart-img">
                    <img src={pd.img} alt="" />
                </div>
                <p >{pd.name} </p>
                <p><FontAwesomeIcon className='icon deleteIcon' icon={faTrash}></FontAwesomeIcon></p>
            </div>
        </div>
    );
};

export default RandomName;
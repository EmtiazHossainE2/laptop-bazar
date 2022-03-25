import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';


const Products = () => {
    const [products, setProduts] = useState([])

    return (
        <div>
            <h2>Total Products <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></h2>
        </div>
    );
};

export default Products;
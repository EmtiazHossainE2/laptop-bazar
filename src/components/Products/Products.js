
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Laptop from '../Laptop/Laptop';
import './Products.css'


const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <div className="row product-container">
                <div className="col-lg-10 pe-0 col-md-9">
                    <div className="row container mt-5">
                        {
                            products.map(product => <Laptop key={product.id} product={product}></Laptop>)
                        }
                    </div>
                </div>
                <div className="col-lg-2 ps-2 col-md-3 cart-container">
                    <Cart></Cart>
                </div>
            </div>

        </div>
    );
};

export default Products;
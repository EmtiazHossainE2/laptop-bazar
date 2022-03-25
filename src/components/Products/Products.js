
import React, { useEffect, useState } from 'react';
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
            <div className="row">
                <div className="col-lg-10  col-md-9">
                    <div className="row container mt-5">
                        {
                            products.map(product => <Laptop key={product.id} product={product}></Laptop>)
                        }
                    </div>
                </div>
                <div className="col-lg-2  col-md-3">
                    <h3>Cart</h3>
                </div>
            </div>

        </div>
    );
};

export default Products;
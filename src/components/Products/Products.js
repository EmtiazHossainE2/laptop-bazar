
import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Laptop from '../Laptop/Laptop';
import './Products.css'


const Products = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    // console.log(cart);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    //load stored Cart data 
    useEffect(() => {
        const storedCart = getStoredCart()
        const savedCart = []
        for (const id in storedCart) {
            const exitsProducts = products.find(product => product.id === id);
            if (exitsProducts) {
                const quantity = storedCart[id]
                exitsProducts.quantity = quantity
                // console.log(exitsProducts);
                savedCart.push(exitsProducts)
            }
        }
        setCart(savedCart)
    }, [products])

    const handleAddToCart = (product) => {
        let newCart = []
        const exists = cart.find(item => item.name === product.name)
        if (!exists && cart.length < 4) {
            newCart = [...cart, product]
        }
        else if (exists && cart.length < 4) {
            alert('Opps ! You are already selected')
            return
        }
        else {
            alert("Oppps ! Your  can't add more ")
            return
        }
        setCart(newCart);
        addToDb(product.id)
    }
    const remove = () => {
        let newCart = []
        setCart(newCart)
    }
    const deleteAll = (product) => {
        deleteShoppingCart(product.id)
    }

    return (
        <div>

            <div className="row product-container">
                <div className="col-lg-9 pe-0 col-md-9">
                    <div className="row container mt-5">
                        {
                            products.map(product => <Laptop
                                key={product.id}
                                product={product}
                                handleAddToCart={handleAddToCart}
                            ></Laptop>)
                        }
                    </div>
                </div>
                <div className="col-lg-3 ps-2 col-md-3 cart-container">
                    <Cart cart={cart} setCart={setCart} remove={remove} deleteAll={deleteAll}></Cart>
                </div>
            </div>

        </div>
    );
};

export default Products;
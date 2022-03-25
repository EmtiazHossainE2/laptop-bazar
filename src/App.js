import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products/Products';
const App = () => {
    return (
        <div className='overflow-hidden'>
            <div className='text-light bg-dark text-center py-3'>
                <h1>Super Gaming Laptop</h1>
                <h2>Get Your Laptop</h2>
            </div>
            <Products></Products>
        </div>
    );
};

export default App;
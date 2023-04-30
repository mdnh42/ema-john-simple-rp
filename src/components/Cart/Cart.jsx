import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    // const {cart} = props; 
    console.log(cart);
    let total = 0; 
    let shipping = 0; 
    for(const product of cart)
    {
        total = total + product.price; 
        shipping = shipping + product.shipping; 
    }
    const tax = total *7/100; 

    const grandtotal = total + shipping + tax; 

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: {total}</p>
                <p>Shipping: {shipping}</p>
                <p>Tax:{tax} </p>
                <h6>Grand Total: {grandtotal} </h6>
        </div>
    );
};

export default Cart;
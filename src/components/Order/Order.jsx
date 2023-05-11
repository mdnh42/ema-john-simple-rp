import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb();
    }

    // console.log();
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItem>)
                }

            </div>
            <div className='savedCart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;
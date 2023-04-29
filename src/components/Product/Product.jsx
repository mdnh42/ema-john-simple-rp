import React from 'react';
import './Product.css';
const Product = (props) => {

    const { img, name, seller, quantity, price, ratings } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-details">
                <h3 className='product-name'>{name}</h3>
                <p>Price: {price}</p>
                <p>Manufecture: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button className='btn-cart'>Add Cart</button>
        </div>
    );
};

export default Product;
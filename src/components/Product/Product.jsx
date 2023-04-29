import React from 'react';
import './Product.css';
import { faCoffee, faFontAwesome, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Product = (props) => {

    const { img, name, seller, quantity, price, ratings } = props.product;

    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-details">
                <h3 className='product-name'>{name}</h3>
                <p>Price: {price}</p>
                <p>Manufecture: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'  > Add Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;
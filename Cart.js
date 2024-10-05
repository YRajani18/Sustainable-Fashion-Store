import React from 'react';
import { useCart } from '../CartContext';

const Cart = () => {
    const { cart } = useCart();

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cart.map((item, index) => (
                    <div key={index} className="cart-item">
                        <img src={item.image} alt={item.name} className="item-image" />
                        <h3>{item.name}</h3>
                        <p className="item-price">{item.price}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;

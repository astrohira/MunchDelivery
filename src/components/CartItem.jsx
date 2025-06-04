// src/components/CartItem.jsx
import React from 'react';

const CartItem = ({ item, updateQuantity, removeItem }) => {
    return (
        <li className="cart-item">
            <div className="cart-item-info">
                <span>{item.name} (R$ {item.price.toFixed(2)})</span>
                <br />
                <small>Subtotal: R$ {(item.price * item.quantity).toFixed(2)}</small>
            </div>
            <div className="cart-item-actions">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                <button className="remove" onClick={() => removeItem(item.id)}>Remover</button>
            </div>
        </li>
    );
};

export default CartItem;
// src/components/MenuItem.jsx
import React from 'react';

const MenuItem = ({ item, addToCart }) => {
    return (
        <div className="menu-item">
            <img src={item.image} alt={item.name} />
            <div className="menu-item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="price">R$ {item.price.toFixed(2)}</div>
                <button onClick={() => addToCart(item)}>Adicionar ao Carrinho</button>
            </div>
        </div>
    );
};

export default MenuItem;
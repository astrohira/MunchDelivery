// src/components/RestaurantCard.jsx
import React from 'react';

const RestaurantCard = ({ restaurant, navigate }) => {
    return (
        <div className="restaurant-card">
            <div className="restaurant-header">
                <img src={restaurant.image} alt={restaurant.name} className="restaurant-logo" />
                <h3>{restaurant.name}</h3>
            </div>
            <p>{restaurant.description}</p>
            <button onClick={() => navigate('restaurantMenu', { restaurantId: restaurant.id })}>Ver Cardápio</button>
        </div>
    );
};

export default RestaurantCard;
// src/pages/RestaurantsListPage.jsx
import React from 'react';
import RestaurantCard from '../components/RestaurantCard';
import { restaurants, menuItems, categoriesData } from '../data/mockData';

const RestaurantsListPage = ({ navigate, selectedCategory, onSelectCategory }) => {
    const filteredRestaurants = restaurants.filter(restaurant => {
        if (!selectedCategory || selectedCategory === 'all-categories-card') {
            return true;
        }
        return menuItems.some(item =>
            item.restaurantId === restaurant.id &&
            item.category.toLowerCase() === selectedCategory.toLowerCase().replace('-', ' ')
        );
    });

    const currentCategoryName = categoriesData.find(cat => cat.id === selectedCategory)?.name || 'Todos';

    return (
        <div className="container">
            <h2>Restaurantes: {currentCategoryName}</h2>
            <div className="restaurants-grid">
                {filteredRestaurants.length === 0 ? (
                    <p style={{ textAlign: 'center', gridColumn: '1 / -1', marginTop: '30px' }}>Nenhum restaurante encontrado para a categoria selecionada.</p>
                ) : (
                    filteredRestaurants.map(restaurant => (
                        <RestaurantCard
                            key={restaurant.id}
                            restaurant={restaurant}
                            navigate={navigate}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default RestaurantsListPage;
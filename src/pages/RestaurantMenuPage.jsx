// src/pages/RestaurantMenuPage.jsx
import React from 'react';
import MenuItem from '../components/MenuItem';
import { restaurants, menuItems } from '../data/mockData';

const RestaurantMenuPage = ({ addToCart, restaurantId, navigate }) => {
    const currentRestaurant = restaurants.find(r => r.id === restaurantId);

    if (!currentRestaurant) {
        return (
            <div className="container">
                <h2>Restaurante Não Encontrado</h2>
                <p>O restaurante que você está procurando não existe ou não está disponível.</p>
                <button onClick={() => navigate('restaurants')}>Voltar para a lista de Restaurantes</button> {/* Alterado para 'restaurants' */}
            </div>
        );
    }

    const restaurantMenuItems = menuItems.filter(item => item.restaurantId === restaurantId);
    const categories = [...new Set(restaurantMenuItems.map(item => item.category))];

    return (
        <div className="container">
            <h2>Menu de {currentRestaurant.name}</h2>
            <p className="restaurant-description">{currentRestaurant.description}</p>
            <button
                onClick={() => navigate('restaurants')} // Alterado para 'restaurants'
                style={{ marginBottom: '20px', width: 'auto', padding: '10px 20px', backgroundColor: '#6c757d' }}
            >
                ← Voltar para Restaurantes
            </button>
            {categories.length === 0 ? (
                <p>Este restaurante ainda não possui itens no menu. Volte em breve!</p>
            ) : (
                categories.map(category => (
                    <div key={category}>
                        <h3>{category}</h3>
                        <div className="menu-grid">
                            {restaurantMenuItems
                                .filter(item => item.category === category)
                                .map(item => (
                                    <MenuItem key={item.id} item={item} addToCart={addToCart} />
                                ))}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default RestaurantMenuPage;
// src/pages/HomePage.jsx
import React from 'react';
import CategoryCard from '../components/CategoryCard';
import { categoriesData } from '../data/mockData';

const HomePage = ({ navigate, selectedCategory, onSelectCategory }) => {
    const handleCategoryClick = (categoryId) => {
        onSelectCategory(categoryId);
        navigate('restaurants');
    };

    return (
        <div className="container home-page">
            <h2>Bem-vindo ao MunchDelivery!</h2>
            <p>Seu destino para pedidos de comida online, fácil e rápido. Explore nossas opções por categoria ou veja todos os restaurantes.</p>

            <h2>Explore Nossas Categorias</h2>
            <div className="categories-grid">
                {categoriesData
                    .map(category => (
                        <CategoryCard
                            key={category.id}
                            category={category}
                            onSelectCategory={handleCategoryClick}
                            isSelected={selectedCategory === category.id}
                        />
                    ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <button onClick={() => { onSelectCategory(''); navigate('restaurants'); }}>Ver Todos os Restaurantes</button>
            </div>
        </div>
    );
};

export default HomePage;
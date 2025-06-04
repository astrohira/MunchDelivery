// src/components/CategoryCard.jsx
import React from 'react';

const CategoryCard = ({ category, onSelectCategory, isSelected }) => {
    return (
        <div
            className={`category-card ${isSelected ? 'selected' : ''}`}
            onClick={() => onSelectCategory(category.id)}
        >
            <img src={category.image} alt={category.name} />
            <h4>{category.name}</h4>
        </div>
    );
};

export default CategoryCard;
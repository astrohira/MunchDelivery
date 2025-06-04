// src/components/Navbar.jsx
import React from 'react';

const Navbar = ({ navigate, isLoggedIn, logout, loggedInUser }) => { // NOVO: recebe loggedInUser
    // IDs dos restaurantes para identificar um usuário como empresário
    const restaurantIds = ['mcdonalds-br', 'burguer-do-chefe', 'pizzaria-saborosa', 'saladas-express', 'sushi-master'];
    const isOwner = restaurantIds.includes(loggedInUser);

    return (
        <nav>
            <ul>
                <li><a href="#" onClick={() => navigate('home')}>Início</a></li>
                <li><a href="#" onClick={() => navigate('restaurants')}>Restaurantes</a></li>
                <li><a href="#" onClick={() => navigate('cart')}>Carrinho</a></li>
                {isLoggedIn ? (
                    <>
                        {isOwner ? (
                            <li><a href="#" onClick={() => navigate('ownerProfile')}>Perfil Empresarial</a></li>
                        ) : (
                            <li><a href="#" onClick={() => navigate('dashboard')}>Meu Perfil</a></li>
                        )}
                        <li><a href="#" onClick={logout}>Sair</a></li>
                    </>
                ) : (
                    <li><a href="#" onClick={() => navigate('login')}>Login / Registrar</a></li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
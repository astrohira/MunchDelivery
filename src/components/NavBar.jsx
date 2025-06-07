// src/components/Navbar.jsx
import React from 'react';

// NOVO: Adiciona a prop 'loggedInUser' e 'showMobileMenu', 'setShowMobileMenu'
const Navbar = ({ navigate, isLoggedIn, logout, loggedInUser, showMobileMenu, setShowMobileMenu }) => {
    const restaurantIds = ['mcdonalds-br', 'burguer-do-chefe', 'pizzaria-saborosa', 'saladas-express', 'sushi-master'];
    const isOwner = restaurantIds.includes(loggedInUser);

    return (
        <nav className="main-nav"> {/* Adiciona a classe 'main-nav' */}
            <div className="hamburger-menu"> {/* Container para o botão hambúrguer */}
                <button onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    {/* Ícone de hambúrguer ou 'X' */}
                    {showMobileMenu ? '✕' : '☰'}
                </button>
            </div>
            {/* O 'ul' principal agora tem a classe 'nav-links' e é condicionalmente 'open' */}
            <ul className={`nav-links ${showMobileMenu ? 'open' : ''}`}>
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
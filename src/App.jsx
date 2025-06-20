// src/App.jsx
import React, { useState, useEffect } from 'react';

// Importar componentes de página
import HomePage from './pages/HomePage.jsx';
import RestaurantsListPage from './pages/RestaurantsListPage.jsx';
import RestaurantMenuPage from './pages/RestaurantMenuPage.jsx';
import CartPage from './pages/CartPage.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';
import AuthPage from './pages/AuthPage.jsx';
import UserDashboardPage from './pages/UserDashboardPage.jsx';
import RestaurantOwnerProfilePage from './pages/RestaurantOwnerProfilePage.jsx';
import Navbar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';

function App() {
    // Variáveis de Estado
    const [currentPage, setCurrentPage] = useState(localStorage.getItem('munchdelivery_currentPage') || 'home');
    const [selectedRestaurantId, setSelectedRestaurantId] = useState(localStorage.getItem('munchdelivery_selectedRestaurantId') || null);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('munchdelivery_cart')) || []);
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('munchdelivery_isLoggedIn') === 'true');
    const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem('munchdelivery_loggedInUser') || null);
    const [authMessage, setAuthMessage] = useState(null); // Mensagens de autenticação
    const [appMessage, setAppMessage] = useState(null); // NOVO: Mensagens gerais da aplicação
    const [selectedCategory, setSelectedCategory] = useState(localStorage.getItem('munchdelivery_selectedCategory') || '');
    const [userLocation, setUserLocation] = useState(null);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    // Efeitos para persistir o estado no localStorage
    useEffect(() => {
        localStorage.setItem('munchdelivery_currentPage', currentPage);
    }, [currentPage]);

    useEffect(() => {
        localStorage.setItem('munchdelivery_selectedRestaurantId', selectedRestaurantId);
    }, [selectedRestaurantId]);

    useEffect(() => {
        localStorage.setItem('munchdelivery_cart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem('munchdelivery_isLoggedIn', isLoggedIn);
        localStorage.setItem('munchdelivery_loggedInUser', loggedInUser);
    }, [isLoggedIn, loggedInUser]);

    useEffect(() => {
        localStorage.setItem('munchdelivery_selectedCategory', selectedCategory);
    }, [selectedCategory]);

    // Efeito para limpar mensagens da aplicação após um tempo
    useEffect(() => {
        if (appMessage) {
            const timer = setTimeout(() => {
                setAppMessage(null);
            }, 3000); // Mensagem some após 3 segundos
            return () => clearTimeout(timer);
        }
    }, [appMessage]);

    // Função de navegação
    const navigate = (page, params = {}) => {
        setCurrentPage(page);
        setAuthMessage(null); // Limpa mensagens de autenticação ao navegar
        setAppMessage(null); // NOVO: Limpa mensagens gerais ao navegar
        setShowMobileMenu(false); // Fecha o menu mobile ao navegar

        if (page === 'restaurantMenu' && params.restaurantId) {
            setSelectedRestaurantId(params.restaurantId);
        } else {
            setSelectedRestaurantId(null);
        }

        if (page === 'home' || page === 'login' || page === 'checkout') {
            setSelectedCategory('');
        }
    };

    // Função para definir a localização do usuário
    const handleSetUserLocation = (location) => {
        setUserLocation(location);
        setAppMessage({ type: 'success', text: 'Localização obtida com sucesso!' }); // Mensagem de sucesso
    };

    // Funções do Carrinho
    const addToCart = (itemToAdd) => {
        setCart(prevCart => {
            const existingItemIndex = prevCart.findIndex(item => item.id === itemToAdd.id);
            if (existingItemIndex > -1) {
                const newCart = [...prevCart];
                newCart[existingItemIndex].quantity += 1;
                return newCart;
            } else {
                return [...prevCart, { ...itemToAdd, quantity: 1 }];
            }
        });
        setAppMessage({ type: 'success', text: `${itemToAdd.name} adicionado ao carrinho!` }); // NOVO: Substitui alert()
    };

    const updateQuantity = (itemId, newQuantity) => {
        setCart(prevCart => {
            const itemIndex = prevCart.findIndex(item => item.id === itemId);
            if (itemIndex > -1) {
                if (newQuantity <= 0) {
                    setAppMessage({ type: 'info', text: 'Item removido do carrinho.' }); // Opcional: mensagem para remover item
                    return prevCart.filter(item => item.id !== itemId);
                } else {
                    const newCart = [...prevCart];
                    newCart[itemIndex].quantity = newQuantity;
                    return newCart;
                }
            }
            return prevCart;
        });
    };

    const removeItem = (itemId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== itemId));
        setAppMessage({ type: 'info', text: 'Item removido do carrinho.' }); // Opcional: mensagem para remover item
    };

    // Funções de Autenticação
    const register = (username, password) => {
        if (!username || !password) {
            setAuthMessage({ type: 'error', text: 'Nome de usuário e senha são obrigatórios.' });
            return;
        }
        if (localStorage.getItem(`user_${username}`)) {
            setAuthMessage({ type: 'error', text: 'Nome de usuário já existe.' });
            return;
        }
        localStorage.setItem(`user_${username}`, password);
        setAuthMessage({ type: 'success', text: 'Registro realizado com sucesso! Faça login.' });
    };

    const login = (username, password) => {
        if (!username || !password) {
            setAuthMessage({ type: 'error', text: 'Nome de usuário e senha são obrigatórios.' });
            return;
        }
        const storedPassword = localStorage.getItem(`user_${username}`);
        if (storedPassword === password) {
            setIsLoggedIn(true);
            setLoggedInUser(username);
            setAuthMessage({ type: 'success', text: `Bem-vindo, ${username}!` });
            
            const restaurantIds = ['mcdonalds-br', 'burguer-do-chefe', 'pizzaria-saborosa', 'saladas-express', 'sushi-master'];
            if (restaurantIds.includes(username)) {
                navigate('ownerProfile');
            } else {
                navigate('dashboard');
            }
        } else {
            setAuthMessage({ type: 'error', text: 'Nome de usuário ou senha incorretos.' });
        }
    };

    const logout = () => {
        setIsLoggedIn(false);
        setLoggedInUser(null);
        localStorage.removeItem('munchdelivery_isLoggedIn');
        localStorage.removeItem('munchdelivery_loggedInUser');
        setAppMessage({ type: 'info', text: 'Você foi desconectado.' }); // NOVO: Substitui alert()
        navigate('home');
    };

    // Função para atualizar a categoria selecionada
    const selectCategory = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    // Renderização condicional de conteúdo
    let content;
    switch (currentPage) {
        case 'home':
            content = <HomePage navigate={navigate} selectedCategory={selectedCategory} onSelectCategory={selectCategory} onSetUserLocation={handleSetUserLocation} />;
            break;
        case 'restaurants':
            content = <RestaurantsListPage navigate={navigate} selectedCategory={selectedCategory} onSelectCategory={selectCategory} userLocation={userLocation} />;
            break;
        case 'restaurantMenu':
            content = <RestaurantMenuPage addToCart={addToCart} restaurantId={selectedRestaurantId} navigate={navigate} />;
            break;
        case 'cart':
            content = <CartPage cart={cart} updateQuantity={updateQuantity} removeItem={removeItem} navigate={navigate} />;
            break;
        case 'checkout':
            content = <CheckoutPage cart={cart} navigate={navigate} setAppMessage={setAppMessage} />; // NOVO: Passa setAppMessage
            break;
        case 'login':
            if (isLoggedIn) {
                const restaurantIds = ['mcdonalds-br', 'burguer-do-chefe', 'pizzaria-saborosa', 'saladas-express', 'sushi-master'];
                if (restaurantIds.includes(loggedInUser)) {
                    content = <RestaurantOwnerProfilePage loggedInUser={loggedInUser} logout={logout} navigate={navigate} />;
                } else {
                    content = <UserDashboardPage loggedInUser={loggedInUser} logout={logout} navigate={navigate} />;
                }
            } else {
                content = <AuthPage login={login} register={register} authMessage={authMessage} isLoggedIn={isLoggedIn} />;
            }
            break;
        case 'dashboard':
            content = isLoggedIn ? <UserDashboardPage loggedInUser={loggedInUser} logout={logout} navigate={navigate} /> : <AuthPage login={login} register={register} authMessage={authMessage} isLoggedIn={isLoggedIn} />;
            break;
        case 'ownerProfile':
            content = isLoggedIn ? <RestaurantOwnerProfilePage loggedInUser={loggedInUser} logout={logout} navigate={navigate} /> : <AuthPage login={login} register={register} authMessage={authMessage} isLoggedIn={isLoggedIn} />;
            break;
        default:
            content = <HomePage navigate={navigate} selectedCategory={selectedCategory} onSelectCategory={selectCategory} onSetUserLocation={handleSetUserLocation} />;
    }

    return (
        <div id="app-root-react">
            <header>
                <h1>MunchDelivery</h1>
            </header>
            <Navbar navigate={navigate} isLoggedIn={isLoggedIn} logout={logout} loggedInUser={loggedInUser} showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu} />
            {/* NOVO: Área para mensagens da aplicação */}
            {appMessage && (
                <div className={`app-message ${appMessage.type}`}>
                    {appMessage.text}
                </div>
            )}
            {content}
            <Footer />
        </div>
    );
}

export default App;
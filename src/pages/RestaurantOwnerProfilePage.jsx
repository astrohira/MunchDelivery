import React, { useState, useEffect } from 'react';
import { restaurants as mockRestaurants } from '../data/mockData.js'; // Importa mockRestaurants

const RestaurantOwnerProfilePage = ({ loggedInUser, logout, navigate }) => {
    const restaurantId = loggedInUser; // Simulamos que o loggedInUser é o ID do restaurante
    
    const [restaurantData, setRestaurantData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Dados simulados de desempenho do restaurante
    const [performanceData, setPerformanceData] = useState({
        totalOrders: 150,
        totalRevenue: 8500.00,
        averageRating: 4.5,
        dailyOrders: [10, 12, 15, 8, 20, 18, 22] // Exemplo para 7 dias
    });

    useEffect(() => {

        console.log("OwnerProfilePage: Componente montado, buscando informações do restaurante...");
        console.log("OwnerProfilePage: loggedInUser: (vindo de App.jsx) =", loggedInUser);
        console.log("OwnerProfilePage: restaurantId (usado para busca):", restaurantId);
        const fetchRestaurantInfo = async () => {
            try {
                setLoading(true);
                setError(null);
                const foundRestaurant = mockRestaurants.find(r => r.id === restaurantId); // Usa mockRestaurants

                console.log("OwnerProfilePage: Dados do restaurante encontrados:", foundRestaurant);

                if (foundRestaurant) {
                    setRestaurantData(foundRestaurant);
                } else {
                    setError('Dados do restaurante não encontrados para este ID.');
                    setRestaurantData(null);
                }
            } catch (err) {
                setError('Falha ao carregar informações do restaurante.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (restaurantId) {
            fetchRestaurantInfo();
        } else {
            setError('Nenhum ID de restaurante associado à conta logada.');
            setLoading(false);
        }
    }, [restaurantId]);

    const handleLogout = () => {
        logout();
        navigate('home');
    };

    if (loading) {
        return <div className="container owner-profile"><p style={{textAlign: 'center'}}>Carregando perfil do restaurante...</p></div>;
    }

    if (error) {
        return <div className="container owner-profile"><p style={{textAlign: 'center', color: 'red'}}>{error}</p></div>;
    }

    if (!restaurantData) {
        return <div className="container owner-profile"><p style={{textAlign: 'center'}}>Nenhum restaurante associado a esta conta. Por favor, faça login com uma conta de empresário válida.</p></div>;
    }

    return (
        <div className="container owner-profile">
            <h2>Perfil de {restaurantData.name}</h2>
            <p>Gerencie as informações e o desempenho do seu restaurante.</p>
            <div className="profile-section">
                <h3>Informações do Restaurante</h3>
                <div className="restaurant-details-display">
                    <img src={restaurantData.image} alt={restaurantData.name} className="restaurant-profile-logo" />
                    <div>
                        <p><strong>Nome:</strong> {restaurantData.name}</p>
                        <p><strong>Descrição:</strong> {restaurantData.description}</p>
                        <p><strong>ID do Restaurante:</strong> {restaurantData.id}</p>
                    </div>
                </div>
            </div>

            <div className="profile-section">
                <h3>Desempenho Geral</h3>
                <div className="performance-metrics-grid">
                    <div className="metric-card">
                        <h4>Pedidos Totais</h4>
                        <p>{performanceData.totalOrders}</p>
                    </div>
                    <div className="metric-card">
                        <h4>Receita Total</h4>
                        <p>R$ {performanceData.totalRevenue.toFixed(2)}</p>
                    </div>
                    <div className="metric-card">
                        <h4>Avaliação Média</h4>
                        <p>{performanceData.averageRating} ⭐</p>
                    </div>
                </div>
            </div>

            <div className="profile-section">
                <h3>Gerenciamento</h3>
                <p>Aqui você pode gerenciar seu cardápio, promoções e visualizar relatórios detalhados.</p>
                <button style={{marginRight: '10px'}}>Gerenciar Cardápio</button>
                <button>Ver Relatórios</button>
            </div>

            <button onClick={handleLogout} style={{ backgroundColor: '#dc3545', marginTop: '25px', width: 'auto', padding: '12px 25px' }}>
                Sair da Conta de Empresário
            </button>
        </div>
    );
};

export default RestaurantOwnerProfilePage;
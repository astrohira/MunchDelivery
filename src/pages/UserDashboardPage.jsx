// src/pages/UserDashboardPage.jsx
import React, { useState, useEffect } from 'react';

const UserDashboardPage = ({ loggedInUser, logout, navigate }) => {
    const [userOrders, setUserOrders] = useState([]);

    useEffect(() => {
        const mockOrders = [
            { id: 'ORD001', date: '2025-05-20', total: 75.00, items: ['Pizza de Calabresa', 'Coca-Cola'] },
            { id: 'ORD002', date: '2025-05-25', total: 50.50, items: ['Hambúrguer com Bacon', 'Batata Frita', 'Suco de Laranja'] },
            { id: 'ORD003', date: '2025-06-01', total: 120.00, items: ['Combinado de Salmão', 'Hot Roll'] }
        ];
        setUserOrders(mockOrders);
    }, []);

    const handleLogout = () => {
        logout();
        navigate('home');
    };

    return (
        <div className="container user-dashboard">
            <h2>Bem-vindo, {loggedInUser || 'Usuário'}!</h2>
            <p>Este é o seu painel de usuário na empresa MunchDelivery.</p>

            <div className="dashboard-section">
                <h3>Informações da Conta</h3>
                <p><strong>Nome de Usuário: </strong>{loggedInUser || 'Não Logado'}</p>
                <p><strong>Email: </strong>{`${loggedInUser || 'usuário'}@munchdelivery.com (simulado)`}</p>
                <button onClick={handleLogout} style={{ backgroundColor: '#dc3545', marginTop: '15px' }}>Sair da Conta</button>
            </div>

            <div className="dashboard-section">
                <h3>Meus Pedidos Recentes</h3>
                {userOrders.length === 0 ? (
                    <p>Você ainda não fez nenhum pedido.</p>
                ) : (
                    <ul className="order-history">
                        {userOrders.map(order => (
                            <li key={order.id} className="order-item">
                                <div>
                                    <strong>Pedido #{order.id}</strong>
                                    <span style={{ marginLeft: '10px', color: '#666', fontSize: '0.9em' }}>({order.date})</span>
                                </div>
                                <p style={{ margin: '5px 0', fontSize: '0.95em' }}>Itens: {order.items.join(', ')}</p>
                                <p><strong>Total: R$ {order.total.toFixed(2)}</strong></p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="dashboard-section">
                <h3>Endereços Salvos</h3>
                <p>Nenhum endereço salvo. Adicione um durante o checkout!</p>
            </div>
        </div>
    );
};

export default UserDashboardPage;
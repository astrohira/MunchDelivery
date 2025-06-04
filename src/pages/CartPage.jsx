// src/pages/CartPage.jsx
import React from 'react';
import CartItem from '../components/CartItem';

const CartPage = ({ cart, updateQuantity, removeItem, navigate }) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="container">
            <h2>Seu Carrinho de Compras</h2>
            {cart.length === 0 ? (
                <p>Seu carrinho está vazio. Adicione alguns itens do menu!</p>
            ) : (
                <ul className="cart-items">
                    {cart.map(item => (
                        <CartItem
                            key={item.id}
                            item={item}
                            updateQuantity={updateQuantity}
                            removeItem={removeItem}
                        />
                    ))}
                </ul>
            )}
            <div className="cart-summary">
                <p>Total do Pedido: R$ {total.toFixed(2)}</p>
            </div>
            {cart.length > 0 && (
                <button onClick={() => navigate('checkout')} style={{ marginTop: '20px', width: '100%', padding: '15px' }}>
                    Continuar para o Checkout
                </button>
            )}
        </div>
    );
};

export default CartPage;
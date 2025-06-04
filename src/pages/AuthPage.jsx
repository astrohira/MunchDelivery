// src/pages/AuthPage.jsx
import React, { useState, useEffect } from 'react';

const AuthPage = ({ login, register, authMessage, isLoggedIn }) => {
    const [username, setUsername] = useState(localStorage.getItem('temp_username') || '');
    const [password, setPassword] = useState(localStorage.getItem('temp_password') || '');

    // Efeito para persistir os campos de usuário/senha temporários
    useEffect(() => {
        localStorage.setItem('temp_username', username);
    }, [username]);

    useEffect(() => {
        localStorage.setItem('temp_password', password);
    }, [password]);

    const handleRegister = () => {
        register(username, password);
    };

    const handleLogin = () => {
        login(username, password);
    };

    return (
        <div className="container auth-form">
            <h2>{isLoggedIn ? 'Você já está logado!' : 'Login / Registrar'}</h2>
            <div className="warning">
                Atenção: Os dados da sua conta são armazenados **localmente no seu navegador** (localStorage) e não são seguros. Eles serão perdidos se o cache do navegador for limpo.
            </div>
            {!isLoggedIn && (
                <div>
                    <label htmlFor="auth-username">Nome de Usuário:</label>
                    <input
                        type="text"
                        id="auth-username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Digite seu nome de usuário"
                        required
                    />
                    <label htmlFor="auth-password">Senha:</label>
                    <input
                        type="password"
                        id="auth-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Digite sua senha"
                        required
                    />
                    <button onClick={handleLogin}>Entrar</button>
                    <button onClick={handleRegister} style={{ backgroundColor: '#28a745' }}>Registrar</button>
                    {authMessage && (
                        <p className={`auth-message ${authMessage.type}`}>{authMessage.text}</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default AuthPage;
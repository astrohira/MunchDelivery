// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    const developers = ['Gabriel de Azevedo', 'Hugo Molliary', 'Victor Alejandro', 'Talles Groetaers', 'José Luiz'];

    return (
        <footer>
            <p>© 2025 MunchDelivery. Todos os direitos reservados.</p>
            <p>Desenvolvido por: {developers.join(', ')}</p>
        </footer>
    );
};

export default Footer;
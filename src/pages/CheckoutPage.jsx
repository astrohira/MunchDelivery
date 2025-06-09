// src/pages/CheckoutPage.jsx
import React, { useState } from 'react';

const CheckoutPage = ({ cart, navigate, setAppMessage }) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const [cep, setCep] = useState('');
    const [address, setAddress] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [addressNumber, setAddressNumber] = useState('');
    const [addressComplement, setAddressComplement] = useState('');

    const [cepLoading, setCepLoading] = useState(false);
    const [cepError, setCepError] = useState('');

    const fetchAddressByCep = async (inputCep) => {
        const cleanCep = inputCep.replace(/\D/g, '');

        if (cleanCep.length !== 8) {
            setCepError('CEP deve ter 8 dígitos.');
            return;
        }

        setCepLoading(true);
        setCepError('');
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
            if (!response.ok) {
                throw new Error('Erro ao buscar CEP.');
            }
            const data = await response.json();

            if (data.erro) {
                setCepError('CEP não encontrado ou inválido.');
                setAddress('');
                setNeighborhood('');
                setCity('');
                setState('');
            } else {
                setAddress(data.logradouro || '');
                setNeighborhood(data.bairro || '');
                setCity(data.localidade || '');
                setState(data.uf || '');
                setCepError('');
            }
        } catch (error) {
            setCepError('Falha na conexão ao buscar CEP.');
            console.error('Erro ao buscar CEP:', error);
        } finally {
            setCepLoading(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validação básica do formulário
        if (!event.target.name.value || !event.target.phone.value || !cep || !address || !addressNumber || !neighborhood || !city || !state || !event.target.paymentMethod.value) {
            setAppMessage({ type: 'error', text: 'Por favor, preencha todos os campos obrigatórios.' });
            return;
        }
        if (cepError) {
             setAppMessage({ type: 'error', text: 'Corrija o CEP antes de finalizar o pedido.' });
             return;
        }

        const deliveryInfo = {
            name: event.target.name.value,
            phone: event.target.phone.value,
            cep: cep,
            address: `${address}, ${addressNumber} ${addressComplement ? `(${addressComplement})` : ''}`,
            neighborhood: neighborhood,
            city: city,
            state: state,
            paymentMethod: event.target.paymentMethod.value
        };

        // Exibe a mensagem de sucesso
        setAppMessage({
            type: 'success',
            text: `Pedido Concluído! Total: R$ ${total.toFixed(2)}. Será entregue em: ${deliveryInfo.address} - ${deliveryInfo.neighborhood}, ${deliveryInfo.city}/${deliveryInfo.state}.`
        });

        localStorage.removeItem('munchdelivery_cart');

        // NOVO: Adiciona um atraso de 2 segundos (2000 ms) antes de navegar
        setTimeout(() => {
            navigate('home');
        }, 2000); // Ajuste o tempo conforme necessário (ex: 1500ms para 1.5s)
    };

    if (cart.length === 0) {
        return (
            <div className="container">
                <h2>Checkout</h2>
                <p>Seu carrinho está vazio. Por favor, adicione itens antes de finalizar o pedido.</p>
            </div>
        );
    }

    return (
        <div className="container">
            <h2>Checkout</h2>
            <form className="checkout-form" onSubmit={handleSubmit}>
                <h3>Informações de Entrega</h3>

                <label htmlFor="name">Nome Completo:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="phone">Telefone:</label>
                <input type="tel" id="phone" name="phone" placeholder="(XX) XXXXX-XXXX" required />

                {/* Campos do CEP */}
                <label htmlFor="cep">CEP:</label>
                <input
                    type="text"
                    id="cep"
                    name="cep"
                    placeholder="Ex: 00000-000"
                    value={cep}
                    onChange={(e) => {
                        setCep(e.target.value);
                        // Opcional: Acionar a busca ao digitar
                        // if (e.target.value.replace(/\D/g, '').length === 8) {
                        //     fetchAddressByCep(e.target.value);
                        // }
                    }}
                    onBlur={(e) => fetchAddressByCep(e.target.value)}
                    maxLength="9"
                    required
                />
                {cepLoading && <p className="cep-message loading">Buscando CEP...</p>}
                {cepError && <p className="cep-message error">{cepError}</p>}

                {/* Campos de Endereço (preenchidos pelo CEP, mas editáveis) */}
                <label htmlFor="address">Rua:</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Rua, Avenida, etc."
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    readOnly={cepLoading}
                />

                <label htmlFor="addressNumber">Número:</label>
                <input
                    type="text"
                    id="addressNumber"
                    name="addressNumber"
                    placeholder="Número"
                    value={addressNumber}
                    onChange={(e) => setAddressNumber(e.target.value)}
                    required
                />

                <label htmlFor="addressComplement">Complemento (opcional):</label>
                <input
                    type="text"
                    id="addressComplement"
                    name="addressComplement"
                    placeholder="Ex: Apt 101, Bloco B"
                    value={addressComplement}
                    onChange={(e) => setAddressComplement(e.target.value)}
                />

                <label htmlFor="neighborhood">Bairro:</label>
                <input
                    type="text"
                    id="neighborhood"
                    name="neighborhood"
                    placeholder="Bairro"
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    required
                    readOnly={cepLoading}
                />

                <label htmlFor="city">Cidade:</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Cidade"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    readOnly={cepLoading}
                />

                <label htmlFor="state">Estado (UF):</label>
                <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder="UF"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    maxLength="2"
                    required
                    readOnly={cepLoading}
                />

                <h3>Método de Pagamento</h3>
                <select id="paymentMethod" name="paymentMethod" required>
                    <option value="delivery">Pagamento na entrega (Dinheiro/Cartão)</option>
                    <option value="online">Cartão online (simulado)</option>
                </select>

                <h3>Total a Pagar: R$ {total.toFixed(2)}</h3>
                <button type="submit" disabled={cepLoading}>Finalizar Pedido</button>
            </form>
        </div>
    );
};

export default CheckoutPage;
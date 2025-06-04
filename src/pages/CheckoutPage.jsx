import React, { useState } from 'react'; // Adicione useState

const CheckoutPage = ({ cart, navigate }) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Novos estados para os campos de endereço
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState('');
    const [neighborhood, setNeighborhood] = useState(''); // Bairro
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [addressNumber, setAddressNumber] = useState(''); // Número do endereço
    const [addressComplement, setAddressComplement] = useState(''); // Complemento

    const [cepLoading, setCepLoading] = useState(false);
    const [cepError, setCepError] = useState('');

    // Função para buscar o endereço pelo CEP
    const fetchAddressByCep = async (inputCep) => {
        // Limpa o CEP (mantém apenas dígitos)
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

            if (data.erro) { // ViaCEP retorna { "erro": true } se o CEP não for encontrado
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
                setCepError(''); // Limpa o erro se a busca for bem-sucedida
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
        // Acessa os valores dos estados, não do formData diretamente para os campos de endereço
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

        alert(`
            Pedido Finalizado!
            Total: R$ ${total.toFixed(2)}
            Nome: ${deliveryInfo.name}
            Telefone: ${deliveryInfo.phone}
            Endereço: ${deliveryInfo.address} - ${deliveryInfo.neighborhood}, ${deliveryInfo.city}/${deliveryInfo.state}
            CEP: ${deliveryInfo.cep}
            Método de Pagamento: ${deliveryInfo.paymentMethod}

            (Este é um pedido simulado e não será processado.)
        `);
        localStorage.removeItem('munchdelivery_cart');
        navigate('home');
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
                    onBlur={(e) => fetchAddressByCep(e.target.value)} // Busca ao perder o foco
                    maxLength="9" // 00000-000
                    required
                />
                {cepLoading && <p style={{ color: '#007bff', fontSize: '0.9em' }}>Buscando CEP...</p>}
                {cepError && <p style={{ color: 'red', fontSize: '0.9em' }}>{cepError}</p>}

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
                    readOnly={cepLoading} // Não permite edição enquanto busca o CEP
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
                <button type="submit" disabled={cepLoading}>Finalizar Pedido</button> {/* Desabilita botão enquanto busca CEP */}
            </form>
        </div>
    );
};

export default CheckoutPage;
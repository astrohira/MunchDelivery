// src/data/mockData.js

export const restaurants = [
    {
        id: 'mavi-doces',
        name: 'Mavi Doces',
        description: 'Doces artesanais e sobremesas irresistíveis.',
        image: './images/mavi-doces.png'
    },
    {
        id: 'mcdonalds-br',
        name: 'McDonald\'s',
        description: 'Fast food clássico para todos.',
        image: './images/mcdonalds.png'
    },
    {
        id: 'kfc-br',
        name: 'KFC',
        description: 'Frango frito crocante e saboroso.',
        image: './images/kfc_logo.png'
    },
    {
        id: 'bk-br',
        name: 'Burger King',
        description: 'O Rei dos Hambúrgueres.',
        image: './images/burger-king.png'
    },
    {
        id: 'subway-br',
        name: 'Subway',
        description: 'Sanduíches frescos e saudáveis.',
        image: './images/subway_logo.png'
    },
    {
        id: 'sushi-master',
        name: 'Sushi Master',
        description: 'Autêntica culinária japonesa com peixes frescos.',
        image: './images/sushi_master.jpg'
    }
];

export const menuItems = [
    {
        id: 'big-mac',
        name: 'Big Mac',
        description: 'Pão com gergelim, dois hambúrgueres, alface, queijo, molho especial e picles.',
        price: 25.00,
        image: './images/bigmac.png',
        category: 'hamburgueres',
        restaurantId: 'mcdonalds-br'
    },
    {
        id: 'mcchicken',
        name: 'McChicken',
        description: 'Sanduíche com filé de frango empanado, alface e maionese.',
        price: 20.00,
        image: './images/mcchiken.png',
        category: 'hamburgueres',
        restaurantId: 'mcdonalds-br'
    },
    {
        id: 'mcnuggets-10',
        name: 'McNuggets (10 unidades)',
        description: 'Deliciosos pedaços de frango empanados, perfeitos para compartilhar.',
        price: 18.00,
        image: './images/mcnuggets.png',
        category: 'Acompanhamentos',
        restaurantId: 'mcdonalds-br'
    },
    {
        id: 'coca-cola-500ml',
        name: 'Coca-Cola 500ml',
        description: 'Refrigerante clássico, perfeito para acompanhar seu lanche.',
        price: 7.00,
        image: './images/coca-cola_mc.png',
        category: 'Bebidas',
        restaurantId: 'mcdonalds-br'
    },
    {
        id: 'batata-frita-media',
        name: 'Batata Frita Média',
        description: 'Porção média de batata frita crocante, ideal para um lanche rápido.',
        price: 15.00,
        image: './images/mcfritas.png',
        category: 'Acompanhamentos',
        restaurantId: 'mcdonalds-br'
    },
    {
        id: 'whopper',
        name: 'Whopper',
        description: 'O clássico hambúrguer do Burger King, com carne grelhada, alface, tomate, cebola, picles e maionese.',
        price: 27.00,
        image: './images/whopper.png',
        category: 'hamburgueres',
        restaurantId: 'bk-br'
    },
    {
        id: 'bk-chicken',
        name: 'BK Chicken',
        description: 'Sanduíche de frango grelhado com alface, tomate e maionese.',
        price: 22.00,
        image: './images/bk-chicken.png',
        category: 'hamburgueres',
        restaurantId: 'bk-br'
    },
    {
        id: 'cheddar-duplo',
        name: 'Cheddar Duplo',
        description: 'Dois hambúrgueres com queijo cheddar derretido, cebola e molho especial.',
        price: 30.00,
        image: './images/cheddar_duplo.png',
        category: 'hamburgueres',
        restaurantId: 'bk-br'
    },
    {
        id: 'onion-rings',
        name: 'Onion Rings',
        description: 'Anéis de cebola empanados e crocantes, perfeitos como acompanhamento.',
        price: 12.00,
        image: './images/onion-rings.png',
        category: 'Acompanhamentos',
        restaurantId: 'bk-br'
    },
    {
        id: 'balde-frango',
        name: 'Balde de Frango Frito',
        description: 'Porção de 10 tirinhas de frango sem osso, empanados na receita de sua escolha (crocante ou secreta), serve 3 pessoas.',
        price: 49.90,
        image: './images/balde-frango.png',
        category: 'Frango',
        restaurantId: 'kfc-br'
    },
    {
        id: 'frango_empanado',
        name: 'Frango Empanado',
        description: 'Deliciosos pedaços de frango empanados, crocantes por fora e suculentos por dentro.',
        price: 9.90,
        image: './images/frango-empanado.png',
        category: 'Frango',
        restaurantId: 'kfc-br'
    },
    {
        id: 'combo-fbr',
        name: 'Combo FBR',
        description: 'Balde com 8 pedaços para 3 pessoas + 2 Batatas e Refrigerante 1,5L a sua escolha.',
        price: 59.90,
        image: './images/combo-fbr.png',
        category: 'Frango',
        restaurantId: 'kfc-br'
    },
    {
        id: 'milkshake-baunilha',
        name: 'Milkshake de Baunilha',
        description: 'A combinação perfeita, 500ml do nosso mix sabor baunilha e calda de morango com pedaços de verdade.',
        price: 17.90,
        image: './images/milkshake-baunilha.png',
        category: 'Sobremesas',
        restaurantId: 'kfc-br'
    },
    {
        id: 'batatafrita_grande',
        name: 'Batata Frita Grande',
        description: 'A clássica batata frita, crocante por fora e macia por dentro.',
        price: 9.00,
        image: './images/batata-frita-grande.png',
        category: 'Acompanhamentos',
        restaurantId: 'kfc-br'
    },
    {
        id: 'sushi-salmao',
        name: 'Combinado de Salmão (10 pçs)',
        description: 'Nigiri, sashimi e uramaki de salmão fresco.',
        price: 75.00,
        image: './images/combinado-de-salmao.png',
        category: 'Comida Japonesa',
        restaurantId: 'sushi-master'
    },
    {
        id: 'hot-roll',
        name: 'Hot Roll Philadelfia (8 pçs)',
        description: 'Roll empanado e frito com salmão e cream cheese.',
        price: 40.00,
        image: './images/hot-roll-phil.jpg',
        category: 'Comida Japonesa',
        restaurantId: 'sushi-master'
    },
    {
        id: 'salada-frango',
        name: 'Salada de Frango Grelhado',
        description: 'Mix de folhas verdes, frango grelhado, tomate cereja, pepino e molho agridoce.',
        price: 28.00,
        image: 'https://via.placeholder.com/300x200?text=Salada+Frango',
        category: 'Saladas',
        restaurantId: 'saladas-express'
    },
    {
        id: 'salada-caesar',
        name: 'Salada Caesar',
        description: 'Alface americana, croutons, queijo parmesão e molho caesar.',
        price: 25.00,
        image: 'https://via.placeholder.com/300x200?text=Salada+Caesar',
        category: 'Saladas',
        restaurantId: 'saladas-express'
    },
    {
        id: 'suco-laranja',
        name: 'Suco de Laranja Natural',
        description: 'Suco fresco espremido na hora.',
        price: 12.00,
        image: 'https://via.placeholder.com/300x200?text=Suco+Laranja',
        category: 'Bebidas',
        restaurantId: 'burguer-do-chefe'
    },
    {
        id: 'refrigerante',
        name: 'Refrigerante Lata',
        description: 'Coca-Cola, Guaraná, Soda.',
        price: 8.00,
        image: './images/refrigerante-lata.png',
        category: 'Bebidas',
        restaurantId: 'mcdonalds-br'
    },
    {
        id: 'brownie-gourmet',
        name: 'Brownie Gourmet',
        description: 'Brownie Gourmet bem recheado para alegrar o seu dia.',
        price: 12.00,
        image: './images/brownie-gourmet.png', // Certifique-se de ter esta imagem
        category: 'Sobremesas',
        restaurantId: 'mavi-doces'
    },
    {
        id: 'trufa',
        name: 'Trufa',
        description: 'Trufa deliciosa para presentear sua namorada.',
        price: 6.00,
        image: './images/trufa.png', // Certifique-se de ter esta imagem
        category: 'Sobremesas',
        restaurantId: 'mavi-doces'
    },
    {
        id: 'bombom-morango',
        name: 'Bombom de morango',
        description: 'Bombom com um morango dentro coberto com chocolate.',
        price: 8.00,
        image: './images/bombom-morango.png', // Certifique-se de ter esta imagem
        category: 'Sobremesas',
        restaurantId: 'mavi-doces'
    },
    {
        id: 'bombom-uva',
        name: 'Bombom de uva',
        description: 'Bombom com uma uva verde dentro coberto com chocolate.',
        price: 6.00,
        image: './images/bombom-uva.png', // Certifique-se de ter esta imagem
        category: 'Sobremesas',
        restaurantId: 'mavi-doces'
    },
    {
        id: 'bolo-de-pote',
        name: 'Bolo de pote',
        description: 'Bolo de pote feito com uma massa fofinha e muito bem recheado.',
        price: 12.00,
        image: './images/bolo-de-pote.jpg', // Certifique-se de ter esta imagem
        category: 'Sobremesas',
        restaurantId: 'mavi-doces'
    },
    {
        id: 'sanduiche-de-frango',
        name: 'Sanduíche de Frango',
        description: 'Sanduíche de frango grelhado com alface, tomate e maionese.',
        price: 15.00,
        image: './images/frango.jpg',
        category: 'Sanduíches',
        restaurantId: 'subway-br'
    },
    {
        id: 'sanduiche-de-steak',
        name: 'Sanduíche de Steak',
        description: 'Sanduíche de carne de sol com queijo, alface e molho especial.',
        price: 16.00,
        image: './images/steak.jpg',
        category: 'Sanduíches',
        restaurantId: 'subway-br'
    },
    {
        id: 'sanduiche-vegetariano',
        name: 'Sanduíche Vegetariano',
        description: 'Sanduíche com legumes grelhados, queijo e molho pesto.',
        price: 14.00,
        image: './images/veg.jpg',
        category: 'Sanduíches',
        restaurantId: 'subway-br'
    },
    {
        id: 'cookies',
        name: 'Cookies',
        description: 'Deliciosos cookies de chocolate, perfeitos para acompanhar seu café.',
        price: 10.00,
        image: './images/cookie.jpg',
        category: 'Sobremesas',
        restaurantId: 'subway-br'
    },
    {
        id: 'suco-de-melancia',
        name: 'Suco de Melancia',
        description: 'Suco refrescante de melancia natural.',
        price: 10.00,
        image: './images/suco-melancia.png',
        category: 'Bebidas',
        restaurantId: 'subway-br'
    }
];

export const categoriesData = [
    { id: 'hamburgueres', name: 'Hambúrgueres', image: './images/category-burgers.png' },
    { id: 'pizzas', name: 'Pizzas', image: './images/category-pizza.png' },
    { id: 'comida-japonesa', name: 'Comida Japonesa', image: './images/category-sushi.png' },
    { id: 'sobremesas', name: 'Sobremesas', image: './images/category-dessert.png' },
];

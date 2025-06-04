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
        image: './images/mcchicken.png',
        category: 'hamburgueres',
        restaurantId: 'mcdonalds-br'
    },
    {
        id: 'hamburguer-bacon',
        name: 'Hambúrguer com Bacon',
        description: 'Suculento hambúrguer artesanal, queijo cheddar, bacon crocante e molho especial.',
        price: 32.50,
        image: 'https://via.placeholder.com/300x200?text=Hamburguer+Bacon',
        category: 'Hambúrgueres',
        restaurantId: 'burguer-do-chefe'
    },
    {
        id: 'batata-frita',
        name: 'Batata Frita',
        description: 'Porção grande de batatas fritas crocantes.',
        price: 18.00,
        image: 'https://via.placeholder.com/300x200?text=Batata+Frita',
        category: 'Acompanhamentos',
        restaurantId: 'burguer-do-chefe'
    },
    {
        id: 'pizza-calabresa',
        name: 'Pizza de Calabresa',
        description: 'Deliciosa pizza com molho de tomate, queijo mussarela e calabresa fatiada.',
        price: 45.00,
        image: 'https://via.placeholder.com/300x200?text=Pizza+Calabresa',
        category: 'Pizzas',
        restaurantId: 'pizzaria-saborosa'
    },
    {
        id: 'pizza-frango-catupiry',
        name: 'Pizza de Frango c/ Catupiry',
        description: 'Frango desfiado, catupiry original e azeitonas.',
        price: 50.00,
        image: 'https://via.placeholder.com/300x200?text=Pizza+Frango',
        category: 'Pizzas',
        restaurantId: 'pizzaria-saborosa'
    },
    {
        id: 'sushi-salmao',
        name: 'Combinado de Salmão (10 pçs)',
        description: 'Nigiri, sashimi e uramaki de salmão fresco.',
        price: 75.00,
        image: 'https://via.placeholder.com/300x200?text=Sushi+Salmao',
        category: 'Comida Japonesa',
        restaurantId: 'sushi-master'
    },
    {
        id: 'hot-roll',
        name: 'Hot Roll Philadelfia (8 pçs)',
        description: 'Roll empanado e frito com salmão e cream cheese.',
        price: 40.00,
        image: 'https://via.placeholder.com/300x200?text=Hot+Roll',
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
        image: 'https://via.placeholder.com/300x200?text=Refrigerante',
        category: 'Bebidas',
        restaurantId: 'mcdonalds-br'
    }
];

export const categoriesData = [
    { id: 'hamburgueres', name: 'Hambúrgueres', image: './images/category-burgers.png' },
    { id: 'pizzas', name: 'Pizzas', image: './images/category-pizza.png' },
    { id: 'comida-japonesa', name: 'Comida Japonesa', image: './images/category-sushi.png' },
    { id: 'sobremesas', name: 'Sobremesas', image: './images/category-dessert.png' },
];
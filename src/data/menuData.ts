import { Category, MenuItem, RestaurantDetails } from '../types/menu';

export const restaurantDetails: RestaurantDetails = {
  name: 'Tempero de Fazenda',
  tagline: 'Restaurante e Fornaria',
  rating: 4.4,
  reviewCount: 604,
  priceRange: 'R$ 40 – 60',
  address: 'Av. dos Corais, 284',
  city: 'Praia do Francês, Mal. Deodoro',
  state: 'AL',
  cep: '57160-000',
  cuisine: 'Culinária Mineira e Paulista & Fornaria Artesanal',
  instagram: {
    handle: '@temperodefazenda',
    followers: '2.492',
    posts: 332,
  },
  amenities: [
    { icon: 'Baby', title: 'Cardápio Infantil', desc: 'Opções pensadas com carinho para as crianças' },
    { icon: 'Dog', title: 'Pet Friendly', desc: 'Entrada permitida para cães no ambiente arejado' },
    { icon: 'Wifi', title: 'Wi-Fi Gratuito', desc: 'Conexão de alta velocidade para clientes' },
    { icon: 'UtensilsCrossed', title: 'Fornaria Própria', desc: 'Massa artesanal e forno de alta temperatura' },
  ],
  hours: {
    general: 'Segunda a Terça: 11h00 às 18h00',
    weekend: 'Quarta a Domingo & Feriados: 11h00 às 23h00',
  },
  phoneWhatsApp: '5582999999999', // WhatsApp placeholder or configured
};

export const categories: Category[] = [
  {
    id: 'entradas',
    name: 'Entradas e Petiscos',
    shortName: 'Petiscos',
    iconName: 'Utensils',
    description: 'Torresmo sequinho, casquinhas, caldinhos e porções para compartilhar.',
  },
  {
    id: 'executivos',
    name: 'Pratos Executivos — Sabores Caseiros',
    shortName: 'Executivos',
    iconName: 'ChefHat',
    description: 'Comida de verdade no dia a dia com nomes típicos mineiros.',
  },
  {
    id: 'parmegianas',
    name: 'Parmegianas',
    shortName: 'Parmegianas',
    iconName: 'Flame',
    description: 'Molho artesanal e queijo gratinado. Acompanha arroz (ou espaguete) e purê (ou fritas).',
  },
  {
    id: 'delicias_mineiras',
    name: 'Delícias Mineiras',
    shortName: 'Mineiras',
    iconName: 'Soup',
    description: 'Feijão tropeiro, costelinha, feijoada completa, angu e vaca atolada.',
  },
  {
    id: 'festival_picanha',
    name: 'Festival da Picanha',
    shortName: 'Festival Picanha',
    iconName: 'Beef',
    description: 'Picanha nobre em 10 preparos especiais. Acompanha arroz, farofa e vinagrete.',
  },
  {
    id: 'chapas',
    name: 'Chapas Mineiras',
    shortName: 'Chapas',
    iconName: 'Sparkles',
    description: 'Chapas fumegantes para 2 a 5 pessoas com carnes nobres e mandiocas.',
  },
  {
    id: 'sabores_nobres',
    name: 'Sabores Nobres',
    shortName: 'Sabores Nobres',
    iconName: 'Crown',
    description: 'Medalhões de filé mignon, costelinha barbecue e cortes especiais.',
  },
  {
    id: 'peixes_frutos_mar',
    name: 'Peixes e Frutos do Mar',
    shortName: 'Peixes & Frutos',
    iconName: 'Fish',
    description: 'Bacalhau, moquecas aromáticas, chiclete de camarão e tilápia fresca.',
  },
  {
    id: 'massas_risotos',
    name: 'Massas e Risotos',
    shortName: 'Massas & Risotos',
    iconName: 'Wheat',
    description: 'Massas artesanais e risotos com receitas da casa e toques ítalo-mineiros.',
  },
  {
    id: 'pizzas_tradicionais',
    name: 'Pizzas Tradicionais (Fornaria)',
    shortName: 'Pizzas Trad.',
    iconName: 'Pizza',
    description: 'Massa artesanal assada na fornaria, queijo derretido e molho caseiro.',
  },
  {
    id: 'pizzas_especiais',
    name: 'Pizzas Especiais (Fornaria)',
    shortName: 'Pizzas Espec.',
    iconName: 'Flame',
    description: 'Criações exclusivas da chef com camarão, queijo coalho e catupiry.',
  },
  {
    id: 'saladas',
    name: 'Saladas Frescas',
    shortName: 'Saladas',
    iconName: 'Salad',
    description: 'Folhas e legumes frescos selecionados da horta para a mesa.',
  },
  {
    id: 'porcoes_extras',
    name: 'Porções Extras',
    shortName: 'Guarnições Extras',
    iconName: 'PlusCircle',
    description: 'Guarnições e proteínas adicionais para complementar sua refeição.',
  },
  {
    id: 'sobremesas',
    name: 'Sobremesas',
    shortName: 'Sobremesas',
    iconName: 'Cake',
    description: 'Tradição doce da roça: pudim aveludado e o clássico Romeu e Julieta.',
  },
  {
    id: 'bebidas',
    name: 'Bebidas, Doses e Drinks',
    shortName: 'Bebidas & Drinks',
    iconName: 'GlassWater',
    description: 'Sucos naturais na jarra, refrigerantes, cervejas trincando, drinks e cafés.',
  },
];

export const menuItems: MenuItem[] = [
  // 1. ENTRADAS E PETISCOS
  {
    id: 'ent-torresmo',
    name: 'Porção de Torresmo',
    description: 'Torresmo à moda mineira, frito na hora, crocante por fora e macio por dentro.',
    categoryId: 'entradas',
    price: 29.0,
    popular: true,
    badge: 'Mais Pedido',
    image: '/src/assets/images/delicias_mineiras_prato_1792014341686.jpg',
  },
  {
    id: 'ent-casquinha-camarao',
    name: 'Casquinha de Camarão (200g)',
    description: 'Casquinha cremosa recheada com camarões frescos temperados e gratinados.',
    categoryId: 'entradas',
    price: 45.0,
  },
  {
    id: 'ent-bolinho-mandioca',
    name: 'Bolinho de Mandioca com Carne Seca',
    description: '6 unidades (300g) de massa de mandioca cremosa recheada com carne seca desfiada temperada.',
    categoryId: 'entradas',
    price: 26.0,
    popular: true,
  },
  {
    id: 'ent-bolinho-bacalhau',
    name: 'Bolinho de Bacalhau',
    description: '6 unidades (300g) preparados com autêntico bacalhau desfiado e batatas selecionadas.',
    categoryId: 'entradas',
    price: 25.0,
  },
  {
    id: 'ent-isca-frango',
    name: 'Porção de Isca de Frango com Batata Frita à Moda Caipira',
    description: '700g de iscas de frango empanadas super crocantes acompanhadas de batata frita sequinha.',
    categoryId: 'entradas',
    price: 65.0,
    serves: '2 a 3 pessoas',
  },
  {
    id: 'ent-coxinhas',
    name: 'Porção de Coxinhas de Frango Fritas',
    description: '700g de coxinhas de asa de frango douradas e crocantes.',
    categoryId: 'entradas',
    price: 45.0,
    serves: '2 a 3 pessoas',
  },
  {
    id: 'ent-caldinho-feijao',
    name: 'Caldinho de Feijão (250 ml)',
    description: 'Caldinho de feijão aveludado e temperado na manteiga de garrafa e alho.',
    categoryId: 'entradas',
    price: 22.0,
  },
  {
    id: 'ent-caldinho-peixe',
    name: 'Caldinho de Peixe (250 ml)',
    description: 'Caldinho perfumado com posta de peixe fresco, coentro e ervas.',
    categoryId: 'entradas',
    price: 24.0,
  },
  {
    id: 'ent-caldinho-camarao',
    name: 'Caldinho de Camarão (250 ml)',
    description: 'Caldinho cremoso e rico feito com camarões salteados e especiarias.',
    categoryId: 'entradas',
    price: 24.0,
  },
  {
    id: 'ent-coracao',
    name: 'Porção de Coração de Galinha com Batata Frita',
    description: '600g de coração de galinha grelhado no ponto certo com batata frita.',
    categoryId: 'entradas',
    price: 69.0,
    serves: '2 pessoas',
  },
  {
    id: 'ent-linguica-calabresa',
    name: 'Porção de Linguiça Calabresa Acebolada com Batata Frita',
    description: '600g de linguiça calabresa fatiada acebolada na chapa com batata frita.',
    categoryId: 'entradas',
    price: 45.0,
    serves: '2 pessoas',
  },
  {
    id: 'ent-camarao-crocante',
    name: 'Camarão Empanado Crocante com Molho Tártaro (300g)',
    description: 'Camarões selecionados empanados na farinha crocante acompanhados de molho tártaro especial.',
    categoryId: 'entradas',
    price: 88.0,
    popular: true,
  },
  {
    id: 'ent-camarao-alho-oleo',
    name: 'Camarão Alho e Óleo (300g)',
    description: 'Camarões inteiros salteados no azeite com lâminas douradas de alho e cheiro verde.',
    categoryId: 'entradas',
    price: 85.0,
  },
  {
    id: 'ent-isca-tilapia',
    name: 'Porção de Isca de Tilápia Empanada com Batata Frita',
    description: '700g de iscas de tilápia fresca empanadas e batatas fritas crocantes.',
    categoryId: 'entradas',
    price: 69.0,
    serves: '2 a 3 pessoas',
  },
  {
    id: 'ent-mandioca-frita',
    name: 'Mandioca Frita (300g)',
    description: 'Mandioca macia por dentro e dourada por fora.',
    categoryId: 'entradas',
    price: 20.0,
  },
  {
    id: 'ent-batata-frita',
    name: 'Batata Frita (300g)',
    description: 'Batata frita tradicional crocante e sequinha.',
    categoryId: 'entradas',
    price: 20.0,
  },

  // 2. PRATOS EXECUTIVOS
  {
    id: 'exec-cadinho',
    name: '"Cadinho" (Vegetariano)',
    description: 'Arroz branco, feijão de caldo, farofa crocante, salada fresca e omelete fofinho.',
    categoryId: 'executivos',
    price: 27.0,
    badge: 'Vegetariano',
    options: [
      {
        title: 'Opção de Feijão',
        type: 'single',
        choices: [
          { name: 'Feijão de Caldo Tradicional' },
          { name: 'Feijão Tropeiro Mineiro' },
        ],
      },
    ],
  },
  {
    id: 'exec-proncovo',
    name: '"Proncovô"',
    description: 'Arroz, feijão tropeiro mineiro, salada e sobrecoxa de frango assada e suculenta.',
    categoryId: 'executivos',
    price: 27.0,
    popular: true,
    options: [
      {
        title: 'Acompanhamento do Feijão',
        type: 'single',
        choices: [
          { name: 'Feijão Tropeiro Mineiro (Padrão)' },
          { name: 'Substituir por: Feijão de Caldo + Farofa + Ovo Frito' },
        ],
      },
    ],
  },
  {
    id: 'exec-oncoto',
    name: '"Oncotô"',
    description: 'Arroz, feijão tropeiro mineiro, salada e filé de frango grelhado.',
    categoryId: 'executivos',
    price: 27.0,
    options: [
      {
        title: 'Acompanhamento do Feijão',
        type: 'single',
        choices: [
          { name: 'Feijão Tropeiro Mineiro (Padrão)' },
          { name: 'Substituir por: Feijão de Caldo + Farofa + Ovo Frito' },
        ],
      },
    ],
  },
  {
    id: 'exec-uaiso',
    name: '"Uai Sô"',
    description: 'Arroz, feijão tropeiro mineiro, salada e linguiça calabresa acebolada.',
    categoryId: 'executivos',
    price: 27.0,
    options: [
      {
        title: 'Acompanhamento do Feijão',
        type: 'single',
        choices: [
          { name: 'Feijão Tropeiro Mineiro (Padrão)' },
          { name: 'Substituir por: Feijão de Caldo + Farofa + Ovo Frito' },
        ],
      },
    ],
  },
  {
    id: 'exec-dediprosa',
    name: '"Dediprosa"',
    description: 'Arroz, feijão tropeiro mineiro, salada e pernil suíno assado desfiando.',
    categoryId: 'executivos',
    price: 27.0,
    options: [
      {
        title: 'Acompanhamento do Feijão',
        type: 'single',
        choices: [
          { name: 'Feijão Tropeiro Mineiro (Padrão)' },
          { name: 'Substituir por: Feijão de Caldo + Farofa + Ovo Frito' },
        ],
      },
    ],
  },
  {
    id: 'exec-cadique',
    name: '"Cadiquê"',
    description: 'Arroz, batata frita e strogonoff cremoso de frango.',
    categoryId: 'executivos',
    price: 27.0,
  },
  {
    id: 'exec-modiviola',
    name: '"Módiviola"',
    description: 'Arroz, batata frita e strogonoff tradicional de carne.',
    categoryId: 'executivos',
    price: 30.0,
    popular: true,
  },
  {
    id: 'exec-trembao',
    name: '"Trembão"',
    description: 'Arroz, purê de batata caseiro e filé de frango à parmegiana com molho artesanal.',
    categoryId: 'executivos',
    price: 36.0,
    popular: true,
  },
  {
    id: 'exec-marzaoso',
    name: '"Marzão Sô"',
    description: 'Arroz, feijão carioca, purê de batata, salada fresca e posta de tilápia empanada e frita.',
    categoryId: 'executivos',
    price: 38.0,
  },
  {
    id: 'exec-doncee',
    name: '"Doncê É"',
    description: 'Arroz, feijão tropeiro mineiro, salada e bife de contrafilé grelhado no ponto.',
    categoryId: 'executivos',
    price: 42.0,
    options: [
      {
        title: 'Acompanhamento do Feijão',
        type: 'single',
        choices: [
          { name: 'Feijão Tropeiro Mineiro (Padrão)' },
          { name: 'Substituir por: Feijão de Caldo + Farofa + Ovo Frito' },
        ],
      },
    ],
  },

  // 3. PARMEGIANAS
  {
    id: 'parm-frango',
    name: 'Filé de Peito de Frango à Parmegiana',
    description: 'Empanado artesanal crocante, coberto com molho de tomate caseiro e queijo gratinado.',
    categoryId: 'parmegianas',
    portions: [
      { id: 'ind', name: 'Individual', price: 36.0 },
      { id: 'duplo', name: 'Para 2 Pessoas', price: 71.0 },
    ],
    options: [
      {
        title: 'Primeiro Acompanhamento',
        type: 'single',
        choices: [{ name: 'Arroz Branco' }, { name: 'Espaguete Alho e Óleo' }],
      },
      {
        title: 'Segundo Acompanhamento',
        type: 'single',
        choices: [{ name: 'Purê de Batata' }, { name: 'Batata Frita' }],
      },
    ],
    popular: true,
  },
  {
    id: 'parm-contrafile',
    name: 'Contrafilé à Parmegiana',
    description: 'Bife de contrafilé suculento empanado e gratinado com queijo e molho da casa.',
    categoryId: 'parmegianas',
    portions: [
      { id: 'ind', name: 'Individual', price: 57.0 },
      { id: 'duplo', name: 'Para 2 Pessoas', price: 108.0 },
    ],
    options: [
      {
        title: 'Primeiro Acompanhamento',
        type: 'single',
        choices: [{ name: 'Arroz Branco' }, { name: 'Espaguete Alho e Óleo' }],
      },
      {
        title: 'Segundo Acompanhamento',
        type: 'single',
        choices: [{ name: 'Purê de Batata' }, { name: 'Batata Frita' }],
      },
    ],
  },
  {
    id: 'parm-mignon',
    name: 'Filé Mignon à Parmegiana',
    description: 'Corte nobre de filé mignon super macio empanado com casquinha crocante e queijo derretido.',
    categoryId: 'parmegianas',
    portions: [
      { id: 'ind', name: 'Individual', price: 72.0 },
      { id: 'duplo', name: 'Para 2 Pessoas', price: 136.0 },
    ],
    options: [
      {
        title: 'Primeiro Acompanhamento',
        type: 'single',
        choices: [{ name: 'Arroz Branco' }, { name: 'Espaguete Alho e Óleo' }],
      },
      {
        title: 'Segundo Acompanhamento',
        type: 'single',
        choices: [{ name: 'Purê de Batata' }, { name: 'Batata Frita' }],
      },
    ],
    badge: 'Corte Nobre',
  },
  {
    id: 'parm-mineiro',
    name: 'Parmegiana Mineiro',
    description: 'Pernil suíno empanado com carinho, molho da casa, coberto com queijo e pedaços de bacon crocante.',
    categoryId: 'parmegianas',
    portions: [
      { id: 'ind', name: 'Individual', price: 36.0 },
      { id: 'duplo', name: 'Para 2 Pessoas', price: 71.0 },
    ],
    options: [
      {
        title: 'Primeiro Acompanhamento',
        type: 'single',
        choices: [{ name: 'Arroz Branco' }, { name: 'Espaguete Alho e Óleo' }],
      },
      {
        title: 'Segundo Acompanhamento',
        type: 'single',
        choices: [{ name: 'Purê de Batata' }, { name: 'Batata Frita' }],
      },
    ],
    popular: true,
    badge: 'Especial da Roça',
  },
  {
    id: 'parm-tilapia',
    name: 'Parmegiana de Tilápia',
    description: 'Filé de tilápia fresca empanada, molho de tomate suave e queijo gratinado.',
    categoryId: 'parmegianas',
    portions: [
      { id: 'ind', name: 'Individual', price: 54.0 },
      { id: 'duplo', name: 'Para 2 Pessoas', price: 102.0 },
    ],
    options: [
      {
        title: 'Primeiro Acompanhamento',
        type: 'single',
        choices: [{ name: 'Arroz Branco' }, { name: 'Espaguete Alho e Óleo' }],
      },
      {
        title: 'Segundo Acompanhamento',
        type: 'single',
        choices: [{ name: 'Purê de Batata' }, { name: 'Batata Frita' }],
      },
    ],
  },
  {
    id: 'parm-camarao',
    name: 'Parmegiana de Camarão',
    description: 'Camarões graúdos empanados com queijo abundante e molho de tomate artesanal.',
    categoryId: 'parmegianas',
    portions: [
      { id: 'ind', name: 'Individual', price: 73.0 },
      { id: 'duplo', name: 'Para 2 Pessoas', price: 139.0 },
    ],
    options: [
      {
        title: 'Primeiro Acompanhamento',
        type: 'single',
        choices: [{ name: 'Arroz Branco' }, { name: 'Espaguete Alho e Óleo' }],
      },
      {
        title: 'Segundo Acompanhamento',
        type: 'single',
        choices: [{ name: 'Purê de Batata' }, { name: 'Batata Frita' }],
      },
    ],
  },

  // 4. DELÍCIAS MINEIRAS
  {
    id: 'min-caipira',
    name: 'Caipira',
    description: 'Arroz branco, feijão tropeiro mineiro, costelinha suína dourada e mandioca frita crocante.',
    categoryId: 'delicias_mineiras',
    portions: [
      { id: 'ind', name: 'Individual', price: 38.0 },
      { id: 'duplo', name: 'Para 2 Pessoas', price: 71.0 },
    ],
    popular: true,
    image: '/src/assets/images/delicias_mineiras_prato_1792014341686.jpg',
  },
  {
    id: 'min-carijo',
    name: 'Carijó',
    description: 'Arroz branco, feijão tropeiro mineiro, filé de peito de frango grelhado e mandioca frita.',
    categoryId: 'delicias_mineiras',
    portions: [
      { id: 'ind', name: 'Individual', price: 38.0 },
      { id: 'duplo', name: 'Para 2 Pessoas', price: 71.0 },
    ],
  },
  {
    id: 'min-norte-minas',
    name: 'Norte de Minas',
    description: 'Arroz branco, feijão tropeiro, carne de sol artesanal (contrafilé) e mandioca frita.',
    categoryId: 'delicias_mineiras',
    portions: [
      { id: 'ind', name: 'Individual', price: 51.0 },
      { id: 'duplo', name: 'Para 2 Pessoas', price: 97.0 },
    ],
    popular: true,
  },
  {
    id: 'min-picanha-chapa',
    name: 'Picanha da Chapa (com Tropeiro)',
    description: 'Arroz branco, feijão tropeiro, vinagrete fresco e mandioca cozida na manteiga de garrafa.',
    categoryId: 'delicias_mineiras',
    portions: [
      { id: 'duplo', name: 'Para 2 Pessoas (400g de proteína)', price: 130.0 },
      { id: 'quad', name: 'Para 4 Pessoas (800g de proteína)', price: 250.0 },
    ],
    image: '/src/assets/images/picanha_chapa_mineira_1792014341119.jpg',
  },
  {
    id: 'min-feijoada',
    name: 'Feijoada Completa da Fazenda',
    description: 'Feijão preto com linguiça calabresa defumada, carne seca, bacon, costelinha suína. Acompanha arroz, farofa, vinagrete, couve refogada, laranja e torresmo.',
    categoryId: 'delicias_mineiras',
    portions: [
      { id: 'ind', name: 'Individual', price: 52.0 },
      { id: 'duplo', name: 'Para 2 Pessoas', price: 98.0 },
    ],
    popular: true,
    badge: 'Tradição',
  },
  {
    id: 'min-sopa-casa',
    name: 'Sopa de Casa',
    description: 'Arroz branco, feijão carioca, bife de contrafilé bovino, ovo frito com gema mole, farofa e batata sauté.',
    categoryId: 'delicias_mineiras',
    portions: [
      { id: 'ind', name: 'Individual', price: 43.0 },
      { id: 'duplo', name: 'Para 2 Pessoas', price: 79.0 },
    ],
  },
  {
    id: 'min-chico-mineiro',
    name: 'Chico Mineiro',
    description: 'Arroz branco, feijão carioca, angu cremoso e frango caipira com quiabo refogado.',
    categoryId: 'delicias_mineiras',
    portions: [
      { id: 'ind', name: 'Individual', price: 38.0 },
      { id: 'duplo', name: 'Para 2 Pessoas', price: 71.0 },
    ],
    popular: true,
  },
  {
    id: 'min-mineirao',
    name: 'Mineirão',
    description: 'Arroz branco, tutu de feijão aromático, filé suíno grelhado, couve refogada, farofa e mandioca frita.',
    categoryId: 'delicias_mineiras',
    portions: [
      { id: 'ind', name: 'Individual', price: 38.0 },
      { id: 'duplo', name: 'Para 2 Pessoas', price: 71.0 },
    ],
  },
  {
    id: 'min-vaca-atolada',
    name: 'Vaca Atolada',
    description: 'Arroz branco, cupim bovino premium cozido lentamente até desmanchar com mandioca, farofa e couve refogada.',
    categoryId: 'delicias_mineiras',
    portions: [
      { id: 'ind', name: 'Individual', price: 38.0 },
      { id: 'duplo', name: 'Para 2 Pessoas', price: 71.0 },
    ],
    popular: true,
  },

  // 5. FESTIVAL DA PICANHA
  {
    id: 'fest-picanha',
    name: 'Festival da Picanha — Escolha o Preparo',
    description: 'Picanha fatiada macia e suculenta servida na chapa. Todos os preparos acompanham Arroz branco, Farofa da casa e Vinagrete.',
    categoryId: 'festival_picanha',
    portions: [
      { id: 'p2', name: 'Para 2 Pessoas (400g de picanha)', price: 99.0 },
      { id: 'p4', name: 'Para 4 Pessoas (800g de picanha)', price: 199.0 },
    ],
    options: [
      {
        title: 'Estilo de Preparo da Picanha',
        type: 'single',
        choices: [
          { name: 'Picanha com mandioca cozida na manteiga de garrafa e alho frito' },
          { name: 'Picanha acebolada e queijo coalho' },
          { name: 'Picanha com molho chimichurri e batatas rústicas' },
          { name: 'Picanha flambada na cachaça com manteiga de garrafa e ervas' },
          { name: 'Picanha com legumes salteados' },
          { name: 'Picanha ao molho cremoso de queijos' },
          { name: 'Picanha ao molho de mostarda agridoce' },
          { name: 'Picanha com champignon e ervas finas' },
          { name: 'Picanha com páprica defumada' },
          { name: 'Picanha no molho de alho aromático' },
        ],
      },
    ],
    popular: true,
    badge: 'Festival Especial',
    image: '/src/assets/images/picanha_chapa_mineira_1792014341119.jpg',
  },

  // 6. CHAPAS MINEIRAS
  {
    id: 'chapa-grande-mineira',
    name: 'A Grande Mineira',
    description: 'Carne de Sol, Contrafilé, Filé de Frango, Pernil Suíno, Linguiça Calabresa, Mandioca Frita e Mandioca Cozida. Acompanha arroz branco e farofa da casa.',
    categoryId: 'chapas',
    portions: [
      { id: '3p', name: 'Para 3 Pessoas (800g de carnes)', price: 94.0 },
      { id: '5p', name: 'Para 4 a 5 Pessoas (1,6kg de carnes)', price: 170.0 },
    ],
    popular: true,
    badge: 'Completa',
  },
  {
    id: 'chapa-sul-minas',
    name: 'Chapa Sul de Minas',
    description: 'Contrafilé, Pernil Suíno, Coração de Frango, Mandioca Cozida ou Frita, Batata Frita. Acompanha arroz branco e farofa.',
    categoryId: 'chapas',
    portions: [
      { id: '2p', name: 'Para 2 Pessoas (600g)', price: 89.0 },
      { id: '4p', name: 'Para 4 Pessoas (1,2kg)', price: 169.0 },
    ],
    options: [
      {
        title: 'Escolha da Mandioca',
        type: 'single',
        choices: [{ name: 'Mandioca Frita' }, { name: 'Mandioca Cozida na Manteiga de Garrafa' }],
      },
    ],
  },
  {
    id: 'chapa-noroeste-minas',
    name: 'Chapa Noroeste de Minas',
    description: 'Carne de Sol de Contrafilé, Filé de Frango, Queijo Coalho grelhado, Mandioca (Cozida ou Frita), Batata Frita à Moda Caipira. Acompanha arroz e farofa.',
    categoryId: 'chapas',
    portions: [
      { id: '2p', name: 'Para 2 Pessoas (600g)', price: 93.0 },
      { id: '4p', name: 'Para 4 Pessoas (1,2kg)', price: 177.0 },
    ],
    options: [
      {
        title: 'Escolha da Mandioca',
        type: 'single',
        choices: [{ name: 'Mandioca Frita' }, { name: 'Mandioca Cozida na Manteiga de Garrafa' }],
      },
    ],
    popular: true,
  },
  {
    id: 'chapa-mignon-fritas',
    name: 'Filé Mignon com Batata Frita na Chapa',
    description: 'Tiras de filé mignon grelhadas no ponto com batatas fritas douradas. Acompanha arroz e farofa.',
    categoryId: 'chapas',
    price: 104.0,
    serves: '2 pessoas (400g)',
  },
  {
    id: 'chapa-carne-sol-mandioca',
    name: 'Carne de Sol de Contrafilé com Mandioca Frita',
    description: 'Carne de sol curada na casa, fatiada e grelhada com mandioca frita crocante. Acompanha arroz e farofa.',
    categoryId: 'chapas',
    price: 75.0,
    serves: '2 pessoas (400g)',
  },

  // 7. SABORES NOBRES
  {
    id: 'nobre-costelinha-bbq',
    name: 'Costelinha Suína ao Molho Barbecue',
    description: 'Costelinha suína macia coberta com molho barbecue, arroz branco, milho salteado na manteiga de garrafa e batata frita à moda caipira.',
    categoryId: 'sabores_nobres',
    portions: [
      { id: 'ind', name: 'Individual', price: 40.0 },
      { id: 'duplo', name: 'Para 2 Pessoas', price: 75.0 },
    ],
    popular: true,
  },
  {
    id: 'nobre-mignon-grelhado',
    name: 'Medalhão de Filé Mignon Grelhado',
    description: 'Medalhão grelhado no ponto desejado, arroz branco, farofa crocante e batata rústica salteada no azeite com ervas.',
    categoryId: 'sabores_nobres',
    portions: [
      { id: 'ind', name: 'Individual', price: 58.0 },
      { id: 'duplo', name: 'Para 2 Pessoas', price: 110.0 },
    ],
  },
  {
    id: 'nobre-mignon-gorgonzola',
    name: 'Medalhão de Filé Mignon ao Molho de Queijo Gorgonzola',
    description: 'Medalhão de filé mignon macio regado com molho encorpado de gorgonzola, arroz branco e batata rústica salteada com ervas.',
    categoryId: 'sabores_nobres',
    portions: [
      { id: 'ind', name: 'Individual', price: 65.0 },
      { id: 'duplo', name: 'Para 2 Pessoas', price: 123.0 },
    ],
    popular: true,
  },
  {
    id: 'nobre-mignon-madeira',
    name: 'Medalhão de Filé Mignon ao Molho Madeira da Casa',
    description: 'Medalhão de filé mignon coberto com o autêntico molho madeira feito na casa, arroz e batata rústica salteada no azeite.',
    categoryId: 'sabores_nobres',
    portions: [
      { id: 'ind', name: 'Individual', price: 65.0 },
      { id: 'duplo', name: 'Para 2 Pessoas', price: 123.0 },
    ],
  },
  {
    id: 'nobre-frango-gorgonzola',
    name: 'Filé de Peito de Frango ao Molho Gorgonzola',
    description: 'Filé de frango grelhado ao molho de queijo gorgonzola, acompanhado de arroz e batata rústica salteada.',
    categoryId: 'sabores_nobres',
    portions: [
      { id: 'ind', name: 'Individual', price: 38.0 },
      { id: 'duplo', name: 'Para 2 Pessoas', price: 71.0 },
    ],
  },

  // 8. PEIXES E FRUTOS DO MAR
  {
    id: 'peixe-bacalhau-portuguesa',
    name: 'Bacalhau à Portuguesa',
    description: 'Bacalhau nobre desfiado com cebola, pimentões coloridos, ovo cozido, batata sauté e arroz branco.',
    categoryId: 'peixes_frutos_mar',
    portions: [
      { id: 'ind', name: 'Individual', price: 38.0 },
      { id: 'duplo', name: 'Para 2 Pessoas', price: 71.0 },
    ],
  },
  {
    id: 'peixe-bacalhau-natas',
    name: 'Bacalhau com Natas',
    description: 'Bacalhau desfiado envolvido em creme de queijo cremoso gratinado, batata sauté e arroz branco.',
    categoryId: 'peixes_frutos_mar',
    portions: [
      { id: 'ind', name: 'Individual', price: 40.0 },
      { id: 'duplo', name: 'Para 2 Pessoas', price: 73.0 },
    ],
    popular: true,
  },
  {
    id: 'peixe-moqueca-peixe',
    name: 'Moqueca de Peixe',
    description: 'Posta de peixe fresca cozida no dendê leve, leite de coco e pimentões. Acompanha arroz, pirão e farofa.',
    categoryId: 'peixes_frutos_mar',
    portions: [
      { id: 'ind', name: 'Individual', price: 50.0 },
      { id: 'duplo', name: 'Para 2 Pessoas', price: 94.0 },
    ],
  },
  {
    id: 'peixe-moqueca-mista',
    name: 'Moqueca de Peixe com Camarão',
    description: 'Posta de peixe suculenta combinada com camarões graúdos, pirão aromático, arroz e farofa.',
    categoryId: 'peixes_frutos_mar',
    portions: [
      { id: 'ind', name: 'Individual', price: 73.0 },
      { id: 'duplo', name: 'Para 2 Pessoas', price: 138.0 },
    ],
    popular: true,
  },
  {
    id: 'peixe-moqueca-camarao',
    name: 'Moqueca de Camarão',
    description: 'Camarões selecionados na moqueca perfumada com leite de coco e azeite de dendê. Acompanha arroz, pirão e farofa.',
    categoryId: 'peixes_frutos_mar',
    portions: [
      { id: 'ind', name: 'Individual', price: 69.0 },
      { id: 'duplo', name: 'Para 2 Pessoas', price: 130.0 },
    ],
  },
  {
    id: 'peixe-chiclete-camarao',
    name: 'Chiclete de Camarão',
    description: 'Camarões generosos mergulhados em fondue cremoso de queijos que puxa como chiclete, arroz branco e batata sauté.',
    categoryId: 'peixes_frutos_mar',
    portions: [
      { id: 'ind', name: 'Individual (200g de camarão)', price: 78.0 },
      { id: 'duplo', name: 'Para 2 Pessoas (400g de camarão)', price: 157.0 },
    ],
    popular: true,
    badge: 'Sensação do Litoral',
  },
  {
    id: 'peixe-empanado-frito',
    name: 'Peixe Empanado Frito',
    description: 'Posta de peixe empanado frito sequinho, arroz branco, pirão, vinagrete fresco e mandioca frita.',
    categoryId: 'peixes_frutos_mar',
    portions: [
      { id: 'ind', name: 'Individual', price: 38.0 },
      { id: 'duplo', name: 'Para 2 Pessoas', price: 71.0 },
    ],
  },
  {
    id: 'peixe-tilapia-grelhada',
    name: 'Tilápia Grelhada',
    description: 'Filé de tilápia grelhado com azeite de ervas, vinagrete fresco, purê de batata cremoso e arroz branco.',
    categoryId: 'peixes_frutos_mar',
    portions: [
      { id: 'ind', name: 'Individual', price: 45.0 },
      { id: 'duplo', name: 'Para 2 Pessoas', price: 84.0 },
    ],
  },

  // 9. MASSAS E RISOTOS
  {
    id: 'massa-camarao',
    name: 'Macarrão ao Molho com Camarão',
    description: 'Massa com camarões salteados no azeite e envoltos com o exclusivo molho cremoso da casa.',
    categoryId: 'massas_risotos',
    portions: [
      { id: 'ind', name: 'Individual', price: 48.0 },
      { id: 'duplo', name: 'Para 2 Pessoas', price: 89.0 },
    ],
    options: [
      {
        title: 'Tipo de Massa',
        type: 'single',
        choices: [{ name: 'Ninho' }, { name: 'Espaguete' }],
      },
    ],
    popular: true,
  },
  {
    id: 'massa-sugo',
    name: 'Macarrão ao Sugo',
    description: 'Espaguete tradicional coberto com molho de tomate fresco da casa e manjericão.',
    categoryId: 'massas_risotos',
    portions: [
      { id: 'ind', name: 'Individual', price: 22.0 },
      { id: 'duplo', name: 'Para 2 Pessoas', price: 40.0 },
    ],
  },
  {
    id: 'massa-italo-mineiro',
    name: 'Macarrão Ítalo-Mineiro',
    description: 'Massa com calabresa fatiada, bacon, tomate seco e folhas de ora-pro-nóbis refogados no azeite virgem.',
    categoryId: 'massas_risotos',
    portions: [
      { id: 'ind', name: 'Individual', price: 26.0 },
      { id: 'duplo', name: 'Para 2 Pessoas', price: 49.0 },
    ],
    options: [
      {
        title: 'Tipo de Massa',
        type: 'single',
        choices: [{ name: 'Ninho' }, { name: 'Espaguete' }],
      },
    ],
    badge: 'Autoral',
  },
  {
    id: 'massa-bolonhesa',
    name: 'Macarrão à Bolonhesa',
    description: 'Massa coberta com molho farto de carne moída bem temperada da casa.',
    categoryId: 'massas_risotos',
    portions: [
      { id: 'ind', name: 'Individual', price: 26.0 },
      { id: 'duplo', name: 'Para 2 Pessoas', price: 49.0 },
    ],
    options: [
      {
        title: 'Tipo de Massa',
        type: 'single',
        choices: [{ name: 'Ninho' }, { name: 'Espaguete' }],
      },
    ],
  },
  {
    id: 'risoto-camarao',
    name: 'Risoto de Camarão',
    description: 'Arroz arbóreo cremoso no ponto perfeito com camarões suculentos e queijo parmesão ralado na hora.',
    categoryId: 'massas_risotos',
    portions: [
      { id: 'ind', name: 'Individual', price: 38.0 },
      { id: 'duplo', name: 'Para 2 Pessoas', price: 71.0 },
    ],
    popular: true,
  },
  {
    id: 'risoto-caipira',
    name: 'Risoto Caipira',
    description: 'Calabresa defumada, bacon crocante e costelinha suína desfiada em risoto aveludado da roça.',
    categoryId: 'massas_risotos',
    portions: [
      { id: 'ind', name: 'Individual', price: 38.0 },
      { id: 'duplo', name: 'Para 2 Pessoas', price: 71.0 },
    ],
  },
  {
    id: 'risoto-sertanejo',
    name: 'Risoto Sertanejo',
    description: 'Carne seca desfiada, bacon, pimenta de cheiro, coentro fresco, refogado na manteiga de garrafa e queijo coalho tostado. Acompanha contrafilé.',
    categoryId: 'massas_risotos',
    portions: [
      { id: 'ind', name: 'Individual', price: 50.0 },
      { id: 'duplo', name: 'Para 2 Pessoas', price: 94.0 },
    ],
    popular: true,
    badge: 'Imperdível',
  },

  // 10. PIZZAS TRADICIONAIS (FORNARIA)
  {
    id: 'pizza-mussarela',
    name: 'Pizza de Mussarela',
    description: 'Mussarela de primeira, molho de tomate caseiro e orégano.',
    categoryId: 'pizzas_tradicionais',
    portions: [
      { id: 'grande', name: 'Grande (8 pedaços)', price: 48.0 },
      { id: 'extra_grande', name: 'Extra Grande (12 pedaços)', price: 55.0 },
    ],
    options: [
      {
        title: 'Borda Recheada Opcional',
        type: 'single',
        choices: [
          { name: 'Sem borda recheada' },
          { name: 'Borda de Catupiry (+ R$ 5,00)', extraPrice: 5.0 },
          { name: 'Borda de Cheddar (+ R$ 5,00)', extraPrice: 5.0 },
        ],
      },
    ],
    image: '/src/assets/images/pizza_fornaria_artesanal_1792014342193.jpg',
  },
  {
    id: 'pizza-alho',
    name: 'Pizza de Alho',
    description: 'Alho frito dourado, mussarela derretida e molho de tomate da casa.',
    categoryId: 'pizzas_tradicionais',
    portions: [
      { id: 'grande', name: 'Grande (8 pedaços)', price: 48.0 },
      { id: 'extra_grande', name: 'Extra Grande (12 pedaços)', price: 55.0 },
    ],
    options: [
      {
        title: 'Borda Recheada Opcional',
        type: 'single',
        choices: [
          { name: 'Sem borda recheada' },
          { name: 'Borda de Catupiry (+ R$ 5,00)', extraPrice: 5.0 },
          { name: 'Borda de Cheddar (+ R$ 5,00)', extraPrice: 5.0 },
        ],
      },
    ],
  },
  {
    id: 'pizza-calabresa',
    name: 'Pizza de Calabresa',
    description: 'Calabresa defumada fatiada fina, mussarela e molho de tomate caseiro.',
    categoryId: 'pizzas_tradicionais',
    portions: [
      { id: 'grande', name: 'Grande (8 pedaços)', price: 48.0 },
      { id: 'extra_grande', name: 'Extra Grande (12 pedaços)', price: 55.0 },
    ],
    options: [
      {
        title: 'Borda Recheada Opcional',
        type: 'single',
        choices: [
          { name: 'Sem borda recheada' },
          { name: 'Borda de Catupiry (+ R$ 5,00)', extraPrice: 5.0 },
          { name: 'Borda de Cheddar (+ R$ 5,00)', extraPrice: 5.0 },
        ],
      },
    ],
    popular: true,
  },
  {
    id: 'pizza-calabresa-acebolada',
    name: 'Pizza Calabresa Acebolada',
    description: 'Calabresa defumada, mussarela, anéis de cebola e molho de tomate caseiro.',
    categoryId: 'pizzas_tradicionais',
    portions: [
      { id: 'grande', name: 'Grande (8 pedaços)', price: 48.0 },
      { id: 'extra_grande', name: 'Extra Grande (12 pedaços)', price: 55.0 },
    ],
    options: [
      {
        title: 'Borda Recheada Opcional',
        type: 'single',
        choices: [
          { name: 'Sem borda recheada' },
          { name: 'Borda de Catupiry (+ R$ 5,00)', extraPrice: 5.0 },
          { name: 'Borda de Cheddar (+ R$ 5,00)', extraPrice: 5.0 },
        ],
      },
    ],
  },
  {
    id: 'pizza-caipira',
    name: 'Pizza Caipira',
    description: 'Frango desfiado temperado, milho verde, bacon em cubos, cebola, mussarela e molho de tomate caseiro.',
    categoryId: 'pizzas_tradicionais',
    portions: [
      { id: 'grande', name: 'Grande (8 pedaços)', price: 48.0 },
      { id: 'extra_grande', name: 'Extra Grande (12 pedaços)', price: 55.0 },
    ],
    options: [
      {
        title: 'Borda Recheada Opcional',
        type: 'single',
        choices: [
          { name: 'Sem borda recheada' },
          { name: 'Borda de Catupiry (+ R$ 5,00)', extraPrice: 5.0 },
          { name: 'Borda de Cheddar (+ R$ 5,00)', extraPrice: 5.0 },
        ],
      },
    ],
    popular: true,
  },
  {
    id: 'pizza-marguerita',
    name: 'Pizza Marguerita',
    description: 'Mussarela derretida, fatias de tomate fresco, folhas frescas de manjericão e molho caseiro.',
    categoryId: 'pizzas_tradicionais',
    portions: [
      { id: 'grande', name: 'Grande (8 pedaços)', price: 48.0 },
      { id: 'extra_grande', name: 'Extra Grande (12 pedaços)', price: 55.0 },
    ],
    options: [
      {
        title: 'Borda Recheada Opcional',
        type: 'single',
        choices: [
          { name: 'Sem borda recheada' },
          { name: 'Borda de Catupiry (+ R$ 5,00)', extraPrice: 5.0 },
          { name: 'Borda de Cheddar (+ R$ 5,00)', extraPrice: 5.0 },
        ],
      },
    ],
  },
  {
    id: 'pizza-napolitana',
    name: 'Pizza Napolitana',
    description: 'Mussarela, tomate em rodelas, orégano especial e molho de tomate caseiro.',
    categoryId: 'pizzas_tradicionais',
    portions: [
      { id: 'grande', name: 'Grande (8 pedaços)', price: 48.0 },
      { id: 'extra_grande', name: 'Extra Grande (12 pedaços)', price: 55.0 },
    ],
    options: [
      {
        title: 'Borda Recheada Opcional',
        type: 'single',
        choices: [
          { name: 'Sem borda recheada' },
          { name: 'Borda de Catupiry (+ R$ 5,00)', extraPrice: 5.0 },
          { name: 'Borda de Cheddar (+ R$ 5,00)', extraPrice: 5.0 },
        ],
      },
    ],
  },
  {
    id: 'pizza-pepperoni',
    name: 'Pizza de Pepperoni',
    description: 'Pepperoni levemente picante, cebola, mussarela e molho de tomate caseiro.',
    categoryId: 'pizzas_tradicionais',
    portions: [
      { id: 'grande', name: 'Grande (8 pedaços)', price: 48.0 },
      { id: 'extra_grande', name: 'Extra Grande (12 pedaços)', price: 55.0 },
    ],
    options: [
      {
        title: 'Borda Recheada Opcional',
        type: 'single',
        choices: [
          { name: 'Sem borda recheada' },
          { name: 'Borda de Catupiry (+ R$ 5,00)', extraPrice: 5.0 },
          { name: 'Borda de Cheddar (+ R$ 5,00)', extraPrice: 5.0 },
        ],
      },
    ],
  },
  {
    id: 'pizza-portuguesa',
    name: 'Pizza Portuguesa',
    description: 'Presunto, cebola, ovos cozidos, ervilhas frescas, pimentão, mussarela e molho caseiro.',
    categoryId: 'pizzas_tradicionais',
    portions: [
      { id: 'grande', name: 'Grande (8 pedaços)', price: 48.0 },
      { id: 'extra_grande', name: 'Extra Grande (12 pedaços)', price: 55.0 },
    ],
    options: [
      {
        title: 'Borda Recheada Opcional',
        type: 'single',
        choices: [
          { name: 'Sem borda recheada' },
          { name: 'Borda de Catupiry (+ R$ 5,00)', extraPrice: 5.0 },
          { name: 'Borda de Cheddar (+ R$ 5,00)', extraPrice: 5.0 },
        ],
      },
    ],
    popular: true,
  },

  // 11. PIZZAS ESPECIAIS (FORNARIA)
  {
    id: 'pizza-camarao-catupiry',
    name: 'Camarão com Catupiry',
    description: 'Camarões salteados, catupiry original cremoso, mussarela e molho de tomate da casa.',
    categoryId: 'pizzas_especiais',
    portions: [
      { id: 'grande', name: 'Grande (8 pedaços)', price: 58.0 },
      { id: 'extra_grande', name: 'Extra Grande (12 pedaços)', price: 65.0 },
    ],
    options: [
      {
        title: 'Borda Recheada Opcional',
        type: 'single',
        choices: [
          { name: 'Sem borda recheada' },
          { name: 'Borda de Catupiry (+ R$ 5,00)', extraPrice: 5.0 },
          { name: 'Borda de Cheddar (+ R$ 5,00)', extraPrice: 5.0 },
        ],
      },
    ],
    popular: true,
    badge: 'Especial da Chef',
    image: '/src/assets/images/pizza_fornaria_artesanal_1792014342193.jpg',
  },
  {
    id: 'pizza-file-alho',
    name: 'Filé ao Molho de Alho',
    description: 'Tiras de filé, molho de alho cremoso aromático, mussarela e molho de tomate caseiro.',
    categoryId: 'pizzas_especiais',
    portions: [
      { id: 'grande', name: 'Grande (8 pedaços)', price: 58.0 },
      { id: 'extra_grande', name: 'Extra Grande (12 pedaços)', price: 65.0 },
    ],
    options: [
      {
        title: 'Borda Recheada Opcional',
        type: 'single',
        choices: [
          { name: 'Sem borda recheada' },
          { name: 'Borda de Catupiry (+ R$ 5,00)', extraPrice: 5.0 },
          { name: 'Borda de Cheddar (+ R$ 5,00)', extraPrice: 5.0 },
        ],
      },
    ],
  },
  {
    id: 'pizza-frango-catupiry',
    name: 'Frango com Catupiry',
    description: 'Peito de frango desfiado temperado, catupiry legítimo, mussarela e molho de tomate caseiro.',
    categoryId: 'pizzas_especiais',
    portions: [
      { id: 'grande', name: 'Grande (8 pedaços)', price: 58.0 },
      { id: 'extra_grande', name: 'Extra Grande (12 pedaços)', price: 65.0 },
    ],
    options: [
      {
        title: 'Borda Recheada Opcional',
        type: 'single',
        choices: [
          { name: 'Sem borda recheada' },
          { name: 'Borda de Catupiry (+ R$ 5,00)', extraPrice: 5.0 },
          { name: 'Borda de Cheddar (+ R$ 5,00)', extraPrice: 5.0 },
        ],
      },
    ],
    popular: true,
  },
  {
    id: 'pizza-lombo-catupiry',
    name: 'Lombo com Catupiry',
    description: 'Lombo canadense fatiado, catupiry cremoso, mussarela e molho de tomate caseiro.',
    categoryId: 'pizzas_especiais',
    portions: [
      { id: 'grande', name: 'Grande (8 pedaços)', price: 58.0 },
      { id: 'extra_grande', name: 'Extra Grande (12 pedaços)', price: 65.0 },
    ],
    options: [
      {
        title: 'Borda Recheada Opcional',
        type: 'single',
        choices: [
          { name: 'Sem borda recheada' },
          { name: 'Borda de Catupiry (+ R$ 5,00)', extraPrice: 5.0 },
          { name: 'Borda de Cheddar (+ R$ 5,00)', extraPrice: 5.0 },
        ],
      },
    ],
  },
  {
    id: 'pizza-carne-sol',
    name: 'Carne de Sol com Coalho',
    description: 'Carne de sol artesanal desfiada, queijo coalho em cubinhos, mussarela e molho caseiro.',
    categoryId: 'pizzas_especiais',
    portions: [
      { id: 'grande', name: 'Grande (8 pedaços)', price: 58.0 },
      { id: 'extra_grande', name: 'Extra Grande (12 pedaços)', price: 65.0 },
    ],
    options: [
      {
        title: 'Borda Recheada Opcional',
        type: 'single',
        choices: [
          { name: 'Sem borda recheada' },
          { name: 'Borda de Catupiry (+ R$ 5,00)', extraPrice: 5.0 },
          { name: 'Borda de Cheddar (+ R$ 5,00)', extraPrice: 5.0 },
        ],
      },
    ],
    popular: true,
  },
  {
    id: 'pizza-nordestina',
    name: 'Nordestina',
    description: 'Carne de sol desfiada, bacon crocante, milho, ervilha, pimentão, cebola, mussarela e molho da casa.',
    categoryId: 'pizzas_especiais',
    portions: [
      { id: 'grande', name: 'Grande (8 pedaços)', price: 58.0 },
      { id: 'extra_grande', name: 'Extra Grande (12 pedaços)', price: 65.0 },
    ],
    options: [
      {
        title: 'Borda Recheada Opcional',
        type: 'single',
        choices: [
          { name: 'Sem borda recheada' },
          { name: 'Borda de Catupiry (+ R$ 5,00)', extraPrice: 5.0 },
          { name: 'Borda de Cheddar (+ R$ 5,00)', extraPrice: 5.0 },
        ],
      },
    ],
  },
  {
    id: 'pizza-quatro-queijos',
    name: 'Quatro Queijos',
    description: 'Harmonização de mussarela, catupiry, gorgonzola e queijo coalho com molho de tomate caseiro.',
    categoryId: 'pizzas_especiais',
    portions: [
      { id: 'grande', name: 'Grande (8 pedaços)', price: 58.0 },
      { id: 'extra_grande', name: 'Extra Grande (12 pedaços)', price: 65.0 },
    ],
    options: [
      {
        title: 'Borda Recheada Opcional',
        type: 'single',
        choices: [
          { name: 'Sem borda recheada' },
          { name: 'Borda de Catupiry (+ R$ 5,00)', extraPrice: 5.0 },
          { name: 'Borda de Cheddar (+ R$ 5,00)', extraPrice: 5.0 },
        ],
      },
    ],
  },
  {
    id: 'pizza-quatro-queijos-mel',
    name: 'Quatro Queijos, Bacon e Mel',
    description: 'Mussarela, catupiry, gorgonzola, parmesão ralado, cubos de bacon crocante, fio de mel silvestre e alecrim fresco.',
    categoryId: 'pizzas_especiais',
    portions: [
      { id: 'grande', name: 'Grande (8 pedaços)', price: 58.0 },
      { id: 'extra_grande', name: 'Extra Grande (12 pedaços)', price: 65.0 },
    ],
    options: [
      {
        title: 'Borda Recheada Opcional',
        type: 'single',
        choices: [
          { name: 'Sem borda recheada' },
          { name: 'Borda de Catupiry (+ R$ 5,00)', extraPrice: 5.0 },
          { name: 'Borda de Cheddar (+ R$ 5,00)', extraPrice: 5.0 },
        ],
      },
    ],
    badge: 'Criação Exclusiva',
    popular: true,
  },
  {
    id: 'pizza-sertaneja',
    name: 'Sertaneja',
    description: 'Carne seca da casa desfiada, mussarela derretida, cubos de queijo coalho e molho de tomate fresco da casa.',
    categoryId: 'pizzas_especiais',
    portions: [
      { id: 'grande', name: 'Grande (8 pedaços)', price: 58.0 },
      { id: 'extra_grande', name: 'Extra Grande (12 pedaços)', price: 65.0 },
    ],
    options: [
      {
        title: 'Borda Recheada Opcional',
        type: 'single',
        choices: [
          { name: 'Sem borda recheada' },
          { name: 'Borda de Catupiry (+ R$ 5,00)', extraPrice: 5.0 },
          { name: 'Borda de Cheddar (+ R$ 5,00)', extraPrice: 5.0 },
        ],
      },
    ],
  },

  // 12. SALADAS
  {
    id: 'salada-casa',
    name: 'Salada da Casa',
    description: 'Acelga fresca crocante, tomate fatiado, pepino e cebola roxa ao azeite.',
    categoryId: 'saladas',
    price: 28.0,
  },
  {
    id: 'salada-verao',
    name: 'Salada Verão',
    description: 'Acelga, tomate, beterraba ralada, cenoura, azeitona, pepino fresco, cebola e ovos de codorna cozidos.',
    categoryId: 'saladas',
    price: 35.0,
    popular: true,
  },

  // 13. PORÇÕES EXTRAS
  {
    id: 'extra-arroz-angu',
    name: 'Arroz Branco ou Angu',
    description: 'Acompanhamento tradicional da fazenda.',
    categoryId: 'porcoes_extras',
    portions: [
      { id: 'ind', name: 'Dose Individual', price: 4.0 },
      { id: 'p2', name: 'Para 2 Pessoas', price: 8.0 },
    ],
    options: [
      {
        title: 'Escolha',
        type: 'single',
        choices: [{ name: 'Arroz Branco' }, { name: 'Angu Cremoso' }],
      },
    ],
  },
  {
    id: 'extra-espaguete',
    name: 'Macarrão Espaguete Alho e Óleo',
    description: 'Espaguete no ponto al dente salteado com alho laminado e azeite.',
    categoryId: 'porcoes_extras',
    portions: [
      { id: 'ind', name: 'Dose Individual', price: 5.0 },
      { id: 'p2', name: 'Para 2 Pessoas', price: 8.0 },
    ],
  },
  {
    id: 'extra-couve-orapronobis',
    name: 'Couve Refogada ou Ora-Pro-Nóbis',
    description: 'Refogadas no azeite e alho fresco.',
    categoryId: 'porcoes_extras',
    portions: [
      { id: 'ind', name: 'Dose Individual', price: 8.0 },
      { id: 'p2', name: 'Para 2 Pessoas', price: 10.0 },
    ],
    options: [
      {
        title: 'Escolha a Verdura',
        type: 'single',
        choices: [{ name: 'Couve Refogada' }, { name: 'Ora-Pro-Nóbis Refogada' }],
      },
    ],
  },
  {
    id: 'extra-farofa',
    name: 'Farofa da Casa',
    description: 'Farofa dourada crocante com temperos da roça.',
    categoryId: 'porcoes_extras',
    portions: [
      { id: 'ind', name: 'Dose Individual', price: 8.0 },
      { id: 'p2', name: 'Para 2 Pessoas', price: 16.0 },
    ],
  },
  {
    id: 'extra-quiabo',
    name: 'Quiabo Refogado no Molho',
    description: 'Quiabo sem baba temperado em molho aromático caseiro.',
    categoryId: 'porcoes_extras',
    portions: [
      { id: 'ind', name: 'Dose Individual', price: 4.0 },
      { id: 'p2', name: 'Para 2 Pessoas', price: 8.0 },
    ],
  },
  {
    id: 'extra-feijao-preto-carioca',
    name: 'Feijão Preto ou Carioca',
    description: 'Feijão de caldo cozido e temperado.',
    categoryId: 'porcoes_extras',
    portions: [
      { id: 'ind', name: 'Dose Individual', price: 6.0 },
      { id: 'p2', name: 'Para 2 Pessoas', price: 12.0 },
    ],
    options: [
      {
        title: 'Tipo de Feijão',
        type: 'single',
        choices: [{ name: 'Feijão Carioca' }, { name: 'Feijão Preto' }],
      },
    ],
  },
  {
    id: 'extra-tropeiro-tutu',
    name: 'Feijão Tropeiro Mineiro ou Tutu de Feijão',
    description: 'Receita autêntica mineira com farinha, bacon e linguiça.',
    categoryId: 'porcoes_extras',
    portions: [
      { id: 'ind', name: 'Dose Individual', price: 5.0 },
      { id: 'p2', name: 'Para 2 Pessoas', price: 8.0 },
    ],
    options: [
      {
        title: 'Tipo de Preparo',
        type: 'single',
        choices: [{ name: 'Feijão Tropeiro Mineiro' }, { name: 'Tutu de Feijão' }],
      },
    ],
  },
  {
    id: 'extra-pirao',
    name: 'Pirão de Peixe',
    description: 'Pirão aveludado preparado com caldo de peixe fresco.',
    categoryId: 'porcoes_extras',
    portions: [
      { id: 'ind', name: 'Dose Individual', price: 10.0 },
      { id: 'p2', name: 'Para 2 Pessoas', price: 18.0 },
    ],
  },
  {
    id: 'extra-batata-frita',
    name: 'Batata Frita Extra',
    description: 'Batata frita palito sequinha.',
    categoryId: 'porcoes_extras',
    portions: [
      { id: 'ind', name: 'Dose Individual', price: 4.0 },
      { id: 'p2', name: 'Para 2 Pessoas', price: 8.0 },
    ],
  },
  {
    id: 'extra-vinagrete',
    name: 'Vinagrete da Casa',
    description: 'Tomate, cebola e cheiro verde picados ao vinagre e azeite.',
    categoryId: 'porcoes_extras',
    portions: [
      { id: 'ind', name: 'Dose Individual', price: 4.0 },
      { id: 'p2', name: 'Para 2 Pessoas', price: 8.0 },
    ],
  },
  {
    id: 'extra-ovo-frito',
    name: 'Ovo Frito (Unidade)',
    description: 'Ovo caipira frito no ponto com gema macia.',
    categoryId: 'porcoes_extras',
    portions: [
      { id: '1un', name: '1 Unidade', price: 4.0 },
      { id: '2un', name: '2 Unidades', price: 8.0 },
    ],
  },
  {
    id: 'extra-omelete',
    name: 'Omelete de Queijo e Verdura (Unidade)',
    description: 'Omelete fofinho recheado com queijo e verduras frescas.',
    categoryId: 'porcoes_extras',
    price: 15.0,
  },
  {
    id: 'extra-tilapia-peixe',
    name: 'Filé de Tilápia ou Posta de Peixe (200g)',
    description: 'Proteína adicional preparada no capricho.',
    categoryId: 'porcoes_extras',
    price: 15.0,
    options: [
      {
        title: 'Escolha',
        type: 'single',
        choices: [{ name: 'Filé de Tilápia' }, { name: 'Posta de Peixe' }],
      },
    ],
  },
  {
    id: 'extra-contrafile',
    name: 'Bife de Contrafilé (200g)',
    description: 'Bife de contrafilé suculento grelhado.',
    categoryId: 'porcoes_extras',
    price: 25.0,
  },
  {
    id: 'extra-mignon',
    name: 'Medalhão de Filé Mignon (200g)',
    description: 'Medalhão de filé mignon macio grelhado.',
    categoryId: 'porcoes_extras',
    price: 30.0,
  },
  {
    id: 'extra-frango-sobrecoxa',
    name: 'Filé de Frango ou Sobrecoxa Assada (200g)',
    description: 'Frango grelhado ou sobrecoxa suculenta assada.',
    categoryId: 'porcoes_extras',
    portions: [
      { id: 'sobrecoxa', name: 'Sobrecoxa Assada (200g)', price: 15.0 },
      { id: 'file', name: 'Filé de Frango (200g)', price: 45.0 },
    ],
  },
  {
    id: 'extra-pernil-calabresa',
    name: 'Pernil Suíno ou Linguiça Calabresa (200g)',
    description: 'Pernil assado suculento ou calabresa acebolada.',
    categoryId: 'porcoes_extras',
    price: 18.0,
    options: [
      {
        title: 'Escolha a Proteína',
        type: 'single',
        choices: [{ name: 'Pernil Suíno Assado' }, { name: 'Linguiça Calabresa' }],
      },
    ],
  },

  // 14. SOBREMESAS
  {
    id: 'sob-pudim',
    name: 'Pudim de Leite Condensado',
    description: 'Tradição cremosa e aveludada, sem furinhos, com calda de caramelo dourada.',
    categoryId: 'sobremesas',
    price: 10.0,
    popular: true,
  },
  {
    id: 'sob-romeu-julieta',
    name: 'Romeu e Julieta da Chef',
    description: 'Releitura do doce clássico mineiro: goiabada cascão de corte com queijo cremoso artesanal.',
    categoryId: 'sobremesas',
    price: 12.0,
    badge: 'Receita da Chef',
    popular: true,
  },

  // 15. BEBIDAS, DOSES E DRINKS
  {
    id: 'beb-agua',
    name: 'Água Mineral (500 ml)',
    description: 'Água mineral fresca natural ou gaseificada.',
    categoryId: 'bebidas',
    portions: [
      { id: 'sem_gas', name: 'Sem Gás (500ml)', price: 5.0 },
      { id: 'com_gas', name: 'Com Gás (500ml)', price: 6.0 },
    ],
  },
  {
    id: 'beb-suco-laranja',
    name: 'Suco Natural de Laranja',
    description: 'Suco natural feito da fruta na hora, super refrescante.',
    categoryId: 'bebidas',
    portions: [
      { id: 'copo', name: 'Copo (350 ml)', price: 9.0 },
      { id: 'jarra_750', name: 'Jarra (750 ml)', price: 18.0 },
      { id: 'jarra_1500', name: 'Jarra Família (1,5 Litro)', price: 34.0 },
    ],
    popular: true,
  },
  {
    id: 'beb-refrigerante',
    name: 'Refrigerantes',
    description: 'Coca-Cola, Coca Zero, Fanta Laranja, Fanta Uva, Kuat, Guaraná Jesus, Sprite, Sprite Zero ou Schweppes Citrus.',
    categoryId: 'bebidas',
    portions: [
      { id: 'lata', name: 'Lata (350 ml)', price: 9.0 },
      { id: 'ks', name: 'KS Vidro (290 ml)', price: 8.0 },
      { id: 'litro', name: 'Garrafa 1 Litro', price: 14.0 },
      { id: '2litros', name: 'Garrafa 2 Litros (Coca-Cola)', price: 23.0 },
    ],
    options: [
      {
        title: 'Escolha o Refrigerante',
        type: 'single',
        choices: [
          { name: 'Coca-Cola Tradicional' },
          { name: 'Coca-Cola Zero' },
          { name: 'Guaraná Jesus' },
          { name: 'Fanta Laranja' },
          { name: 'Fanta Uva' },
          { name: 'Sprite' },
          { name: 'Sprite Zero' },
          { name: 'Schweppes Citrus' },
          { name: 'Kuat' },
        ],
      },
    ],
  },
  {
    id: 'beb-cerveja-longneck',
    name: 'Cervejas Long Neck / Lata',
    description: 'Cervejas especiais servidas trincando de geladas.',
    categoryId: 'bebidas',
    portions: [
      { id: 'heineken', name: 'Heineken 350 ml', price: 16.0 },
      { id: 'heineken_zero', name: 'Heineken Zero Álcool 350 ml', price: 16.0 },
      { id: 'stella_pure', name: 'Stella Pure Gold 350 ml', price: 15.0 },
      { id: 'coronita', name: 'Coronita 210 ml', price: 13.0 },
    ],
  },
  {
    id: 'beb-cerveja-600',
    name: 'Cervejas Garrafa 600 ml',
    description: 'Cerveja de garrafa para compartilhar à mesa.',
    categoryId: 'bebidas',
    portions: [
      { id: 'heineken_600', name: 'Heineken 600 ml', price: 24.0 },
      { id: 'stella_600', name: 'Stella Artois 600 ml', price: 18.0 },
      { id: 'original_600', name: 'Original 600 ml', price: 16.0 },
      { id: 'amstel_600', name: 'Amstel 600 ml', price: 16.0 },
    ],
  },
  {
    id: 'beb-dose-cachaca',
    name: 'Dose de Cachaça Mineira',
    description: 'Autêntica cachaça artesanal da roça envelhecida em barril.',
    categoryId: 'bebidas',
    price: 10.0,
  },
  {
    id: 'beb-caipirinha',
    name: 'Caipirinha de Limão',
    description: 'Clássica com cachaça selecionada, limão tahiti e açúcar cristal.',
    categoryId: 'bebidas',
    price: 20.0,
    popular: true,
  },
  {
    id: 'beb-caipiroska',
    name: 'Caipiroska de Limão',
    description: 'Vodka selecionada, limão tahiti macerado e gelo.',
    categoryId: 'bebidas',
    price: 25.0,
  },
  {
    id: 'beb-mineirito',
    name: 'Drink Especial "Mineirito"',
    description: 'Drink exclusivo de caipirinha de limão servido com uma cerveja Coronita invertida no copo!',
    categoryId: 'bebidas',
    price: 30.0,
    badge: 'Drink Exclusivo',
    popular: true,
  },
  {
    id: 'beb-cafe-nespresso',
    name: 'Café Expresso (Nespresso)',
    description: 'Expresso encorpado de alta intensidade tirado na hora.',
    categoryId: 'bebidas',
    portions: [
      { id: 'pequeno', name: 'Pequeno', price: 4.0 },
      { id: 'grande', name: 'Grande', price: 6.0 },
    ],
  },
  {
    id: 'beb-cafe-coado',
    name: 'Café Coado na Hora',
    description: 'Café passado no coador tradicional, aroma da fazenda.',
    categoryId: 'bebidas',
    portions: [
      { id: 'pequeno', name: 'Pequeno', price: 4.0 },
      { id: 'grande', name: 'Grande', price: 6.0 },
    ],
  },
  {
    id: 'beb-cafe-leite',
    name: 'Café com Leite',
    description: 'Café quente com leite vaporizado.',
    categoryId: 'bebidas',
    portions: [
      { id: 'pequeno', name: 'Pequeno', price: 5.0 },
      { id: 'grande', name: 'Grande', price: 8.0 },
    ],
  },
];

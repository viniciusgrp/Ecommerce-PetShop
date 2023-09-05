// Banco de dados dos produtos

const data = [
  {
    img: "./img/racaoCalopsita.webp",
    nameItem: "Mistura de sementes",
    description:
      "Mistura para Calopsita, Agapornis e Rose Faces KenziePássaros 500g",
    value: 5.5,
    addCart: "Adicionar ao carrinho",
    tag: ["Aves"],
  },
  {
    img: "./img/nutropicaAgapornis.webp",
    nameItem: "Ração extrusada Agapornis",
    description:
      "Ração estrusada KenziTrópica, para uma dieta balanceada da sua ave.",
    value: 39.9,
    addCart: "Adicionar ao carrinho",
    tag: ["Aves"],
  },
  {
    img: "./img/viveiro.webp",
    nameItem: "Viveiro GRP para aves",
    description: "O lar ideal para sua ave, para todos os tamanhos",
    value: 2000,
    addCart: "Adicionar ao carrinho",
    tag: ["Aves"],
  },
  {
    img: "./img/aquario.webp",
    nameItem: "Aquario pequeno",
    description: "Ideal para peixes pequenos",
    value: 140,
    addCart: "Adicionar ao carrinho",
    tag: ["Peixes"],
  },
  {
    img: "./img/terrario.jpg",
    nameItem: "Terrário para répteis",
    description: "Mais conforto e praticidade para seus répteis",
    value: 499.75,
    addCart: "Adicionar ao carrinho",
    tag: ["Repteis"],
  },
  {
    img: "./img/aquarioLuxo.jpg",
    nameItem: "Aquário de luxo com móvel",
    description: "Aquário grande, muito bonito e completo",
    value: 800,
    addCart: "Adicionar ao carrinho",
    tag: ["Peixes"],
  },
  {
    img: "./img/papaPsitacideos.webp",
    nameItem: "Papa para psitacídeos",
    description: "Alimento completo para filhotes desde o primeiro dia de vida",
    value: 28.8,
    addCart: "Adicionar ao carrinho",
    tag: ["Aves"],
  },
  {
    img: "./img/racaoJabuti.webp",
    nameItem: "Ração para Jabuti",
    description: "Alimento especial para Jabutis",
    value: 199,
    addCart: "Adicionar ao carrinho",
    tag: ["Repteis"],
  },
  {
    img: "./img/filtroAquario.webp",
    nameItem: "Filtro para aquário",
    description: "Indicado para aquários de até 300 litros",
    value: 210,
    addCart: "Adicionar ao carrinho",
    tag: ["Peixes"],
  },
  {
    img: "./img/lampadaCeramica.jpg",
    nameItem: "Lâmpada cêramica",
    description: "Lâmpada ideal para animais de sangue frio",
    value: 73,
    addCart: "Adicionar ao carrinho",
    tag: ["Repteis"],
  },
  {
    img: "./img/racaoPeixes.webp",
    nameItem: "Ração para peixes pequenos",
    description: "Alimentação balanceada para pequenos",
    value: 50,
    addCart: "Adicionar ao carrinho",
    tag: ["Peixes"],
  },
  {
    img: "./img/pedraAquecida.webp",
    nameItem: "Pedra para répteis",
    description: "Pedra aquecida para répteis 110v",
    value: 73,
    addCart: "Adicionar ao carrinho",
    tag: ["Repteis"],
  },
];

let arrayCarrinho = [];

let emExibicao = [];

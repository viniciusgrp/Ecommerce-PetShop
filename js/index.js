let secaoProdutos = document.querySelector(".produtos");

function listarProdutos(obj = data) {
  emExibicao = [];
  secaoProdutos.innerHTML = "";
  for (let i = 0; i < obj.length; i++) {
    obj[i].id = i;
    criarCard(obj[i], i);
    emExibicao.push(obj[i]);
  }
}

function criarCard(obj, id) {
  let caminhoImagem = obj.img;
  let infoCategoria = obj.tag[0];
  let infoTitulo = obj.nameItem;
  let infoDescricao = obj.description;
  let infoPreco = obj.value;
  let precoFormatado = infoPreco.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  let card = document.createElement("div");
  card.classList.add("card");

  let areaImagem = document.createElement("div");
  areaImagem.classList.add("produtoImg");

  let imagemCard = document.createElement("img");
  imagemCard.src = caminhoImagem;

  let secaoInfo = document.createElement("div");
  secaoInfo.classList.add("produtoInfo");

  let categoriaProduto = document.createElement("p");
  categoriaProduto.classList.add("categoria");
  categoriaProduto.innerText = infoCategoria;

  let tituloProduto = document.createElement("h2");
  tituloProduto.classList.add("produtoTitulo");
  tituloProduto.innerText = infoTitulo;

  let secaoDescricao = document.createElement("div");
  secaoDescricao.classList.add("descricao");

  let addDescricao = document.createElement("p");
  addDescricao.classList.add("produtoDescricao");
  addDescricao.innerText = infoDescricao;

  let produtoPreco = document.createElement("p");
  produtoPreco.classList.add("produtoPreco");
  produtoPreco.innerText = precoFormatado;

  let btnAddCarrinho = document.createElement("button");
  btnAddCarrinho.classList.add("produtoAdicionarCarrinho");
  btnAddCarrinho.innerText = "Adicionar ao carrinho";
  btnAddCarrinho.id = id;

  areaImagem.appendChild(imagemCard);
  secaoDescricao.appendChild(addDescricao);

  secaoInfo.append(
    categoriaProduto,
    tituloProduto,
    secaoDescricao,
    produtoPreco,
    btnAddCarrinho
  );

  card.append(areaImagem, secaoInfo);

  secaoProdutos.appendChild(card);
}

listarProdutos(data);

let btnPesquisa = document.getElementById("btnPesquisar");
btnPesquisa.addEventListener("click", pesquisarItens);

function pesquisarItens() {
  let inputPesquisa = document.getElementById("inputPesquisa");
  let valorPesquisado = inputPesquisa.value;
  inputPesquisa.value = "";
  let pesquisaFormatado = valorPesquisado.toLowerCase().trim();
  let retorno = pesquisar(pesquisaFormatado);
  listarProdutos(retorno);
}

function pesquisar(pesquisa) {
  emExibicao = [];
  let resultados = [];
  for (let i = 0; i < data.length; i++) {
    let titulo = data[i].nameItem;
    let formatado = titulo.toLowerCase().trim();
    let categoria = data[i].tag[0];
    let categoriaFormatada = categoria.toLowerCase().trim();
    if (formatado.includes(pesquisa) || categoriaFormatada.includes(pesquisa)) {
      resultados.push(data[i]);
      emExibicao.push(data[i]);
    }
  }
  return resultados;
}

let btnTodos = document.getElementById("btnTodos");
btnTodos.addEventListener("click", function () {
  listarProdutos(data);
});

function pesquisaCategoria(categoria) {
  let retorno = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].tag.includes(categoria)) {
      retorno.push(data[i]);
    }
  }
  listarProdutos(retorno);
}

let btnAves = document.getElementById("navAves");
btnAves.addEventListener("click", function pesquisarAcessorios() {
  pesquisaCategoria("Aves");
});

let btnRepteis = document.getElementById("navRepteis");
btnRepteis.addEventListener("click", function pesquisarAcessorios() {
  pesquisaCategoria("Repteis");
});

let btnPeixes = document.getElementById("navPeixes");
btnPeixes.addEventListener("click", function pesquisarAcessorios() {
  pesquisaCategoria("Peixes");
});

let produtosCarrinho = document.getElementById("produtosCarrinho");
produtosCarrinho.addEventListener("click", function (event) {
  console.log(event.target.classList.value);
  if (event.target.classList.value == "removerCarrinho") {
    removerCarrinho(event.target.id);
  }
  if (event.target.classList.value == "btnMenos") {
    alteraQuantidade(event, "menos");
  }
  if (event.target.classList.value == "btnMais") {
    alteraQuantidade(event, "mais");
  }
});

function addCarrinho(event) {
  if (event.target.tagName == "BUTTON") {
    let indice = event.target.id;
    produtosCarrinho.innerHTML = "";
    let item = data[indice];
    if (arrayCarrinho.length >= 1) {
      for (let i = 0; i < arrayCarrinho.length; i++) {
        if (arrayCarrinho[i].nameItem === item.nameItem) {
          arrayCarrinho[i].quantidade += 1;
          itemCarro();
          return;
        }
      }
    }
    item.quantidade = 1;
    arrayCarrinho.push(item);
    itemCarro();
  }
}

secaoProdutos.addEventListener("click", addCarrinho);

itemCarro();

function itemCarro() {
  produtosCarrinho.innerHTML = "";
  if (arrayCarrinho.length >= 1) {
    for (let i = 0; i < arrayCarrinho.length; i++) {
      let itemAtual = arrayCarrinho[i];

      let itemCarro = document.createElement("div");
      itemCarro.classList.add("itemCarrinho");

      let imgCarro = document.createElement("div");
      imgCarro.classList.add("imgCarrinho");

      let foto = document.createElement("img");
      foto.src = itemAtual.img;

      let carroInfos = document.createElement("div");
      carroInfos.classList.add("infoCarrinho");

      let tituloCarrinho = document.createElement("p");
      tituloCarrinho.classList.add("tituloCarrinho");
      tituloCarrinho.innerText = itemAtual.nameItem;

      let secao = document.createElement("div");
      secao.id = "areaItem";
      secao.classList.add("secao");

      let btnQtdMenos = document.createElement("button");
      btnQtdMenos.classList.add("btnMenos");
      btnQtdMenos.innerText = "-";
      btnQtdMenos.id = i;

      let qtdItem = document.createElement("p");
      qtdItem.classList.add("qtdCarro");
      qtdItem.innerText = `${arrayCarrinho[i].quantidade}`;
      qtdItem.id = `qtdItem${i}`;

      let btnQtdMais = document.createElement("button");
      btnQtdMais.classList.add("btnMais");
      btnQtdMais.innerText = "+";
      btnQtdMais.id = i;

      let precoCarrinho = document.createElement("p");
      precoCarrinho.classList.add("precoCarrinho");
      let infoPreco = itemAtual.value;
      let precoFormatado = infoPreco.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
      precoCarrinho.innerText = precoFormatado;

      let btnRemoverCarrinho = document.createElement("button");
      btnRemoverCarrinho.classList.add("removerCarrinho");
      btnRemoverCarrinho.innerText = "Remover do Carrinho";
      btnRemoverCarrinho.id = i;

      imgCarro.appendChild(foto);

      secao.append(precoCarrinho, btnQtdMenos, qtdItem, btnQtdMais);
      carroInfos.append(tituloCarrinho, secao, btnRemoverCarrinho);
      itemCarro.append(imgCarro, carroInfos);

      produtosCarrinho.appendChild(itemCarro);

      rodaPeCarro();
    }
  }

  if (arrayCarrinho.length === 0) {
    let carrinhoVazio = document.createElement("div");
    carrinhoVazio.classList.add("carrinhoVazio");

    let textVazio = document.createElement("p");
    textVazio.innerText = "Carrinho vazio";

    let textAddItem = document.createElement("span");
    textAddItem.innerText = "Adicione itens";

    carrinhoVazio.append(textVazio, textAddItem);
    produtosCarrinho.appendChild(carrinhoVazio);
  }
}

function removerCarrinho(id) {
  arrayCarrinho.splice(id, 1);
  itemCarro();
  rodaPeCarro();
}

let btnMenos = document.getElementById("qtdMenos");

let btnMais = document.getElementById("qtdMais");

let qtdItemCarro = document.getElementById("qtdItem");

function alteraQuantidade(event, param) {
  let index = event.target.id;
  let qtd = document.getElementById(`qtdItem${index}`);
  if (param == "mais") {
    arrayCarrinho[index].quantidade++;
    qtd.innerText = arrayCarrinho[index].quantidade;
  }
  if (param == "menos") {
    arrayCarrinho[index].quantidade--;
    qtd.innerText = arrayCarrinho[index].quantidade;
  }
  if (arrayCarrinho[index].quantidade <= 0) {
    arrayCarrinho.splice(index, 1);
    itemCarro();
  }
  rodaPeCarro();
}

let divRodape = document.getElementById("rodape");

function rodaPeCarro() {
  if (arrayCarrinho.length === 0) {
    divRodape.style.display = "none";
  } else {
    divRodape.style.display = "flex";
  }

  divRodape.innerHTML = "";

  let rodape = document.createElement("div");
  rodape.classList.add("quantidadeCarrinho");

  let textQtd = document.createElement("p");
  textQtd.classList.add("textQuantidade");
  textQtd.innerText = "Quantidade de Itens";

  let textQuantia = document.createElement("p");
  textQuantia.classList.add("quantia");
  textQuantia.innerText = itensCarro();

  let totalCarro = document.createElement("div");
  totalCarro.classList.add("totalCarrinho");

  let totalText = document.createElement("p");
  totalText.classList.add("total");
  totalText.innerText = "Total";

  let valor = document.createElement("p");
  valor.classList.add("dinheiros");
  valor.innerText = valorCarro();

  rodape.append(textQtd, textQuantia);
  totalCarro.append(totalText, valor);
  divRodape.append(rodape, totalCarro);
}

rodaPeCarro();

function itensCarro() {
  let total = 0;
  for (let i = 0; i < arrayCarrinho.length; i++) {
    total += arrayCarrinho[i].quantidade;
  }
  return total;
}

function valorCarro() {
  let total = 0;
  for (let i = 0; i < arrayCarrinho.length; i++) {
    let totalItem = arrayCarrinho[i].quantidade * arrayCarrinho[i].value;
    total += totalItem;
  }
  let formatado = total.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  return formatado;
}

function ordenarMenorValor() {
  let ordenado = emExibicao.sort(function (a, b) {
    if (a.value > b.value) {
      return 1;
    } else {
      return -1;
    }
  });
  return ordenado;
}

function ordenarAlfa() {
  let ordenado = emExibicao.sort(function (a, b) {
    if (a.nameItem > b.nameItem) {
      return 1;
    } else {
      return -1;
    }
  });
  return ordenado;
}

let ordenar = document.getElementById("ordenar");
ordenar.addEventListener("change", function () {
  if (ordenar.value == "menorValor") {
    let menorValor = ordenarMenorValor();
    listarProdutos(menorValor);
  } else if (ordenar.value == "maiorValor") {
    let menorValor = ordenarMenorValor();
    let maiorValor = menorValor.reverse();
    listarProdutos(maiorValor);
  } else if (ordenar.value == "alfabetico") {
    let alfa = ordenarAlfa();
    listarProdutos(alfa);
  } else if (ordenar.value == "alfabeticoReverse") {
    let alfa = ordenarAlfa();
    let reverso = alfa.reverse();
    listarProdutos(reverso);
  }
});

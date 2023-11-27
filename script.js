// Selecionando a lista ul no HTML
const list = document.querySelector("ul");

// Selecionando os botões no HTML
const buttonShowAll = document.querySelector(".show-all");
const buttonMapAll = document.querySelector(".map-alls");
const buttonSumAll = document.querySelector(".sum-alls");
const buttonFilterAll = document.querySelector(".filter-all");

// Função para formatar um valor como moeda brasileira (Real)
function formatCurrency(value) {
  // Usando o método toLocaleString para formatar o valor como moeda brasileira
  const newValue = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  // Retornando o valor formatado
  return newValue;
}

// Inicializando uma string vazia para armazenar o conteúdo da lista
let myList = "";

// Função para exibir todos os produtos na lista
function showAll(produtosArray) {
  // Resetando a string myList para garantir que esteja vazia
  myList = "";

  // Iterando sobre o array de produtos e construindo a string HTML
  produtosArray.forEach((produto) => {
    myList += `<li>
                    <img src=${produto.src}>
                    <p>${produto.name}</p>
                    <p>${formatCurrency(produto.price)}</p>
                </li>`;
  });

  // Atualizando o conteúdo da lista com a string HTML gerada
  list.innerHTML = myList;
}

// Função para aplicar um desconto de 10% nos preços dos produtos
function mapAllItems() {
  // Criando um novo array com preços descontados usando o método map e spread operator
  const newPrices = menuDeOpcoes.map((produtos) => ({
    ...produtos,
    price: produtos.price - produtos.price * 0.1,
  }));

  // Chamando a função showAll para exibir os produtos com os novos preços
  showAll(newPrices);
}
// Função para calcular e exibir o valor total de todos os itens
function sumAllItems() {
  // Utilizando o método reduce para acumular os preços de todos os itens
  const totalValue = menuDeOpcoes.reduce((acc, curr) => (acc += curr.price), 0);

  // Atualizando o conteúdo da lista com uma string HTML que exibe o valor total
  list.innerHTML = `<li>
      <p>O valor total dos itens é  ${formatCurrency(totalValue)}</p>
    </li>`;

  // Exibindo o valor total no console para fins de debug
  console.log(totalValue);
}

// Função para filtrar e exibir todos os itens que são veganos
function filterAllItems() {
  // Utilizando o método filter para criar um novo array com produtos veganos
  const newFilter = menuDeOpcoes.filter((produtos) => produtos.vegan === true);

  // Chamando a função showAll para exibir os produtos que passaram no filtro
  showAll(newFilter);
}

// Adicionando eventos de clique aos botões, chamando as funções correspondentes
buttonShowAll.addEventListener("click", () => showAll(menuDeOpcoes));
buttonMapAll.addEventListener("click", mapAllItems);
buttonSumAll.addEventListener("click", sumAllItems);
buttonFilterAll.addEventListener("click", filterAllItems);

// array inicial
let arrayFilmes = [];
console.log(arrayFilmes);

// INSTÂNCIAS DO DOM
const nomeTelespectador = document.getElementById("nameUser");
const infoFilme = {
  nomeFilme: document.getElementById("movie-name"),
  genero: document.getElementById("movie-genre"),
  ano: document.getElementById("movie-date"),
  avaliacao: document.getElementById("movie-stars"),
};
const button = document.getElementById("submit");
const cardsContainer = document.getElementById("card");

// MODELOS
class Telespectador {
  constructor(nomeTelespectador) {
    this.nomeTelespectador = nomeTelespectador;
  }
}

class Filmes extends Telespectador {
  constructor(nomeTelespectador, nomeFilme, genero, ano, avaliacao) {
    super(nomeTelespectador);
    this.nomeFilme = nomeFilme;
    this.genero = genero;
    this.ano = ano;
    this.avaliacao = avaliacao;
  }

  // adicionar o filme no array
  adicionar() {
    arrayFilmes.push(this);
  }

  static listando() {
    cardsContainer.innerHTML = '';

    arrayFilmes.forEach((filme, index) => {
      const card = document.createElement('div');
      card.classList.add('avaliacaoFinal');
      cardsContainer.append(card);
      card.innerHTML = `
        <ul>
          <li><strong>Telespectador:</strong> ${filme.nomeTelespectador}</li>
          <li><strong>Filme:</strong> ${filme.nomeFilme}</li>
          <li><strong>Gênero:</strong> ${filme.genero}</li>
          <li><strong>Ano:</strong> ${filme.ano}</li>
          <li><strong>Avaliação:</strong> ${filme.avaliacao}</li>
        </ul>
      `;

      // Botão de editar
      const botaoEditar = document.createElement('button');
      botaoEditar.innerText = 'Editar';
      botaoEditar.classList.add('edit');
      botaoEditar.addEventListener('click', () => {
        editarFilme(index);
      });

      // Botão de deletar
      const botaoDeletar = document.createElement('button');
      botaoDeletar.innerText = 'Deletar';
      botaoDeletar.classList.add('delet');
      botaoDeletar.addEventListener('click', () => {
        deletarFilme(index);
      });

      card.appendChild(botaoEditar);
      card.appendChild(botaoDeletar);
    });
  }
}

function editarFilme(index) {
  const filme = arrayFilmes[index];
  nomeTelespectador.value = filme.nomeTelespectador;
  infoFilme.nomeFilme.value = filme.nomeFilme;
  infoFilme.genero.value = filme.genero;
  infoFilme.ano.value = filme.ano;
  infoFilme.avaliacao.value = filme.avaliacao;

  arrayFilmes.splice(index, 1);
  Filmes.listando();
}

function deletarFilme(index) {
  arrayFilmes.splice(index, 1);
  Filmes.listando(); 
}

// EVENTOS
button.addEventListener("click", () => {
  if (
    !nomeTelespectador.value ||
    !infoFilme.nomeFilme.value ||
    !infoFilme.genero.value ||
    !infoFilme.ano.value ||
    !infoFilme.avaliacao.value
  ) {
    alert("Por favor, preencha todos os campos!");
    return; 
  }
  const novoFilme = new Filmes(
    nomeTelespectador.value,
    infoFilme.nomeFilme.value,
    infoFilme.genero.value,
    infoFilme.ano.value,
    infoFilme.avaliacao.value
  );

  novoFilme.adicionar();
  Filmes.listando(); 
});

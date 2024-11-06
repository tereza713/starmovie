// declarando arrays 
let arrayTelespectador = [];
let arrayNomeFilme = [];
let arrayAnoFilme= [];
let arrayGeneroFilme = [];
let arrayAvaliacoes = [];
console.log(arrayNomeFilme)
console.log(arrayTelespectador)
console.log(arrayAnoFilme)
console.log(arrayGeneroFilme)
console.log(arrayAvaliacoes)

// INSTÂNCIAS DO DOM
const nomeTelespectador = document.getElementById("nameUser");
const infoFilme = {
  nomeFilme: document.getElementById("movie-name"),
  genero: document.getElementById("movie-genre"),
  ano: document.getElementById("movie-date"),
  avaliacao: document.getElementById("movie-stars"),
};
const button = document.getElementById("submit");
const spans = document.querySelectorAll(".span");


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

  exibirFilme() {
    spans[0].innerText = this.nomeTelespectador;
    spans[1].innerText = this.nomeFilme;
    spans[2].innerText = this.genero;
    spans[3].innerText = this.ano;
    spans[4].innerText = this.avaliacao;
  }

adicionar(){
    arrayTelespectador.push(nomeTelespectador.value)
    arrayNomeFilme.push(infoFilme.nomeFilme.value)
    arrayGeneroFilme.push(infoFilme.genero.value)
    arrayAnoFilme.push(infoFilme.ano.value)
    arrayAvaliacoes.push(infoFilme.avaliacao.value)
  }

  listando(){
    const cards = document.getElementById('card');
    cards.innerHTML ='';
    for(let i = 0; i < arrayTelespectador.length; i++){
        
        const avaliacaoFinal = document.createElement('ul');
        avaliacaoFinal.classList.add('avaliacaoFinal');
        cards.append(avaliacaoFinal);
    
        const elementoTelespectador = document.createElement('li');
        const labelTelespectador = document.createElement('label');
        labelTelespectador.innerText = "Telespectador: ";
        elementoTelespectador.appendChild(labelTelespectador);
        elementoTelespectador.innerHTML += `${arrayTelespectador[i]}`;
        avaliacaoFinal.appendChild(elementoTelespectador);

        
        const elementoNomeFilme = document.createElement('li');
        const labelNomeFilme = document.createElement('label');
        labelNomeFilme.innerText = "Filme: ";
        elementoNomeFilme.appendChild(labelNomeFilme);
        elementoNomeFilme.innerHTML += `${arrayNomeFilme[i]}`;
        avaliacaoFinal.appendChild(elementoNomeFilme);

        const elementoDataFilme = document.createElement('li');
        const labelDataFilme = document.createElement('label');
        labelDataFilme.innerText = "Ano: ";
        elementoDataFilme.appendChild(labelDataFilme);
        elementoDataFilme.innerHTML += `${arrayAnoFilme[i]}`;
        avaliacaoFinal.appendChild(elementoDataFilme);

        const elementoGeneroFilme = document.createElement('li');
        const labelGeneroFilme = document.createElement('label');
        labelGeneroFilme.innerText = "Gênero: ";
        elementoGeneroFilme.appendChild(labelGeneroFilme);
        elementoGeneroFilme.innerHTML += `${arrayGeneroFilme[i]}`;
        avaliacaoFinal.appendChild(elementoGeneroFilme);

        const elementoAvaliacao = document.createElement('li');
        const labelAvaliacao = document.createElement('label');
        labelAvaliacao.innerText = "Avaliação: ";
        elementoAvaliacao.appendChild(labelAvaliacao);
        elementoAvaliacao.innerHTML += `${arrayAvaliacoes[i]}`;
        avaliacaoFinal.appendChild(elementoAvaliacao);

        
      const botaoEditar = document.createElement('button');
      botaoEditar.innerText = 'Editar';
      botaoEditar.classList.add('editar');
      botaoEditar.addEventListener('click', () => {
        editarFilme(i);  // Passa o índice do item para edição
      });

      const botaoDeletar = document.createElement('button');
      botaoDeletar.innerText = 'Deletar';
      botaoDeletar.classList.add('deletar');
      botaoDeletar.addEventListener('click', () => {
        deletarFilme(i);  // Passa o índice do item para deletar
      });

      // Adicionando os botões de editar e deletar ao card
      avaliacaoFinal.appendChild(botaoEditar);
      avaliacaoFinal.appendChild(botaoDeletar);
    }
  }

  }

// EVENTOS
button.addEventListener("click", () => {
  const novoFilme = new Filmes(
    nomeTelespectador.value,
    infoFilme.nomeFilme.value,
    infoFilme.genero.value,
    infoFilme.ano.value,
    infoFilme.avaliacao.value
  );

  novoFilme.exibirFilme();
  novoFilme.adicionar();
  novoFilme.listando();
});
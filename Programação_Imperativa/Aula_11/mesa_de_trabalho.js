
//Coleções de filmes

//1 - e nos pediram para passar todos os elementos para letras maiúsculas, o que
//na época tínhamos feito de forma &quot;manual&quot;. Vamos movê-lo para uma maneira mais
//automática usando loops.
function converterMaiusculo(arrayEntrada){
  for(let i = 0; i < arrayEntrada.length; i++){
      arrayEntrada[i] = arrayEntrada[i].toUpperCase()
  }
  return arrayEntrada;
}

let arrayFilmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"];
console.log(converterMaiusculo(arrayFilmes));


//Criação de outra estrutura
//2 - Agora precisamos modificar afunçãode passagemde elemento() que nos permite
//adicionar o conteúdo de nossa matriz de filme animado à matriz de filme original
let novosFilmes = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
function concatArray(arrayEntrada, arrayConcat){
  for (let i = 0; i < arrayConcat.length; i++){
      arrayEntrada.push(arrayConcat[i].toUpperCase());
  }
  return arrayEntrada;
}

console.log(concatArray(arrayFilmes, novosFilmes));

//3- Para este ponto se você decidiu trabalhar em um arquivo diferente em lugar
//para modificar o anterior, lembre-se que tivemos um infiltrado dentro de
//nossos filmes de animação que tivemos que tirar e salvar em outra variável
//antes de fazer a passagem de elementos de um array para outro!
function concatArray2(arrayEntrada, arrayConcat){
  ultimoItem = arrayConcat.pop();
  for (let i = 0; i < arrayConcat.length; i++){
      arrayEntrada.push(arrayConcat[i].toUpperCase());
  }
  return arrayEntrada;
}

let ultimoItem = '';
console.log(concatArray2(arrayFilmes, novosFilmes));

//4 - Finalmente, devemos modificar nossa função comparadora para os filmes
// como temos feito até agora.
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararCalificaciones(asia, europa) {
  let comparacionesAsiaEuropa = []
  for (let i = 0; i < asia.length; i++){
     comparacionesAsiaEuropa[i] = asia[i] == europa[i] ? 'Igual' : 'Diferente';
  }
  return comparacionesAsiaEuropa; 
}

console.log(compararCalificaciones(asiaScores, euroScores));





function pontuacaoMedia(participante) {
  let soma = 0;

  for (let i = 0; i < participante.length; i++) {
    soma += participante[i]
  }
  return (media = soma / participante.length);
}

console.log(pontuacaoMedia([1, 2, 3, 4]));

function pontuacaoMaior(participante) {

  let maior = 0;
  for (let i = 0; i < participante.length; i++) {
    if (participante[i] > maior) {
      maior = participante[i];
    }
  }
  return maior;
}

console.log(pontuacaoMaior([3, 6, 7, 9, 0]));

function competicao(p1, p2, p3) {
  mp1 = pontuacaoMedia(p1);
  mp2 = pontuacaoMedia(p2);
  mp3 = pontuacaoMedia(p3);
  max1 = pontuacaoMaior(p1);
  max2 = pontuacaoMaior(p2);
  max3 = pontuacaoMaior(p3);
  if (mp1 > mp2 && mp1 > mp3) {
    console.log("O vencedor na modalidade 1 é o participante 1 com maior media = " + mp1);
  }
  else if (mp2 > mp1 && mp2 > mp3) {
    console.log("O vencedor na modalidade 1 é o participante 2 com maior media = " + mp2);
  }
  else
    console.log("O vencedor na modalidade 1 é o participante 3 com maior media = " + mp3);

  if (max1 > max2 && max1 > max3) {
    console.log("O vencedor na modalidade 2 é o participante 1 com maior pontuação = " + max1);
  }
  else if (max2 > max1 && max2 > max3) {
    console.log("O vencedor na modalidade 2 é o participante 2 com maior pontuação = " + max2);
  }
  else
    console.log("O vencedor na modalidade 2 é o participante 3 com maior pontuação = " + max3);
}

competicao([5, 8, 4, 9, 5], [8, 7, 8, 6, 8], [7, 5, 10, 8, 3]);



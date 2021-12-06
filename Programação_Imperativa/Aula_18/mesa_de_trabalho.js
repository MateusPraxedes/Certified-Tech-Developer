// Você deve criar uma função chamada loopDePares que receba um número como parâmetro e faça loops de 0 a 100 mostrando 
// cada número do loop no console.
// Caso o número da iteração somado com o número passado pelo parâmetro seja par, aparecerá no console: "O número x é par"

function loopDePares (numero){
  for (let index = 0; index <= 100; index++) {
      let soma = index + numero
      if ((soma) % 2 == 0) {
          console.log('O número ' + soma + ' é par')
      } else {
          console.log(soma);
      }
  }
}

//loopDePares(1);

// Você deve criar uma função chamada loopDeImpares que receba um número e uma palavra como parâmetro e faça loops de 0 a 100 mostrando 
// cada número do loop no console.
// Agora, modifique o código para que, caso esse número somado com o número passado por parâmetro seja ímpar, mostre a palavra 
// passada por parâmetro no console.


function loopDeImpares (numero, palavra){
  for (let index = 0; index <= 100; index++) {
      let soma = index + numero
      if ((soma) % 2 != 0) {
          console.log(soma + ' ' + palavra)
      } else {
          console.log(soma);
      }
  }
}

//loopDeImpares(3, 'Sou ímpar');

// Você deve criar uma função chamada soma que receba um número como parâmetro e retorne a soma de todos os seus números anteriores, 
// incluindo o número recebido por parâmetro.
// Exemplo: 
// soma(3) deve retornar 6 pois faz (1 +2 +3)
// soma(8) deve retornar 36

function soma (numero) {
  let acumulador = 0;
  for (let index = 1; index <= numero; index++) {
      acumulador += index; 
  }
  return acumulador;
};

//console.log(soma(3));


// Você deve criar uma função chamada newArray que receba um número como parâmetro e retorne um novo array com a quantidade de 
// elementos equivalente ao valor do número que você passou por parâmetro.
// Exemplo: 
// newArray(5) deve retornar [1,2,3,4,5]
// newArray(10) deve retornar [1,2,3,4,5,6,7,8,9,10]

function newArray (numero) {
  let novoArray = [];
  for (let index = 1; index <= numero; index++) {
      novoArray[index - 1] = index;
  }
  return novoArray;
}

//console.log(newArray(5));

// Você deve criar uma função chamada split que receba uma string e simule o comportamento da função split original. 
// Se você não sabe como funciona, o Google pode ajudá-lo.
// Importante: Você não pode usar o String.split()
// Exemplo: 
// split(“olá”) deve retornar [”o”,”l”,”á”]
// split(“tchau”) deve retornar [“t”,“c”,”h”,”a”,”u”]

let meuArray = (texto) =>
{
  let palavra = [];
  for (let index = 0; index < texto.length; index++) {
      palavra[index] = texto[index];
  }
  return palavra;
}

//console.log(meuArray('Olá'));


// Você deve criar uma função chamada moverZeros que receba um array como parâmetro e retorne outro com os números 0 ordenados ao final.

// Exemplo: 
// moverZeros([false,1,0,1,2,0,1,3,"a"]) deve retornar [false,1,1,2,1,3,"a",0,0]
// moverZeros([1,2,0,1,0,1,0,3,0,1]) deve retornar [1,2,1,1,3,1,0,0,0,0]

let MoveZeros = (array) => {
  let novoArray = array.filter((valor) => {return valor != 0});
  array.forEach(valor => {
      if (valor == 0) {
          novoArray.push(valor);
      }  
  });
  return novoArray;
};

console.log(MoveZeros([false,1,0,1,2,0,1,3,"a"]));


// Você deve criar uma função chamada arrayHandler que receba dois arrays de igual tamanho como parâmetros e 
// exiba no console: "Eu sou {elemento do array 1} e eu sou {elemento do array 2}".
// Exemplo:
// arrayHandler([1,2,3], [“o”,”l”,”á”]) deve mostrar: 
// Eu sou 1 e eu sou o
// Eu sou 2 e eu sou l
// Eu sou 3 e eu sou á

let arrayHandler = (array1, array2) => {
  array1.forEach((valor, index) => {
      console.log ('Eu sou ' + valor + ' e eu sou o ' + array2[index]);
  }
  );

}
// arrayHandler([1,2,3], ['o','l','á']) 


// Você deve criar uma função chamada arrayObjects que receba um número como
// parâmetro e retorne um array de objetos que tem uma propriedade chamada valor
// que contém o valor do número e seus anteriores.
// Exemplo:
// arrayObjects(5) deve retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4}, {valor: 5}]
// arrayObjects(3) deve retornar [{valor: 1}, {valor: 2}, {valor: 3}]




let arrayObjects = (index) =>{
  let arraynovo = []
  
  for (let i = 1; i <= index; i++) {
      arraynovo.push ({valor: i})
  
      }
      console.log (arraynovo)
  }
  
  arrayObjects (5)


// Você deve criar uma função chamada arrayObjectsTwo que recebe um número e
// uma palavra como parâmetro e retorna um array de objetos que possui: uma
// propriedade nomeada pela palavra passada por parâmetro e o valor dessa
// propriedade deve ser o número passado por parâmetro e seus anteriores.
// Exemplo:
// arrayObjectsTwo(5, “olá”) deve retornar [{olá: 1}, {olá: 2}, {olá: 3}, {olá: 4}, {olá: 5 }]
// arrayObjectsTwo(3, “tchau”) deve retornar [{tchau: 1}, {tchau: 2}, {tchau: 3}]

  let arrayObjectsTwo = (index,palavra) =>  {


    let array = []
    for (let i = 1; i <= index; i++) {
        array.push({[palavra]:i})
    
    }
    console.log(array)
    }
    
    arrayObjectsTwo(7, "olá");
    arrayObjectsTwo(3, "tchau");
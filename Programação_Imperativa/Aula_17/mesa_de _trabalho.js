let Numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let Soma = Numeros.reduce((acumulador, valor) => {return acumulador + valor});

console.log(Soma);

let NovoArray = Numeros.map((valor, index) => {return index / Soma});

console.log(NovoArray);
console.log(NovoArray);
// Crie uma função que receba um array de palavras e um número, e que retorna uma matriz (array) com apenas as palavras que têm mais 
//do que uma quantidade de letras maior do que o número informado. (verifique como funciona o método filter ())

let Palavras = ['Carro', 'Boneca', 'Televisão', 'Notebook'];

let PalavrasMaior = Palavras.filter((palavras) => {return palavras.length > 5})

console.log(PalavrasMaior);



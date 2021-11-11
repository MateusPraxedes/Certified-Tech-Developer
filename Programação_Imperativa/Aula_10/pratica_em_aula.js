let nome = "  Marcos Silva Santana  ";

console.log( nome.length );//retorna a quantidade 

console.log( nome.trim() ); // retira os espaços vazios 
let nome2 = nome.trim();
console.log( nome2.split(",") ); // quebra a string 

let nomes = ["Marcos", "Bruno", "Glauber", "Ruggiero"];
console.log(nomes.length);
nomes.push("Fulano", "Ciclano");
console.log(nomes);
let ultimoValor = nomes.pop();
console.log(nomes);
console.log(ultimoValor)

let primeiroValor = nomes.shift();
console.log(nomes);
console.log(primeiroValor);

nomes.unshift("nome", "nome");
console.log(nomes);

let strNomes = nomes.join(" - ");
console.log(strNomes);

let y = nomes.lastIndexOf("nome");
console.log(y);

let x = nomes.includes("nome");
console.log(x);





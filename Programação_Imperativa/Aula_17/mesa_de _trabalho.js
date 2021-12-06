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

// Crie um array de objetos literais, onde cada objeto será um aluno e terá dois atributos: nome e nota. Crie duas funções que ordenam 
//o array: uma ordenará os alunos em ordem alfabética e a outra o fará por nota, da mais alta para a mais baixa. 

let Alunos = [{Nome: 'Maria', Nota: 7.5}, {Nome: 'Carlos', Nota: 8}, {Nome: 'João', Nota: 5}];
console.log(Alunos.sort((a, b) =>  {return a.Nome.localeCompare(b.Nome)}));
console.log(Alunos.sort((a, b) => {return b.Nota - a.Nota}));

// Temos que fazer um sistema para um Agricultor controlar suas vendas.
// Ele tem um controle de vendas em um caderno, onde os produtos estão organizados por nome, preço e quantidade vendida. 
// Portanto, crie um array de objetos literais com essas informações. No sistema, 
// você tem que adicionar uma função (ou várias) que realize os seguintes passos:

let controleDeVendas = [ { nome: 'Café', preço: 30,  quantidadeVendida: 3000 },
 { nome: 'Arroz', preço: 20, quantidadeVendida: 2000  },
 { nome: 'Milho', preço: 10, quantidadeVendida: 1000  }
];


console.log(controleDeVendas);

// Calcular o lucro total de todos os produtos;

let  lucroTotal = (produtos) => {
  let lucroPorProduto = produtos.map( produto => produto.preço * produto.quantidadeVendida) 
  let resultado = lucroPorProduto.reduce((acum, elemento) => acum +elemento);
  console.log("\nLucro total: "+resultado);
}


lucroTotal(controleDeVendas);



// let lucroTotal = controleDeVendas.reduce((acumulador, valor) =>  acumulador + valor.preço, 0);

// console.log(lucroTotal);

// Permitir pesquisar um produto pelo nome e calcular seu lucro total;



let consultadeProduto = (produtos, produtoAEncontrar) => {
  let x = produtos.find(produto => produto.nome === produtoAEncontrar)
  let y =  x.preço * x.quantidadeVendida;
  
  console.log("\n",x, "\nLucro total"+"("+x.nome+"):",y);

}
consultadeProduto(controleDeVendas,'Arroz');


let  venderamMais = (produtos, num) => {
  let resultado = produtos.filter( produto => produto.quantidadeVendida > num)
  return resultado
}

console.log(venderamMais(controleDeVendas, 1000))









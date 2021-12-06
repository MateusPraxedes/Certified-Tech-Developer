const arquivos = [
  {
    "sexo": "F",
    "nome": "Abigael Natte",
    "altura": 1.61
  },
  {

    "sexo": "M",
    "nome": "Ramon Connell",
    "altura": 1.75
  },
  {

    "sexo": "M",
    "nome": "Jarret Lafuente",
    "altura": 1.55
  },
  {

    "sexo": "F",
    "nome": "Ansel Ardley",
    "altura": 1.67
  },
  {

    "sexo": "F",
    "nome": "Jacki Shurmer",
    "altura": 1.75
  },
  {

    "sexo": "M",
    "nome": "Jobi Mawtus",
    "altura": 1.88
  },
  {

    "sexo": "M",
    "nome": "Thomasin Latour",
    "altura": 1.67
  },
  {

    "sexo": "F",
    "nome": "Lonnie Verheijden",
    "altura": 1.63
  },
  {

    "sexo": "M",
    "nome": "Alonso Wannan",
    "altura": 1.92
  },
  {

    "sexo": "F",
    "nome": "Bendite Huggett",
    "altura": 1.80
  }
]

console.log(arquivos);

function maiorMenorPessoa(listaPessoas) {
  let pessoasCresc = listaPessoas.sort((a, b) => {
    return a.altura - b.altura;
  });

  let menorPessoa = pessoasCresc[0];
  let maiorPessoa = pessoasCresc[pessoasCresc.length - 1];

  return `maior pessoa ${maiorPessoa.nome}: ${maiorPessoa.altura}m, \nmenor pessoa ${menorPessoa.nome}: ${menorPessoa.altura}m`
}

console.log(maiorMenorPessoa(arquivos))



function alturaMulheres(listaPessoas) {

  let result = listaPessoas.filter(index => index.sexo === 'F');
  let soma = result.reduce((acum, elemento) => acum + elemento.altura);
  let media = soma / soma.length;
  return media;
}



let mediaAlturaMulheres = (listaPessoas) => {
  let listaMulheres = listaPessoas.filter((item) => {
    return item.sexo === "F";
  }).map((item) => {
    return item.altura;
  });
  return (listaMulheres.reduce((acc, num) => {
    return acc + num;
  }) / listaMulheres.length
  );
}


console.log(mediaAlturaMulheres(arquivos));

let numeroHomens = (listaPessoas) => {
  return listaPessoas.filter((item) => {
    return item.sexo === "M";
  }).length
}


console.log(numeroHomens(arquivos));
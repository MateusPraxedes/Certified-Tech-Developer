let listaDeAlunos = require('./modulo');
let alunos = [];

function aluno(nome, qtdFaltas, notas) {
  this.nome = nome;
  this.qtdFaltas = qtdFaltas;
  this.notas = notas;
  this.calcularMedia = () => {
    let somaNotas = 0
    this.notas.map(nota => {
      somaNotas += nota;
    });

    let qtdNotas = this.notas.length;

    return somaNotas / qtdNotas;
  },
    this.faltas = () => {
   
    return ++this.qtdFaltas;
    }
}

for (let i = 0; i < listaDeAlunos.length; i++) {
  alunos.push(new aluno(listaDeAlunos[i].nome, listaDeAlunos[i].qtdFaltas, listaDeAlunos[i].notas));
}

console.log(alunos)

console.log(alunos[0].calcularMedia())
console.log(alunos[0].faltas())






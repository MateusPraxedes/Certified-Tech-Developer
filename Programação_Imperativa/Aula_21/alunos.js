function Aluno(nome, qtdFaltas, notas) {
  this.nome = nome;
  this.qtdFaltas = qtdFaltas;
  this.notas = notas;

  this.media =
      this.notas.reduce((acc, num) => {
          return acc + num;
      }) / this.notas.length;

  this.addFalta = () => {
      return this.qtdFaltas++;
  };
};

module.exports = Aluno;
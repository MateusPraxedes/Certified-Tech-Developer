let espectadores = []

function Espectador(idade, opiniao) {
  this.idade = idade
  this.opiniao = opiniao
}

espectadores.push(new Espectador(17, 'ótimo'))
espectadores.push(new Espectador(13, 'bom'))
espectadores.push(new Espectador(15, 'regular'))
espectadores.push(new Espectador(18, 'ótimo'))
espectadores.push(new Espectador(22, 'bom'))
espectadores.push(new Espectador(34, 'ótimo'))
espectadores.push(new Espectador(50, 'regular'))
espectadores.push(new Espectador(25, 'bom'))
espectadores.push(new Espectador(30, 'ótimo'))
espectadores.push(new Espectador(14, 'regular'))
espectadores.push(new Espectador(21, 'ótimo'))
espectadores.push(new Espectador(20, 'bom'))
espectadores.push(new Espectador(15, 'regular'))
espectadores.push(new Espectador(22, 'ótimo'))
espectadores.push(new Espectador(23, 'bom'))

// console.log(espectadores);

// a média das idades das pessoas que responderam ótimo;

function media(array) {
  let filtroOtimo = array.filter(opiniao => {
    return opiniao.opiniao == 'ótimo'
  })

  // console.log(filtroOtimo);

  let mapaOtimo = filtroOtimo.map(opiniao => {
    return opiniao.idade
  })

  // console.log(mapaOtimo);

  let soma = mapaOtimo.reduce((a, e) => {
    return a + e
  })

  console.log(
    `\nA média das idades das pessoas que responderam ótimo é: ${(
      soma / mapaOtimo.length
    ).toFixed(3)}\n`
  )
}

media(espectadores)

// a quantidade de pessoas que responderam regular;

function qtdRegular(array) {
  let filtroRegular = array.filter(opiniao => {
    return opiniao.opiniao == 'regular'
  })
  console.log(
    `A quantidade de pessoas que responderam regular foi: ${filtroRegular.length}\n`
  )
}

qtdRegular(espectadores);

// console.log(espectadores);

function porcentBom(array) {
  let filtroBom = array.filter(opiniao => {
    return opiniao.opiniao == 'bom'
  })

  console.log(
    `A porcentagem de pessoas que responderam bom entre todos os espectadores analisados é: ${(
      filtroBom.length / espectadores.length
    ).toFixed(1)}%\n`
  )
}

porcentBom(espectadores)



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

}

function Curso(nomeDoCurso, notaApr, faltaMax, listaAlunos) {

  this.nomeDoCurso = nomeDoCurso;
  this.notaApr = notaApr;
  this.faltaMax = faltaMax;
  this.listaAlunos = listaAlunos;

  this.addAluno = (nome, qtdFaltas, notas) => {
    this.listaAlunos.push(new aluno(nome, qtdFaltas, notas))

  }

  this.aprovado = (nome) => {

   let aluno = this.listaAlunos.find((procuraAluno) => procuraAluno.nome === nome);
    
    if ((aluno.media >= this.notaApr && aluno.qtdFaltas < this.faltaMax) ||
    
    (aluno.media >= this.notaApr * 1.1)) {
    
    aluno.qtdFaltas === this.faltaMax && 
      return `aluno  '+ ${aluno.nome} + foi aprovado' aluno ${aluno.nome} foi aprovado`
    
    } else {
    
    return `aluno ${aluno.nome} foi reprovado`
    
    }
    
    return (
    
    (aluno.media >= this.notaApr && aluno.qtdFaltas < this.faltaMax) || (aluno.qtdFaltas === this.faltaMax && aluno.media >= this.notaApr * 1.1)
    
    );
  }

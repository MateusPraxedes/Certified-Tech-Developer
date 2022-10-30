let listaEstudantes = JSON.parse(require("./listaEstudantes"));
let Aluno = require("./alunos");


function Curso(nomeDoCurso, notaApr, faltaMax, listaAlunos=[]) {
    this.nomeDoCurso = nomeDoCurso;
    this.notaApr = notaApr;
    this.faltaMax = faltaMax;
    this.listaAlunos = listaAlunos;

    this.addAluno = (nome, qtdFaltas, notas) => {
        this.listaAlunos.push(new Aluno(nome, qtdFaltas, notas));
    };

    this.aprovado = (nome) => {

        let aluno = this.listaAlunos.find((procuraAluno) => procuraAluno.nome === nome);
        
        return (
            (aluno.media >= this.notaApr && aluno.qtdFaltas < this.faltaMax) ||
            (aluno.qtdFaltas === this.faltaMax && aluno.media >= this.notaApr * 1.1)
        );
    };

    this.listaAprovados = () => {
        return this.listaAlunos.map((item) => {
            return (
                (item.media >= this.notaApr &&
                    item.qtdFaltas < this.faltaMax) ||
                (item.qtdFaltas === this.faltaMax &&
                    item.media >= this.notaApr * 1.1)
            );
        });
    };
}

function adicionarEstudante(lista, curso) {
    for (i = 0; i < lista.length; i++) {
        curso.addAluno(lista[i].nome, lista[i].qtdFaltas, lista[i].notas);
        // console.log(curso);
    }
    return curso;
}

let curso = new Curso("ctd", 8, 4);

adicionarEstudante(listaEstudantes, curso);
console.log(curso)

console.log(curso.aprovado("moises bollela"));
console.log(curso.listaAprovados());

curso.listaAlunos[0].addFalta();
console.log(curso)
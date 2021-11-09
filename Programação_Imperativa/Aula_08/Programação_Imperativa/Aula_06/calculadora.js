function soma(x, y){
  return (x + y);
}


function subtracao(x, y){
  return (x - y);
}

function multiplicacao(x, y){
  return (x * y);
}

function divisao(x, y){
  return (x / y);
}

console.log ("-------------- Teste de Operações / Calculadora --------------");
console.log (soma (3, 5))
console.log (subtracao (5, 3))
console.log (multiplicacao (5, 3))
console.log (divisao (6, 3))
console.log (divisao (13, 0))

function quadradoDoNumero(z){
  return (multiplicacao(z, z))
}

console.log (quadradoDoNumero (4))

function mediaDeTresNumeros(a, b, c){
 return divisao ((soma(a, b) + c), 3)

}

console.log (mediaDeTresNumeros (12, 24, 36))

function calculaPorcentagem(p, o){
  return divisao (multiplicacao (p, o), 100)
}

console.log (calculaPorcentagem(1800, 33))

function geradordeporcetagem(x, y){
  return divisao(multiplicacao(x,100), y);
}

console.log(geradordeporcetagem(13, 100));
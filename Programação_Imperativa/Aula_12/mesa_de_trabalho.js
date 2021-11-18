const alicia = [ 23, 69 , 32];
const bob = [12, 67, 43];

function encontrarGanhador(a , b){
   
  let pontosPrimeiroPartipante = 0;
  let pontosSegundoPartipante = 0;

    for(let i = 0; i < a.length; i++){ 

    if (a[i] >  b[i]){
      pontosPrimeiroPartipante++;
    }
    else 
      pontosSegundoPartipante++}

      if(pontosPrimeiroPartipante > pontosSegundoPartipante){
        console.log("O ganhador é o primeiro participante")
      }
      else
      console.log("O ganhador é o segundo participante");
   
}

encontrarGanhador(alicia, bob);

function sumArray(array){
  let soma = 0;
  for(let i = 0 ; i < array.length; i++){ 

    soma += array[i];
    
}
return soma;
}

console.log(sumArray([1, 2, 3]));
console.log(sumArray([10, 3, 10, 4]));
console.log(sumArray([-5, 100]));

function join(array){
 let string = "";
 for(let i = 0; i < array.length; i++){ 
 string += array[i];}
 return string;
}

console.log(join(["o","l","a"]));
console.log(join(["t","c","h","a","u"]));
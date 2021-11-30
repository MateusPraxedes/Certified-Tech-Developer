let numeros = [2, 4, 6];

// let dobro = numeros.map(function(y) {
//     console.log(y);
//   return y * 2;

// });

// console.log(dobro); 

let  dobro = numeros.map( x => x *2);

console.log(dobro);

let idades = [22, 8, 17, 14, 30];

let maiores = idades.filter( x => x > 18);

console.log(maiores);

// let soma =  () => {
//   numeros.reduce;
//   return acumalador + numero;}


// console.log(numeros)

let soma = numeros.reduce((acumulador, item) => {
  // console.log(acumulador, item);
   return acumulador + item;
})

console.log(soma);

let paises = ['Brasil', 'Cuba', 'Russia']

paises.forEach(function(item){
  console.log("Ola item " + item)
});





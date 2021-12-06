// let Carro = {

//   marca: "Ford",
//   modelo: "Ka",
//   andar: function(){
//     return "Carro "+ this.modelo +" andando";
//   }
  
// }
// console.log(carro.andar());

// function Carro(marca, modelo){

//   this.marca = marca;
//   this.modelo = modelo;
  
// }

let carro = [];
carro.push(new Carro("Tesla", "X"));
carro.push(new Carro("Ford", "Ka"));
let carroNovo = new Carro("Tesla", "X");
let carroNovo1 = new Carro("Ford", "Ka")


console.log(carroNovo);
console.log(carro);


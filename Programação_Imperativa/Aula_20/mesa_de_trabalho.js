
// Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme: ótimo - 3, bom - 2, regular -1.
// Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:
// a média das idades das pessoas que responderam ótimo;
// a quantidade de pessoas que responderam regular;
// a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

let espectadores = [];

function Espectador(idade,opiniao){
    this.idade = idade;
    this.opiniao = opiniao;
}

espectadores.push(new Espectador(17,'ótimo'));
espectadores.push(new Espectador(13,'bom'));
espectadores.push(new Espectador(15,'regular'));
espectadores.push(new Espectador(18,'ótimo'));
espectadores.push(new Espectador(22,'bom'));
espectadores.push(new Espectador(34,'ótimo'));
espectadores.push(new Espectador(50,'regular'));
espectadores.push(new Espectador(25,'bom'));
espectadores.push(new Espectador(30,'ótimo'));
espectadores.push(new Espectador(14,'regular'));
espectadores.push(new Espectador(21,'ótimo'));
espectadores.push(new Espectador(20,'bom'));
espectadores.push(new Espectador(15,'regular'));
espectadores.push(new Espectador(22,'ótimo'));
espectadores.push(new Espectador(23,'bom'));


console.log(espectadores);
// a média das idades das pessoas que responderam ótimo;
let mediadeIdades = (espec) =>{
  let media = espec.filter((item) => {
    return item.opiniao === "ótimo";
  }).map((item) => {
    return item.idade;
  });
  return (media.reduce((acc, num) => {
  return acc + num;
  }) / media.length
  );
}
    

console.log(mediadeIdades(espectadores))


// a quantidade de pessoas que responderam regular;

let opiniaoRegular = (espec) =>{
 
  let regular = espec.filter((item) => {
    return item.opiniao === "regular"; 
  }).map((item) => {
    return item.opiniao;
  });

 return regular.length}
 

console.log(opiniaoRegular(espectadores))


// a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

let porcetagemDeOpiniaoBom = (espec) => {
 
  let todos = espec.map((item) => {
    return item.opiniao;})
   let bom = espec.filter((item) => {
      return item.opiniao === "bom"; 
    }).map((item) => {
      return item.opiniao;
})
return  bom.length / todos.length; }

console.log(porcetagemDeOpiniaoBom(espectadores))
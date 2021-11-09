function podeSubir(altura, vemAcompanhado ){
let podesubir = false;
if (altura > 1.40 && altura < 2){
  return  true; 
}
else if (altura >= 1.20 && vemAcompanhado){
  return true;
}
else{
  return false;
}}

console.log(podeSubir(1.15, true));

function podeSubirMeensagem(altura, vemAcompanhado ){
  if (altura > 1.40 && altura < 2){
    return  console.log("Acesso autorizado"); 
  }
  else if (altura >= 1.20 && vemAcompanhado){
    return console.log("Acesso autorizado somente com acompanhante"); 
  }
  else{
    return console.log("Acesso negado"); 
  }}



podeSubirMeensagem(1.45, false);

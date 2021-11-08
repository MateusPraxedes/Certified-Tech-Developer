function podesubir(altura, vemAcompanhado ){
let podesubir = false;
if (altura > 1.40 && altura < 2){
  return  true; 
}
else if (altura <= 1.40 && vemAcompanhado){
  return true;
}
else{
  return false;
}}

podesubir(1.40, true);

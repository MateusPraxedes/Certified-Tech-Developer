function polegadas_centimetros (a){
   x = a * 2.54;
   console.log(a +" polegadas em centimentros "+ x);

}polegadas_centimetros(2);

function url(x){

  console.log("http://www."+x+".com.br");
}
url("google");

function idade_cachorro(x){
  y = x * 7;
  console.log("A idade do cachorro é:"+y)

}
idade_cachorro(5);
idade_cachorro(4);


function hora_de_trabalho(x){
    
  y = x / 160;
  console.log("O valor da sua hora de trablaho é: "+y)
}

hora_de_trabalho(5000);

function imc(altura, peso){
    
  y =  peso / (altura * altura);

  console.log("O imc é igual a: "+y);
   
}

imc(1.80, 90);

imc(1.70, 90);

function minusculas_maiusculas (nome){
  console.log(nome.toUpperCase());
}

minusculas_maiusculas("mateus praxedes");

function circunferencia(raio){
  
  x  = 2* Math.PI * raio
  console.log("A circunferia de raio: "+raio+" e igual a: "+x);

}

circunferencia(4);

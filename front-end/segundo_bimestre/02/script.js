let nomeCompleto = prompt("Digite seu nome completo:")

if((nomeCompleto == null) ||(nomeCompleto == "") ){
  alert("É obrigatório preencher o nome")  
  nomeCompleto = prompt("Digite seu nome completo:")
}

let telefone = prompt("Digite o seu telefone");

if(((telefone == null) ||(telefone == "") )){
  telefone = prompt("Digite o seu telefone");
}

alert(`Muito obrigado ${nomeCompleto}, um de nossos consultores entrará em contato contigo através do número ${telefone}.`);

let whatsapp = confirm("aceita receber mensagem por WhatsApp")


console.log(`nome completo: ${nomeCompleto} \n telefone: ${telefone} \n Whatsapp:${whatsapp}`)

let nomeCompleto = prompt("Digite seu nome completo:")
let telefone;
let whataapp;
if ((nomeCompleto == null) || (nomeCompleto == "")) {
  alert("É obrigatório preencher o nome")
  nomeCompleto = prompt("Digite seu nome completo:")
  telefone = prompt("Digite o seu telefone") ? (telefone != null) || (telefone != "") : telefone = prompt("Digite o seu telefone");
  alert(`Muito obrigado ${nomeCompleto}, um de nossos consultores entrará em contato contigo através do número ${telefone}.`);
  whatsapp = confirm("aceita receber mensagem por WhatsApp")
  console.log(`nome completo: ${nomeCompleto} \ntelefone: ${telefone} \nWhatsapp: ${whatsapp}`)
}
else if ((nomeCompleto != null) || (nomeCompleto == "") && (telefone != null) || (telefone != "")) {
  telefone = prompt("Digite o seu telefone");
  alert(`Muito obrigado ${nomeCompleto}, um de nossos consultores entrará em contato contigo através do número ${telefone}.`);
  whatsapp = confirm("aceita receber mensagem por WhatsApp")
  console.log(`nome completo: ${nomeCompleto} \ntelefone: ${telefone} \nWhatsapp: ${whatsapp}`)
}






// 1. Selecione o formulário

// 2. Crie da rotina que será disparada a partir do evento de envio

// 2.2. Remova todos os espaços vazios

// 2.1. Remova todos os números permitindo apenas texto

// 3. Capture o evento de envio do formulário e disparar a rotina

let form = document.querySelector('#formularioDeCadastro')
let campo = document.querySelector('.c-form__campo')
let li = document.querySelector('.c-lista__item')


form.addEventListener('submit', function(e){
    e.preventDefault()
    let semDigito = campo.value.replace(/\d+/g,'') 
    let semEspacosVazios = semDigito.replace(/\s+/g,'') 
    li.innerText = semEspacosVazios;
    
})



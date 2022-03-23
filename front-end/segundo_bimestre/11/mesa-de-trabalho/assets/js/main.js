
/* 

    1. Selecione o formulário e o botão do campo de entrada

    2. Crie uma rotina que será disparada a partir do evento de envio

        - 2.1. Remova todos os espaços vazios no início e no fim do texto

        - 2.2. Valide se existem caracteres especiais

            - Se o campo possuir caracteres especiais, apresente um alerta para o usuário com a seguinte mensagem `"Não é permitido o uso de caracteres especiais em sua lista."`. **Nota:** Pode ser utilizado o método `alert()` para simplificar a lógica.

        - 2.3. Caso passe na validacão, apresente o item no elemento DOM `<li class="c-lista__item">`.

    3. Crie uma rotina que será disparada sempre que o usuário tirar o foco da campo de entrada

        - 2.1. Valide se o campo esta vazio

            - Se o campo estiver vazio, desative o botão `<button class="c-form__botao u-my" type="submit">Adicionar item</button>`.

        - 2.2. Valide se existem caracteres especiais 

            - Se o campo possuir caracteres especiais, apresente a seguinte mensagem no console do navegador `"Não é permitido o uso de caracteres especiais em sua lista."`.
*/

let form = document.querySelector('#formularioDeCadastro');
let campo = document.querySelector('.c-form__campo');
let li = document.querySelector('.c-lista__item')


form.addEventListener('submit', function(e){
    e.preventDefault()
   let ValidacaoTrim = campo.value.trim()
   if(caractersEspeciais(ValidacaoTrim)){
   alert('Não é permitido o uso de caracteres especiais em sua lista.')
   }else{
    li.innerText = ValidacaoTrim;
}
  })

  let btn = document.querySelector('.c-form__botao')
 
  campo.addEventListener('blur', function(e){
    if(campo.value == ''){
       btn.disabled = true;
    }
    else if(caractersEspeciais(campo.value)){
        console.log('Não é permitido o uso de caracteres especiais em sua lista.')
    }
    else if(!caractersEspeciais(campo.value) && campo.value !== '' ){
        btn.disabled = false;}
})


function caractersEspeciais(v){
    let regexp = /[$*&@#]/g;
    let validacão = regexp.test(v);
    return validacão;
}

// Habilitar o button quando houver algum caracter no campo

campo.addEventListener('change', function(e){
    if(!caractersEspeciais(campo.value) && campo.value !== '')
       btn.disabled = true;
    })


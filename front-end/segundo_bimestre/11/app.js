
// 1. Seleciona o formulário
var campoNome = document.querySelector('#nome');

// 2. Cria a rotina que será disparada após o envio do formulário
function validarEnviarDadosDoFormulario(evento) {
    
    // Captura do valor do campo nome
    var valorDoCampoNome = evento.target.value.trim();
    
    // Resultado das condicionais de validação (retornará true ou false)
    var campoEstaVazio = estaVazio(valorDoCampoNome);
    var campoPossuiNumeros = possuiNumeros(valorDoCampoNome);
    var campoPossuiCaracteresEspeciais = possuiCaracteresEspeciais(valorDoCampoNome);
    var campoPossuiMaisDeVinteCaracteres = possuiMaisDeVinteCaracteres(valorDoCampoNome)
    
    // Condicionais de validação para apresentação das mensagens para o usuário
    if(campoEstaVazio) {
        console.log('Campo é obrigatório e precisa ser preenchido!');
    }
    else if (campoPossuiMaisDeVinteCaracteres) {
        console.log('Campo não pode ultrapassar vinte caracteres');
    }
    else if(campoPossuiNumeros) {
        console.log('Campo não pode ter números!');
    }
    else if(campoPossuiCaracteresEspeciais) {
        console.log('Campo não pode conter caracteres especiais');
    }
    else {
        console.log('Está tudo ok para envio');
    }
        
}

// 2.1. Implementação das validações

// 2.1.1. Verifica se o campo esta vazio
function estaVazio(valorDoCampo) {

    var respostaDaValidacao = valorDoCampo === '';
    
    return respostaDaValidacao;
}

// 2.1.2. Verifica se o campo possui números
function possuiNumeros(valorDoCampo) {

    var expressaoRegular = /\d+/g;
        
    var respostaDaValidacao = expressaoRegular.test(valorDoCampo);

    return respostaDaValidacao;
}

// 2.1.3. Verifica se o campo possui alguns caracteres especiais
function possuiCaracteresEspeciais(valorDoCampo) {

    var expressaoRegular = /[$*&@#]/g;
        
    var respostaDaValidacao = expressaoRegular.test(valorDoCampo);

    return respostaDaValidacao;
}

// 2.1.4. Verifica se o campo possui no máximo vinte caracteres
function possuiMaisDeVinteCaracteres(valorDoCampo) {

    var numeroDeCaracteres = valorDoCampo.length;

    var limiteDeCaracteres = 20;

    var respostaDaValidacao = numeroDeCaracteres > limiteDeCaracteres;

    return respostaDaValidacao;
    
}

// 3. Captura o evento de envio dos dados do formulário e executar a rotina
/*
    focus
    blur
    change
*/
campoNome.addEventListener('blur', validarEnviarDadosDoFormulario);
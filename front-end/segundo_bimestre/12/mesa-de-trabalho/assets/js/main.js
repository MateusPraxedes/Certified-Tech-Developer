
var formulario = document.forms['formularioDeCadastro'];

formulario.addEventListener('submit', function(evento) {

    var valorDoCampoItem = evento.target['item'].value.trim();
    
    // 1. Crie um objeto literal para armazenar os itens considerando as propriedades: id, tarefa, autor.
    
    // 2. Converta o objeto literal em um json.

    // 3. Armazene o json no localStorage ou sessionStorage.

});

let validacao = localStorage.getItem("Json");



if (validacao === null) {
    console.log('LocalStorage Vazio')
   }



let  objetoLiteral = {
    id : 1,
    tarefa: 'Fazer um bolo',  
    autor:  'Mateus',
    MetodoData: data = () => {
        let date = new Date()
        let dia  = date.getDate();
        var mes = date.getMonth();
        var ano = date.getFullYear();  
        var hora = date.getHours(); 
        var min = date.getMinutes() ; 
         

        return `${dia}/${++mes}/${ano},  ${hora}h:${min}min`;
    } ,
}


objetoLiteral.data = objetoLiteral.MetodoData()


// console.log(data)

let json = JSON.stringify(objetoLiteral); 

localStorage.setItem("Json", json );

console.log(json)





















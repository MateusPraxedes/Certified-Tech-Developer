
var formulario = document.forms['formularioDeCadastro'];

formulario.addEventListener('submit', function(evento) {

    var valorDoCampoItem = evento.target['item'].value.trim();
    
    // 1. Crie um objeto literal para armazenar os itens considerando as propriedades: id, tarefa, autor.
    
    // 2. Converta o objeto literal em um json.

    // 3. Armazene o json no localStorage ou sessionStorage.

});

let lista = document.querySelector('.c-lista');



function f() {
    fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(r => {return r.json();
  })
    .then(r => {
      console.log(r)
      })
    }
  

    f()
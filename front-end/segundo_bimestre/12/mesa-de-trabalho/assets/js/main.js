// 1. Crie um objeto literal para armazenar os itens considerando as propriedades: id, tarefa, autor.

// 2. Converta o objeto literal em um json.

// 3. Armazene o json no localStorage ou sessionStorage.

let validacao = localStorage.getItem("Json");
let btn = document.createElement('button');

if (validacao === null) {
    console.log("LocalStorage Vazio");
    alert('LocalStorage Vazio')
    btn.innerText = 'Ativar'
    document.body.appendChild(btn)
    btn.setAttribute("onclick", "ativar()")
} else{
    let span = document.createElement("span");
    let body = document.querySelector("body");
    span.innerText = localStorage.getItem("Json");
    body.appendChild(span);
}

function ativar() {
  let objetoLiteral = {
    id: 1,
    tarefa: "Fazer um bolo",
    autor: "Mateus",
    MetodoData: (data = () => {
      let date = new Date();
      let dia = date.getDate();
      let mes = date.getMonth();
      let ano = date.getFullYear();
      let hora = date.getHours();
      let min = date.getMinutes();

      return `${dia}/${++mes}/${ano},  ${hora}h:${min}min`;
    }),
  };

  objetoLiteral.data = objetoLiteral.MetodoData();

  let json = JSON.stringify(objetoLiteral);

  localStorage.setItem("Json", json);

  console.log(json);

  let span = document.createElement("span");
  let body = document.querySelector("body");

  span.innerText = json;
  body.appendChild(span);
  body.removeChild(btn);
  
}

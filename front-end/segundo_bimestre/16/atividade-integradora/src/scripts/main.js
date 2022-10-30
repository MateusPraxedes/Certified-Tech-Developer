let email = document.querySelector("#email");
let senha = document.querySelector("#senha");
let form = document.querySelector("form");
let body = document.querySelector("body");
let btn = document.querySelector("#btn");

window.addEventListener("load", (e) =>  
  console.log(e)
);

let ul = document.createElement("ul");
form.appendChild(ul);
function criarli() {
  let li = document.createElement("li");
  ul.appendChild(li);
  li.classList.add("erro");
  return li;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log(e)
  ul.innerHTML = "";
  if (email.value === "") {
    criarli().innerText = "Email não preenchido";
  }
  if (senha.value === "") {
    criarli().innerText = "Senha não preenchida";
  }
});

fetch("https://ctd-todo-api.herokuapp.com")
  .then((r) => r)
  .then((r) => console.log(r));

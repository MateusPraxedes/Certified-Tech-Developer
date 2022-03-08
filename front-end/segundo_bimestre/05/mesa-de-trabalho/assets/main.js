let section = document.querySelector("#carrinho");
console.log(section)
let ul = document.createElement("ul");

ul.classList.add("lista");

section.appendChild(ul);

let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");
let li5 = document.createElement("li");

li1.classList.add("lista__item");
li2.classList.add("lista__item");
li3.classList.add("lista__item");
li4.classList.add("lista__item");
li5.classList.add("lista__item");


li1.innerText = "Carro"
li2.innerText = "Bike"
li3.innerText = "Patinete"
li4.innerText = "Celular"
li5.innerText = "Carregador"


ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);


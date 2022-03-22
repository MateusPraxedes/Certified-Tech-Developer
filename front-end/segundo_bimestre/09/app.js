let btn = document.querySelector(".l-sidebar__btn");
let sidebar = document.querySelector(".l-sidebar");
let body = document.querySelector("body");

//    1. **(20pts)** Esta sessão deverá ser apresentada sempre que houver o click no **botão Menu**: `<button class="l-sidebar__btn"type="button">Menu</button>`.

//     1.1. Quando houver o click do usuário, a sidebar deverá ser apresentada: `<div class="l-sidebar">`

function exibirSidebar(e) {
  sidebar.classList.add("l-sidebar--open");
  console.log(e);
}

btn.addEventListener("click", exibirSidebar);

// 2. **(20pts)** O usuário poderá usar o teclado para abrir ou fechar a sidebar. No caso, as tecla `Space`

function exibirSidebarComSpace(e) {
  if (e.code == "Space") {
    sidebar.classList.toggle("l-sidebar--open");
  }
}

body.addEventListener("keydown", exibirSidebarComSpace);



// 3. **(20pts)** O usuário poderá usar o mouse para abrir ou fechar a sidebar. No caso, um duplo click em qualquer local do site irá abrir ou fechar a sidebar.

function exibirSidebarComDbl() {
  sidebar.classList.toggle("l-sidebar--open");
}

body.addEventListener("dblclick", exibirSidebarComDbl);

// 4. **(20pts)** Um boxe de texto irá acompanhar o cursor do mouse.

// 4.1. O texto deverá mudar quando o cursor do mouse sobrepor qualquer uma das sessão do site:

// - Receberá o texto `Bem vindo`.
// - Receberá o texto `Sobre mim`.
// - Receberá o texto `Contatos`.

let sobre = document.querySelector("#sobre-mim");
let span = document.createElement("span");
let bemVindo = document.querySelector(".bg__profile");
let contatos = document.querySelector("#contatos");

// function exibirTooltipBemVindo(e) {
//   bemVindo.setAttribute("title", "Bem vindo");
//   console.log(e);
// }

// bemVindo.addEventListener("mousemove", exibirTooltipBemVindo);

// function exibirTooltipSobreMim(e) {
//   sobre.setAttribute("title", "Sobre mim");
//   console.log(e);
// }

// sobre.addEventListener("mouseover", exibirTooltipSobreMim);

// function exibirTooltipContatos(e) {
//   contatos.setAttribute("title", "Contatos");
//   console.log(e);
// }

// contatos.addEventListener("mouseover", exibirTooltipContatos);


function exibirTooltipBemVindo(e) {
  span.innerText = 'Bem vindo!'
  span.style.position = 'absolute'
  body.appendChild(span)
  let xPos = e.pageX + 30 ;
  let yPos = e.pageY - 5;
  span.style.left = xPos + 'px';
  span.style.top = yPos + 'px';
}

bemVindo.addEventListener("mousemove", exibirTooltipBemVindo);

function exibirTooltipSobreMim(e) {
  span.innerText = 'Sobre Mim'
  span.style.position = 'absolute'
  body.appendChild(span)
  let xPos = e.pageX + 30 ;
  let yPos = e.pageY - 5;
  span.style.left = xPos + 'px';
  span.style.top = yPos + 'px';
}

sobre.addEventListener("mousemove", exibirTooltipSobreMim);

function exibirTooltipContatos(e) {
  span.innerText = 'Contato'
  span.style.position = 'absolute'
  body.appendChild(span)
  let xPos = e.pageX + 30 ;
  let yPos = e.pageY - 5;
  span.style.left = xPos + 'px';
  span.style.top = yPos + 'px';
}

contatos.addEventListener("mousemove", exibirTooltipContatos);

// 5. **(20pts)** Corrija o erro presente no console do DevTools.

  // Corrigir o erro estava na ligação HTML e JS, trocamos o "HREF" por "SRC"//
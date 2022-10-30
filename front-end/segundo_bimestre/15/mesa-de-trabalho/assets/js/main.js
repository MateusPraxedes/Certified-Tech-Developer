let lista = document.querySelector(".c-lista");
let ul = document.querySelectorAll(".c-lista__item");

function f() {
  fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
    .then((r) => {
      return r.json();
    })
    .then((tarefas) => {
      lista.removeChild(ul[0]);
      tarefas.forEach(function (tarefa) {
        let li = document.createElement("li");
        li.classList.add("c-lista__item");
        li.innerText = tarefa.title;
        lista.appendChild(li);
      });
    //   const t = tarefas.map(tarefa => tarefa.title
    // );
    // console.log(t)
    });
}

f();

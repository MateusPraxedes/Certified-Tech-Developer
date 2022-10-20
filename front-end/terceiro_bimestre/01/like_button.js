function MeuComponente(){
  return React.createElement('button',{onClick: () => alert('clicou'),
  style:{
    backgroundColor: 'red',
  }}, 'Clique aqui');
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(MeuComponente());
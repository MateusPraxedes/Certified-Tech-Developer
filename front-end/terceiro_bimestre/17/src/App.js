import Card from './components/Card';
import Increment from './components/Increment';


const App = () =>  {
  const user ={
    nome: "Mateus Praxedes",
    idade: 25
  }




  return (
    <>
    <div>
      <h1>Hello World</h1>

      <Card{...user} />

      <Increment />
      </div>
    </>
  );
}

export default App;
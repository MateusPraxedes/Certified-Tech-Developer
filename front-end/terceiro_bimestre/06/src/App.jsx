import ItemList from "./components/ItemList";
import { carros } from "./mock/carros";



const App = () => {

  return (
    <ul>
      {carros.map((carro) => (
        <ItemList key={carro.id} item={carro}/>
      ))}
    </ul>
  )
}

export default App

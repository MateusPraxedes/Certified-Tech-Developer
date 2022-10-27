import './App.css'
import React from 'react'
import ItemList from './components/itemList'
import {cities} from './mock/cities'


/* Array de cidades que deve ser utilizado na atividade */



function App() {

  return (
    <div>
      <ul>
        {cities.map((city) => (
          <ItemList key={city.id} item={city}/>
        ))}
      </ul>

    </div>
  )
}

export default App
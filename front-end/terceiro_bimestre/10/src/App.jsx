import { useState } from 'react'
import Card from './components/Card/Card'
import "./styles.css"


const App = () => {
  const [cartao, setCartao] = useState({nome: '', numero: '', validade: '', cod: '', cor: ''})
  const [cartoes, setCartoes] = useState([])
  const [error, setError] = useState(false)
  

  const handleChange = (e) => {
    e.preventDefault()
    setCartoes([...cartoes, cartao])
    setCartao({nome: '', numero: '', validade: '', cod: '', cor: ''})


  }

  return (
    <>
      <fieldset>
        <h1>Criar Cartão</h1>
      <form onSubmit={handleChange}>
      <div className='modulosForm'>
        <div className='input'>
      <input
        type="text"
        id="nome"
        value={cartao.nome}
        placeholder='Nome do Titular'
        onChange={(event) => setCartao({...cartao, nome: event.target.value})}
      />
      </div>
      <div className='input'>
      <input
        type="text"
        id="numero"
        value={cartao.numero}
        placeholder='Número do cartão'
        onChange={(event) => setCartao({...cartao, numero: event.target.value})}
      />
      </div>
    </div>
      <div className='modulosForm'>
      <input
        type="text"
        id="validade"
        value={cartao.validade}
        placeholder='Data de Validade'
        onChange={(event) => setCartao({...cartao, validade: event.target.value})}
      />
      <input
        type="text"
        id="cod"
        value={cartao.cod}
        placeholder='Código de segurança'
        onChange={(event) => setCartao({...cartao, cod: event.target.value})}
      />
      </div>
      <label htmlFor="color"></label>
      <div>
      <input
        type="color"
        id="Validade"
        onChange={(event) => setCartao({...cartao, cor: event.target.value})}
      />
      </div>

      <input type="submit" />
      </form>
      </fieldset>
      

      {cartoes.map((cartao, index) => (
        <Card key={index} cartao={cartao}/>
      ))}


    </>
  )
}

export default App

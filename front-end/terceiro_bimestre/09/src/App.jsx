import { useState } from 'react'


function App() {
const [nomes, setNomes] = useState([])
  
  const subimit = (event) => {
    event.preventDefault()
    setNomes('')
  }

  return (
    <>
    <h1>Formulario</h1>
    <form onSubmit={subimit}>
      <input value={nomes} onChange={(event ) => {
       setNomes(event.target.value)
       console.log(nomes)
      }}/>

     <input type="submit" />
    </form>
    </>
  )
}

export default App

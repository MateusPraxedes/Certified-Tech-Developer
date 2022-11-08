import { useState } from 'react'
import "./styles.css";

function App() {
  const[disciplina, setDisciplina] = useState('')
  const [quantidadeAlunos, setQuantidadeAlunos] = useState(0)
  const [notas, setNotas] = useState([{
    database: 0,
    frontend: 0,
    backend: 0
  }])

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Média de Alunos por Disciplina</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="container_input">
          <select 
          onChange={(event) =>{
            console.log(disciplina)
            setDisciplina(event.target.value)
          console.log(disciplina)
          }
          }>
            <option >
              Selecione uma disciplina
            </option>
            <option value="database">Banco de Dados</option>
            <option value="backend">Desenvolvimento Backend</option>
            <option value="frontend">Desenvolvimento Frontend</option>
            <option value="devops">Devops</option>
          </select>
          <input />
        </div>
        <input type="submit" value="Salvar" />
      </form>

      <div className="container">
        <table border="1" className="line_title">
          <thead>
            <tr>
              <th>Disciplina</th>
              <th>Quantidade de Alunos</th>
              <th>Média das notas dos alunos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Banco de Dados</td>
              <td>0</td>
              <td>0</td>
            </tr>

            <tr>
              <td>Desenvolvimento Frontend</td>
              <td>0</td>
              <td>0</td>
            </tr>

            <tr>
              <td>Desenolvimento Backend</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

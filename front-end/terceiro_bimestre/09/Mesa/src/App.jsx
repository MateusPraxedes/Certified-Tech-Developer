import { useState } from "react";
import "./styles.css";

const App = () => {
  const [formData, setFormData] = useState({
    bancoDeDados: {
      alunos: 0,
      media: 0,
      notas: 0,
    },
    backEnd: {
      alunos: 0,
      media: 0,
    },
    frontEnd: {
      alunos: 0,
      media: 0,
    },
    devops: {
      alunos: 0,
      media: 0,
    },
  });

  const [errorFormData, setErrorFormData] = useState({
    errorDisciplina: "",
    errorNota: "",
  });


  function handleSubmit(event) {
    event.preventDefault();
    if (!formData.nota.trim()) {
      setErrorFormData({
        ...errorFormData,
        errorNota: "Campo não pode ficar vazio",
      });
      alert("erro");
    } else if (formData.nota < 0 || formData.nota > 10) {
      setErrorFormData({
        ...errorFormData,
        errorNota: "Insira uma nota entre 0 e 10",
      });
      alert("erro 2");
    } else {
      setErrorFormData({});
      alert("Funcionou!");

      if ((formData.disciplina = "database")) {
        setFormData({
          ...formData,
          bancoDeDados: {
            alunos: Number(formData.bancoDeDados.alunos + 1),
            //media: (Number(formData.bancoDeDados.notas)/Number(formData.bancoDeDados.alunos)),
            notas: Number(formData.bancoDeDados.notas) + Number(formData.nota),
            //notas: formData.bancoDeDados.notas.push(Number(formData.nota))
          },
        });
        alert("é database");
      } else if (formData.disciplina == "backend") {
        setFormData.backEnd.alunos(alunos + 1);
      } else if (formData.disciplina == "frontend") {
        setFormData.frontEnd.alunos(alunos + 1);
      } else if (formData.disciplina == "devops") {
        setFormData.devops.alunos(alunos + 1);
      } else {
        alert("Selecione uma escolha válida");
      }
    }
  }

  return (
    <div className="container">
      <h1>Média de Alunos por Disciplina</h1>

      <form className="form" onSubmit={handleSubmit}>
        <div className="container_input">
          <select
            value={formData.disciplina}
            onChange={(event) =>
              setFormData({ ...formData, disciplina: event.target.value })
            }
          >
            <option selected disabled value="" hidden>
              Selecione uma disciplina
            </option>
            <option value="database">Banco de Dados</option>
            <option value="backend">Desenvolvimento Backend</option>
            <option value="frontend">Desenvolvimento Frontend</option>
            <option value="devops">Devops</option>
          </select>

          <input
            value={formData.nota}
            onChange={(event) =>
              setFormData({ ...formData, nota: event.target.value })
            }
          />
          <p>{errorFormData.errorNota}</p>
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
              <td>{formData.disciplina}</td>
              {formData.bancoDeDados.notas / formData.bancoDeDados.alunos ===
              NaN ? (
                <td>
                  {formData.bancoDeDados.notas / formData.bancoDeDados.alunos}
                </td>
              ) : (
                <td>0</td>
              )}
            </tr>

            <tr>
              <td>Desenvolvimento Frontend</td>
              <td>{formData.frontEnd.alunos}</td>
              <td>{formData.frontEnd.media}</td>
            </tr>

            <tr>
              <td>Desenolvimento Backend</td>
              <td>{formData.backEnd.alunos}</td>
              <td>{formData.backEnd.media}</td>
            </tr>

            <tr>
              <td>Devops</td>
              <td>{formData.devops.alunos}</td>
              <td>{formData.devops.media}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;

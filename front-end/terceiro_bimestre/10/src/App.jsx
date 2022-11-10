import { useState } from "react";
import Card from "./components/Card/Card";
import "./styles.css";

const App = () => {
  const [cartao, setCartao] = useState({
    nome: "",
    numero: "",
    validade: "",
    cod: "",
    cor: "",
  });
  const [cartoes, setCartoes] = useState([]);
  const [error, setError] = useState({
    errorNome: "",
    errorNumero: "",
    errorValidade: "",
    errorCod: "",
    errorCor: "",
  });

  const validate = (event, nome) => {
    if(nome === "numero") {
    if (
      event.target.value.length < 6 ||
      !/\d{1}/.test(event.target.value)
    ) {
      setError({
        ...error,
        errorNumero:
          "O numero do cartão deve ter no mínimo 6 caracteres um número.",
      });
      alert(
        "O campo numero do cartão deve ter no mínimo 6 caracteres e um número."
      );
    } else {
      setError({
        ...error,
        errorNumero: "",
      });
    }
  } else if(nome === "nome") {
    if (
      event.target.value.length < 3 ||
      event.target.value.trim() === ""
    ) {
      setError({
        ...error,
        errorNome:
          "O campo nome deve ter no mínimo 3 caracteres e não pode ter espaços em branco no início",
      });
      alert(
        "O campo nome deve ter no mínimo 3 caracteres e não pode ter espaços em branco no início"
      );
    } else {
      setError({
        ...error,
        errorNome: "",
      });
    }
  }
}

  const handleChange = (e) => {
    e.preventDefault();
    if (error.errorNome) {
      alert(
        "O campo nome deve ter no mínimo 3 caracteres e não pode ter espaços em branco no início"
      );
    } else if (error.errorNumero) {
       return alert("O campo numero do cartão deve ter no mínimo 6 caracteres e um número.");
    } else {
      setCartoes([...cartoes, cartao]);
      setCartao({ nome: "", numero: "", validade: "", cod: "", cor: "" });
      setError({
        errorNome: "",
        errorNumero: "",
        errorValidade: "",
        errorCod: "",
        errorCor: "",
      });
    }
  };

  return (
    <>
      <fieldset>
        <h1>Criar Cartão</h1>
        <form onSubmit={handleChange}>
          <div className="modulosForm">
            <div className="input">
              <input
                type="text"
                id="nome"
                value={cartao.nome}
                placeholder="Nome do Titular"
                onBlur={(event) => {
                  validate(event, event.target.id)
                }}
                onChange={(event) =>
                  setCartao({ ...cartao, nome: event.target.value })
                }
              />
            </div>
            <div className="input">
              <input
                type="text"
                id="numero"
                value={cartao.numero}
                placeholder="Número do cartão"
                onBlur={(event) => {
                  validate(event, event.target.id)
                }}
                onChange={(event) => 
                  setCartao({ ...cartao, numero: event.target.value })
                }
              />
            </div>
          </div>
          <div className="modulosForm">
            <input
              type="text"
              id="validade"
              value={cartao.validade}
              placeholder="Data de Validade"
              onChange={(event) =>
                setCartao({ ...cartao, validade: event.target.value })
              }
            />
            <input
              type="text"
              id="cod"
              value={cartao.cod}
              placeholder="Código de segurança"
              onChange={(event) =>
                setCartao({ ...cartao, cod: event.target.value })
              }
            />
          </div>
          <label htmlFor="color"></label>
          <div>
            <input
              type="color"
              id="Validade"
              onChange={(event) =>
                setCartao({ ...cartao, cor: event.target.value })
              }
            />
          </div>

          <input className="btnForm" value="Criar" type="submit" />
        </form>
      </fieldset>

      { <div className="error"><span>{error.errorNome}</span></div>}
      { <div className="error"><span>{error.errorNumero}</span></div>}


      <div className="cards">
        <Card cartao={cartao} />
      </div>
    </>
  );
};

export default App;

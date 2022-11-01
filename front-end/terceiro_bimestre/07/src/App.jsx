import { useState } from "react";

const App = () => {
  // let numero = 0;
  const [numero, setNumero] = useState(0);

  const [nomes, setNomes] = useState(["Maria", "Ana"]);

  const handleFunction = () => {
    // numero = numero + 1;
    setNumero(numero + 1);
  };

  const addPessoa = () => {
    const temp = [...nomes];

    temp.push("Isabela");
    temp.push("Marta");

    setNomes(temp);

    //setNomes(["Maria", ... . "Isabela"])
  };

  return (
    <div>
      <h1>{numero}</h1>
      <ul>
        {nomes.map((nome) => (
          <li>{nome}</li>
        ))}
      </ul>
      <button onClick={handleFunction}>Aperte</button>
      <button onClick={addPessoa}>Add pessoa</button>
    </div>
  );
};

export default App;

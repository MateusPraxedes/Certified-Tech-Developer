import { render, screen } from "@testing-library/react";
import Card from ".";

describe("<Card/>", () => {
  test("Verificar se Card esta sendo renderizado sem passagem de props", () => {
    render(<Card />);

    const nome = screen.getByText("Nome: -");
    const profissao = screen.getByText("idade: -");

    expect(nome).toBeInTheDocument();
    expect(profissao).toBeInTheDocument();
  });

  test("Verificar se Card esta sendo renderizado com passagem de props", () => {
    const user = {
      nome: "Leonardo",
      idade: 22,
    };

    render(<Card {...user} />);

    const nome = screen.getByText(`Nome: ${user.nome}`);
    const profissao = screen.getByText(`idade: ${user.idade}`);
    expect(nome).toBeInTheDocument();
    expect(profissao).toBeInTheDocument();
  });
});
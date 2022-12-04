const Card = (user) => {
  console.log(user);
  const { nome = '-' , idade = '-'  } = user;
  // console.log(nome);
  console.log(nome);

  return (
    <div>
      <h2>Nome: {nome}</h2>
      <p>idade: {idade}</p>
    </div>
  );
};

export default Card;
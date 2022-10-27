import style from "./styles.module.css"


const ItemList = ({ item }) => {
  const { id, country, city, population, color } = item;
  if (country === "BRA") {
    return (
      <li key={id} style={{ color: color }}>
        <h1>{country}</h1>
        <h2>{city}</h2>
        <span>{population}</span>
      </li>
    );
  }
};

export default ItemList;

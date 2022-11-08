import styles from './styles.module.css'

const ItemList = ({item}) => {
  const {marca, modelo, descricao, cor, img} = item
  return (
    <li style={{background: cor}}>
      <h1>{modelo}</h1>
      <h2>{marca}</h2>
      <img src={img} alt="" />
      <p className={styles.paragrafro}>{descricao}</p>
    </li>
  )
}

export default ItemList;
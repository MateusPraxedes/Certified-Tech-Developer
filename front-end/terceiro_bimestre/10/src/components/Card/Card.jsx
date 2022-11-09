import card from  './styles.module.css'

const Card = ({cartao}) => {
  const {nome, numero, validade, cod, cor} = cartao
  return (
    <>
    <div  className={card.card}  style={{background: cor}} >
      <div className={card.modulosCard}>
      <p>{nome}</p>
       <p>{numero}</p>
      </div>

      <div className={card.modulosCard}>
      <p>{validade}</p>
      <p>{cod}</p>
      </div>
       
    </div>
    </>
  )
}

export default Card

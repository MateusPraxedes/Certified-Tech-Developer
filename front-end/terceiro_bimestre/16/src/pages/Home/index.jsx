import { Link, useNavigate } from "react-router-dom"



const Home = () => {

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/contact')}

  return (
    <>
    <h1>Home</h1>
    <Link to="/contact">Contact</Link>

    <button onClick={handleNavigate}>Ir para contact</button>

    </>
  )
}

export default Home
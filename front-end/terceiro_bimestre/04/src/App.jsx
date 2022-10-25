import Button from "../Button"

const App = ()  => {

  function handleClick(e) {
   console.log(e.target.innerText)
  alert(e.target.innerText)
  }
  
  return (
    <>
    <h1>Hello World</h1>
    <Button name={"button 1"} alert={handleClick} />
    <Button name={"button 2"} alert={handleClick}/>
    <Button name={"button 3"} alert={handleClick}/>
    </>
  )
}

export default App

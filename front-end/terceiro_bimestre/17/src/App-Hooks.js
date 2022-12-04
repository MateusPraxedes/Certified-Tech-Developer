import { useState, useCallback, useMemo } from 'react' ;

const App = () =>  {
  
  const [name , setName] = useState('') ;
  const [numero, setNumero] = useState(0) ;

  const handleNameChange = useCallback((e) => setName(e.target.value), []);
  const incrementValue = () => setNumero(numero + 1) ;
  // const data = Array(33_000_000).fill(1) ;
  const data = useMemo(() => Array(33_000_000).fill(1), []) ;



  return (
    <>
    <div>
      <input value={name} onChange={ (event)=>{
        handleNameChange(event)
      }} />
  	  {numero}
      <button onClick={incrementValue}>Increment</button>
    </div>
    </>
  );
}

export default App;

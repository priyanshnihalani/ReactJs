import './App.css';
import {useState, useRef} from 'react'

function App() {
  let [name, setName] = useState("Hi!")
  const refvalue = useRef("")
  function Reset(){
    setName("")
    refvalue.current.focus()
  }
  function ChangeColor(){
    refvalue.current.style.color = "blue"
  }
  return (
    <>
      <h2>UseRef Example</h2>
      <input type='text' value={name} ref={refvalue}/><br/>
      <button type='reset' onClick={Reset}>Reset</button>
      <button type='reset' onClick={ChangeColor}>Reset</button>
      
    </>
  )
}

export default App;

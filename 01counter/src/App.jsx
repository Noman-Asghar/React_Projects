import { useState } from 'react'
import './App.css'

function App() {
  

   const [counter , setCounter] = useState(0)

   const addValue = () => {
   
    setCounter(counter + 1)
    
    if (counter === 20) {
      setCounter(20)
    }
   }

   const removeValue = () => {
    setCounter(counter - 1)
    if (counter <= 0) {
      setCounter(0)
    }
  }

  return (

    <>
     <h1>NOMAN COUNTER : {counter}</h1>
     <button onClick={addValue}>Add Value</button>
     <br />
     <button onClick={removeValue}>Remove value</button>

    </>
  )
}

export default App

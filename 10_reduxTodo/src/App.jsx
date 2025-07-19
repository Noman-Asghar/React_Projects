import AddTodo from './components/AddTodo'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'
import Todos from './components/Todos'
import { useState } from 'react'

function App() {
const [input, setInput] = useState("");
  const [isEditable, setIsEditable] = useState(null);
  return (
    <Provider store={store}>
      <h1 className='bg-blue-500 font-bold py-4 hover:py-10 hover:bg-green-400 duration-300  text-center md:text-4xl text-xl text-white'>Noman Asghar</h1>
      <div className='bg-gray-700 h-screen flex flex-wrap justify-center pt-20 overflow-hidden' >
        <div className=""> 
          <AddTodo  
          input={input}
        setInput={setInput}
        isEditable={isEditable}
        setIsEditable={setIsEditable} />
          <Todos  setInput={setInput} setIsEditable={setIsEditable}/>
        </div>
      </div>
    </Provider>

  )
}

export default App

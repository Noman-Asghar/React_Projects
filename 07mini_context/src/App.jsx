innerHeight
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/userContextProvider'

function App() {
 
  return (
    <>
      <h1>Context Api</h1>
    <UserContextProvider>
       <Login />
       <Profile />
    </UserContextProvider>
      
    </>
  )
}

export default App

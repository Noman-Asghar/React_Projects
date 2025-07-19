import React, { useState } from 'react'
import { useContext } from 'react'
import userContext from '../context/userContext'

const Login = () => {
    const [username , setUserName] = useState("")
     const [password , setPassword] = useState("")

     const {setUser} = useContext(userContext)

     const handleSumbit = (e) => {
e.preventDefault()
  setUser({username , password})
   
     }
  return (
    <div>
      <input type="text" placeholder='Enter your name' style={{padding: '10px' , outline: "none" , fontSize: '18px' , background: 'white' , color: 'black' , borderRadius: '10px', margin: '10px 0px 10px 0px'}} value={username} onChange={(e) => setUserName(e.target.value)} />
      <br />
      <input type="text" placeholder='Enter your name' style={{padding: '10px' , outline: "none" , fontSize: '18px' , background: 'white' , color: 'black' , borderRadius: '10px', margin: '10px 0px 10px 0px'}} value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button  onClick={handleSumbit} style={{background: "blue" , padding: '20px', width: '200px' , fontSize: '22px'}}>Login</button>
    </div>
  )
}

export default Login

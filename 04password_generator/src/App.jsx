import { useCallback, useEffect, useRef, useState } from "react"


function App() {
  
  const [length , setLength] = useState(8)
  const [numbers , setNumbers] = useState(false)
  const [characters , setCharacters] = useState(false)
  const [password , setPassword] = useState("")
  const [buttonText , setButtonText] = useState("Copy")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQURSTuvwxyzabcdefghijklmnopqrstuvwxyz"

    if (numbers)  string += "1234567890"
    if (characters)  string += "!@#$%^&*({?/"
      
    

    for (let i = 1; i <=length; i++) {
       let char  = Math.floor(Math.random() * string.length + 1)
    
       pass += string.charAt(char)
       setPassword(pass)
    }
  } , [length , numbers , characters , setPassword])

  useEffect(() => {
    passwordGenerator()
  },[ length ,numbers , characters , passwordGenerator])

  const passwordRef = useRef(null)

  const copyPassword = useCallback(() => {
     window.navigator.clipboard.writeText(password)
     passwordRef.current.select()
     setButtonText("Copied")


  } , [password])

  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
      
      <div className="w-[50%]  bg-yellow-900  rounded-lg">
        <h1 className="text-white text-3xl  text-center">Password <span className="text-orange-600">Generator</span> BY <span className="text-orange-600">NOMAN</span> </h1>
        <div className="flex flex-wrap px-2 rounded py-4 text-orange-600">
          <input type="text" placeholder="Password" readOnly value={password} ref={passwordRef} className=" flex-1/2 bg-white outline-none py-3 rounded" />
          <button onClick={copyPassword} className={`${buttonText.includes("Copy") ? "bg-blue-500  hover:bg-blue-700" : "bg-green-600"} duration-200 text-white text-lg font-bold py-2 px-4 rounded-lg`}>{buttonText}</button>
        </div>
        <div className="flex flex-wrap items-center gap-2 px-4  py-3 text-xl font-bold text-emerald-600">
          <input type="range" value={length} min={1} max={100} onChange={(e) =>setLength(e.target.value)} />
          <label>Length:{length}</label>
             <input type="checkbox" defaultChecked={numbers} onChange={() => setNumbers(!numbers)} />
          <label>Number</label>
             <input type="checkbox" defaultChecked={characters} onChange={() => setCharacters(!characters)} />
          <label>Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App

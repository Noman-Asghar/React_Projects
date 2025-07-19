
import { useState } from "react"
import { ThemeProvider } from "./assets/contexts/themeContext"
import { useEffect } from "react"
import ThemeBtn from "./assets/components/ThemeBtn"
import Card from "./assets/components/Card"


function App() {
  
  const [themeMode , setThemeMode] = useState('light')

  const lightMode = () => {
    setThemeMode('light')
  }
  const darkMode = () => {
    setThemeMode ('dark')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light" , "dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    
     <ThemeProvider value={{lightMode , darkMode , themeMode}} >
      <div className="">
        <ThemeBtn />
        <Card />
      </div>
     </ThemeProvider>
  
  )
}

export default App

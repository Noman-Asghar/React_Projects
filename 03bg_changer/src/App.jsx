import { useState } from "react"


function App() {
  
  const [color , setColor] = useState("black")
  

  return (
    
   
    <div className="w-full flex justify-center h-screen flex-wrap text-white duration-500" style={{backgroundColor: color}}>
    <div className="fixed bottom-12 flex gap-3 justify-center items-center flex-wrap  mx-2 bg-white px-4 py-2 rounded-lg">
        <button className="rounded-full shadow-2xl text-lg py-1 px-4 text-white "style={{backgroundColor: "black"}} onClick={() => setColor("black")}>
            <span>Black</span>
         </button>
          <button className="rounded-full shadow-2xl text-lg py-1 px-4 text-black "style={{backgroundColor: "wheat"}} onClick={() => setColor("wheat")}>
            <span>white</span>
         </button>
          <button className="rounded-full shadow-2xl text-lg py-1 px-4 "style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}>
            <span>Blue</span>
         </button>
          <button className="rounded-full shadow-2xl text-lg py-1 px-4 "style={{backgroundColor: "red"}} onClick={() => setColor("red")}>
            <span>Red</span>
         </button>
          <button className="rounded-full shadow-2xl text-lg py-1 px-4 "style={{backgroundColor: "green"}} onClick={() => setColor("green")}>
            <span>Green</span>
         </button>
          <button className="rounded-full shadow-2xl text-lg py-1 px-4 "style={{backgroundColor: "yellow"}} onClick={() => setColor("yellow")}>
            <span>Yellow</span>
         </button>
          <button className="rounded-full shadow-2xl text-lg py-1 px-4 "style={{backgroundColor: "royalBlue"}} onClick={() => setColor("royalBlue")}>
            <span>Royal-Blue</span>
         </button>
          <button className="rounded-full shadow-2xl text-lg py-1 px-4 "style={{backgroundColor: "olive"}} onClick={() => setColor("olive")}>
            <span>Olive</span>
         </button>
          <button className="rounded-full shadow-2xl text-lg py-1 px-4 "style={{backgroundColor: "purple"}} onClick={() => setColor("purple")}>
            <span>Purple</span>
         </button>
          <button className="rounded-full shadow-2xl text-lg py-1 px-4 "style={{backgroundColor: "pink"}} onClick={() => setColor("pink")}>
            <span>Pink</span>
         </button>
        
    </div>

    </div>
  )
}

export default App

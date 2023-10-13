import { useState } from "react"


function App() {
  const [color,setColor]=useState("white")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style = {{backgroundColor :color}}
      >
        <div className="fixed flex flex-wrap justify-center gap-5
                      shadow-lg bg-white px-3 py-2 rounded-3xl inset-x-0 bottom-0">
                        <button onClick={()=>setColor("red")}
                        className="outline-none px-4 py-1 
                        rounded-full 
                       text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
                         <button onClick={()=>setColor("green")}
                         className="outline-none px-4 py-1 
                        rounded-full 
                       text-white shadow-lg" style={{backgroundColor:"green"}}>green</button>
                         <button 
                         onClick={()=>setColor("blue")}className="outline-none px-4 py-1 
                        rounded-full 
                       text-white shadow-lg" style={{backgroundColor:"blue"}}>blue</button>
                         <button 
                         onClick={()=>setColor("black")}className="outline-none px-4 py-1 
                        rounded-full 
                       text-white shadow-lg" style={{backgroundColor:"black"}}>black</button>
                         <button onClick={()=>setColor("white")}
                         className="outline-none px-4 py-1 
                        rounded-full 
                       text-black shadow-lg" style={{backgroundColor:"white"}}>white</button>
                       <button onClick={()=>setColor("purple")}
                         className="outline-none px-4 py-1 
                        rounded-full 
                       text-white shadow-lg" style={{backgroundColor:"purple"}}>purple</button>
                        <button onClick={()=>setColor("gold")}
                         className="outline-none px-4 py-1 
                        rounded-full 
                       text-white shadow-lg" style={{backgroundColor:"gold"}}>gold</button>
                        <button onClick={()=>setColor("skyblue")}
                         className="outline-none px-4 py-1 
                        rounded-full 
                       text-white shadow-lg" style={{backgroundColor:"skyblue"}}>skyblue</button>
                        <button onClick={()=>setColor("grey")}
                         className="outline-none px-4 py-1 
                        rounded-full 
                       text-white shadow-lg" style={{backgroundColor:"grey"}}>grey</button>
                        <button onClick={()=>setColor("pink")}
                         className="outline-none px-4 py-1 
                        rounded-full 
                       text-white shadow-lg" style={{backgroundColor:"pink"}}>pink</button>
                       </div>
        </div>
        
    </>
  )
}

export default App

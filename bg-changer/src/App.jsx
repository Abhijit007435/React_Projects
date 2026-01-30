import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState("Olive")
    document.body.style.backgroundColor=count;
 
  function changeColor(e){
   setCount(e.target.id);
  }

  return (
    <>
     <div id="colors">
      <button id="red" onClick={changeColor} style={{ backgroundColor: "red", color: "black", margin: "10px" }}>Red</button>
      <button id="green" onClick={changeColor} style={{ backgroundColor: "green", color: "black", margin: "10px" }}>Green</button>
      <button id="blue" onClick={changeColor} style={{ backgroundColor: "blue", color: "black", margin: "10px" }}>Blue</button>
      <button id="yellow" onClick={changeColor} style={{ backgroundColor: "yellow", color: "black", margin: "10px" }}>Yellow</button>

       <button id="pink" onClick={()=>setCount("pink")} style={{ backgroundColor: "pink", color: "black", margin: "10px" }}>Pink</button>
      <button id="orange" onClick={()=>setCount("orange")} style={{ backgroundColor: "orange", color: "black", margin: "10px" }}>Orange</button>
      <button id="purple" onClick={()=>setCount("purple")} style={{ backgroundColor: "purple", color: "black", margin: "10px" }}>Purple</button>
      <button id="cyan" onClick={()=>setCount("cyan")} style={{ backgroundColor: "cyan", color: "black", margin: "10px" }}>Cyan</button>
     </div>
    </>
  )
}

export default App

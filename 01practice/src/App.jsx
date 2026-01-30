import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  const addvalue=()=>{
    if(count<20)
    setCount(count+1);
  }
  const decvalue=()=>{
    if(count>0)setCount(count-1);
    
  }

  return (
  <>
  <div>Counter is {count}</div>
  <br />
  <button onClick={addvalue}>Add</button>
  <br />
  <br />
  <button onClick={decvalue}>Dec</button>

  </>
  )
}

export default App

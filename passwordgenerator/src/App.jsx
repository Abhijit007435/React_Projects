import { useCallback, useState,useEffect,useRef, use } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length, setlength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password,setpassword]=useState("")
  const passwordGenerator=useCallback(()=>{
    let chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(charAllowed){
      chars+="!@#$%^&*()_+{}|:<>?-=[];',./`~"
    }
    if(numAllowed){
      chars+="0123456789"
    }
    let pass=""
    for(let i=0;i<length;i++){
      let randomIndex=Math.floor(Math.random()*chars.length)
      pass+=chars[randomIndex]
    }
    setpassword(pass)
  },[length,numAllowed,charAllowed,setpassword]) 


  useEffect(()=>passwordGenerator(),[length,numAllowed,charAllowed,passwordGenerator])
  const passwordRef=useRef(null)

  const copypassword=useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,20)
   window.navigator.clipboard.writeText(password)
    },[password])

  return (
    <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white  text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" placeholder='password' value={password} readOnly className='outline-none w-full py-1 px-3 bg-amber-50'
        ref={passwordRef}/>
        <button className='bg-orange-500 text-white px-4 py-1' onClick={copypassword}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <label >Length:{length}</label>
          <input type="range" min={6} max={100}
          className='cursor-pointer'
          value={length} onChange={(e)=>setlength(e.target.value)} />
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked = {numAllowed}
          onChange={()=>setnumAllowed((prev)=>!prev)} />
          <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked = {charAllowed}
          onChange={()=>setcharAllowed((prev)=>!prev)} />
          <label>Characters</label>
        </div>
      </div>
   </div>
    </>
  )
}

export default App

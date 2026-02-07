import { useState } from 'react'

import Login from './components/Login'
import Profile from './components/Profile'

import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <div style={{width:"100%",marginLeft:"100%"}}>
         <h1 >Create Context</h1>
    <Login />
    <Profile />
      </div>
   
    </UserContextProvider>
  )
}

export default App

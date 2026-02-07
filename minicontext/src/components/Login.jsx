import React, { use } from "react";
import { useState,useContext } from "react";
import Usercontext from "../context/UserContext";
function Login(){
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const {setUser}=useContext(Usercontext)
    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password})

    }
    return(
        <div>
            <h2>Login</h2>
            <input type="text" 
            value={username}
            style={{border:"2px solid white"}}
            onChange={(e)=>setusername(e.target.value)}
            placeholder="username"/>
                   {"                                                                                                                                      "}
           
             <input type="text" 
            value={password}
             style={{border:"2px solid white"}}
            onChange={(e)=>setpassword(e.target.value)}
            placeholder="password"/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default Login;
import React,{useContext} from "react";
import UserContext from "../context/UserContext";
export default function Profile(){
    const {User}=useContext(UserContext);
    if(!User){
        return <h2>Please Login</h2>
    }
    else{
        return <h3>Welcome {User.username}</h3>
    }
}
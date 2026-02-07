import  { Children, useState } from "react";
import Usercontext from "./UserContext";
const UserContextProvider=({children})=>{
    const [User,setUser]=useState(null);
    return(
        <Usercontext.Provider value={{User,setUser}}>
            {children}
        </Usercontext.Provider>

    )

}
export default UserContextProvider;
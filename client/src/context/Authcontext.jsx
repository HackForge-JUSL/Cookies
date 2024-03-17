
import { createContext, useEffect, useState } from "react";



export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const[user,setUser] = useState(null)
    const [isLoggedin,setIsLoggedin]=useState(false);
return(
    <AuthContext.Provider value={{user,setUser,isLoggedin,setIsLoggedin}}>
        {children}
    </AuthContext.Provider>
);
}
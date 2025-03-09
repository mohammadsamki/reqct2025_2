import { useState } from "react";
import MyContext from "./myContext";


export default function MyProvider({children}){
    const [user,setUser]= useState(null)

    return(
        <MyContext.Provider value={{user,setUser}}>
            {children}
        </MyContext.Provider>
    )

}
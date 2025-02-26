import { createContext, useState } from "react";

export const UserContext = createContext(null)

export const UserContextProvider = (prop)=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {prop.children}
        </UserContext.Provider>
    )
}
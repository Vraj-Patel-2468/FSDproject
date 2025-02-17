import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext(null)

export const ThemeContextProvider = (prop)=>{
    const [theme,setTheme] = useState('light')

    return (
        <ThemeContext.Provider value={{theme, setTheme }}>
            {prop.children}
        </ThemeContext.Provider>
    )
}
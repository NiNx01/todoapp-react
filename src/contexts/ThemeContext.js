import { useContext, createContext } from "react";

export const ThemeContext = createContext({
    themeMode : "light",
    darkMode : ()=>{},
    lightMode : ()=>{}
})

export const useThemeContext = ()=>{
    return useContext(ThemeContext)
}

export const ThemeContextProvider = ThemeContext.Provider ;
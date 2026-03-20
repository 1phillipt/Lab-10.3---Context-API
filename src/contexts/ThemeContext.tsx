import { useState, createContext,type ReactNode, useContext } from "react";
import type { ThemeType } from "../types";

interface ThemeContextType{
    theme: ThemeType;
    toggleTheme: ()=>void;
}

//create the context

const ThemeContext = createContext<ThemeContextType |undefined>(undefined);

export function ThemeProvider({children}:{children:ReactNode}){

    //state for theme
    const [theme, setTheme] = useState<ThemeType>("light");

    // change theme with this function
    const toggleTheme = ()=>{setTheme(prev => (prev === "light"?"dark":"light"))};

    return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );

}

//custom hook to use context
export function useTheme(){
    const context = useContext(ThemeContext);

    if(!ThemeContext){
        throw new Error("useThem must be used within THemeProvider")
    }

    return context;
}



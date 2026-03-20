import type { ThemeType } from "../types";

interface ThemeContextType{
    theme: ThemeType;
    toggleThem: ()=>void;
}

//create the context

const ThemeContext = createContext<ThemeContextType |undefined>(undefined);



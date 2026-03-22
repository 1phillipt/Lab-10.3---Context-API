import React from "react";
import { useTheme } from "../contexts/ThemeContext";

export function ThemeToggleButton(){
    const {theme, toggleTheme} = useTheme();

    return (
        <button onClick={toggleTheme}>
                Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
    )

}
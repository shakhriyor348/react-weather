import { useState } from "react";
import { Theme, ThemeContext } from "../context/ThemeContext";
import ChangeCssRootVariables from "../model/ChangeCssRootVariables";
import { storage } from "../model/Storage";

export const ThemeProvider = ({ children, ...props }) => {
    const [theme, setTheme] = useState(storage.getItem("theme") || Theme.LIGHT);
    
    ChangeCssRootVariables(theme)
    const changeTheme = (theme) => {
        storage.setItem("theme", theme);
        setTheme(theme);
        ChangeCssRootVariables(theme)
    }
    return (
        <ThemeContext.Provider value={{ theme, changeTheme }} {...props}>
            {children}
        </ThemeContext.Provider>
    );
}
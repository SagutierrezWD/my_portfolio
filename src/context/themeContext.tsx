import { createContext, useContext, useState, type ReactNode } from "react";

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)


export const ThemeProvider = ({children}:ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>("light")

    const toggleTheme = ():void => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }

    return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
}

export function useThemeContext() {
    const theme = useContext(ThemeContext)

    if (theme === undefined) {
        throw new Error("useThemeContext must be used with a ThemeContext")
    }

    return theme;
}
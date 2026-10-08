import { createContext, useContext, useState, type ReactNode } from "react";

interface MenuStatusType {
    open: boolean;
    toggleMenu: () => void
}

interface MenuStatusProviderProps {
    children: ReactNode;
}

const MenuStatusContext = createContext<MenuStatusType | undefined>(undefined)

export const MenuStatusProvider = ({children}:MenuStatusProviderProps) => {
    const [open, setOpen] = useState(true)

    const toggleMenu = ():void => {
        setOpen((currentStatus) => (currentStatus === true ? false : true));
    }

    return <MenuStatusContext.Provider value={{open, toggleMenu}}>{children}</MenuStatusContext.Provider>
}

export function useMenuStatusContext() {
    const theme = useContext(MenuStatusContext)

    if (theme === undefined) {
        throw new Error("useMenuStatusContext must be used with a MenuStatusContext")
    }

    return theme;
}
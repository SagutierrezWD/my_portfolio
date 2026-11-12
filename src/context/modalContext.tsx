import { createContext, useContext, useState, type ReactNode } from "react";
import type { ProjectsListed } from "../types";

type ModalState = true | false;

interface ModalType {
    isOpen:boolean;
    toggleModal:(id:ProjectsListed) => void;
    selectedProject:string
}

interface ModalProviderProps {
    children:ReactNode
}

const ModalContext = createContext<ModalType | undefined>(undefined)

export const ModalProvider = ({children}:ModalProviderProps) => {
    const [isOpen, setIsOpen] = useState<ModalState>(false)

    const [selectedProject, setSelectedProject] = useState<ProjectsListed>("p1")

    const toggleModal = (id:ProjectsListed):void => {
        setSelectedProject(id)
        setIsOpen(prevState => !prevState)
    }

    return <ModalContext.Provider value={{isOpen, toggleModal, selectedProject}}>{children}</ModalContext.Provider>
}

export function useModalContext(){
    const modal = useContext(ModalContext)

    if(modal === undefined){
        throw new Error("useModalContext must be used with a ModalContext")
    }

    return modal
}
import { createContext, useState } from "react";

export const EditorContext = createContext();

export default function EditorProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <EditorContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </EditorContext.Provider>
    );
}

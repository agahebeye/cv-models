import React from "react";

export const SectionContext = React.createContext(null);

export default function SectionProvider(props: { children?: React.ReactNode }) {
    return (
        <SectionContext.Provider value="hello">
            {props.children}
        </SectionContext.Provider>
    );
}

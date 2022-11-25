import React, { createContext, useContext } from "react";
import { useImmer } from "use-immer";

import type { Updater, DraftFunction } from "use-immer";

type SectionContextType = {
    sections: any[];
    setSections: Updater<any[]>;
};

export function SectionsProvider({ children }: { children: React.ReactNode }) {
    const [sections, setSections] = useImmer<any[]>([]);

    return (
        <SectionsContext.Provider value={{ sections, setSections }}>
            {children}
        </SectionsContext.Provider>
    );
}

export const SectionsContext = createContext<SectionContextType>({
    sections: [],
    setSections: (arg: any[] | DraftFunction<any[]>) => {},
});

export function useSections() {
    return useContext(SectionsContext);
}

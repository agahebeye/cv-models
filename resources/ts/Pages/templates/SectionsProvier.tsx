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
    const ctx = useContext(SectionsContext);

    return {
        ...ctx,
        getSection,
    };

    function getSection(category: string, title?: string) {
        const hasTitle = title && category === "personalDetails";

        if (hasTitle) {
            return ctx.sections.filter((section) => {
               // console.log(section["title"]);
                return section["title"] === title;
            });
        } else {
            return ctx.sections.filter((section) => {
              //  console.log(section["category"]);
                return section["category"] === category;
            });
        }
    }
}

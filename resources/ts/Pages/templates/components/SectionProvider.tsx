import React, { useContext, useState } from "react";
import { DraftFunction, Updater, useImmer } from "use-immer";

import { initialSections } from "../data";

type SectionListType = typeof initialSections;

type SectionContextType = {
    sections: SectionListType;
    setSections: Updater<SectionListType>;
};

export const SectionContext = React.createContext({
    sections: initialSections,
    setSections: (
        sections: SectionListType | DraftFunction<SectionListType>
    ) => {},
});

export function useSectionContext() {
    const ctxValue = useContext(SectionContext);
    // if (ctxValue.setSections === undefined) {
    //     throw new Error("Expected setSections to be set");
    // }

    return ctxValue;
}

export default function SectionProvider(props: { children?: React.ReactNode }) {
    const [sections, setSections] = useImmer(initialSections);

    return (
        <SectionContext.Provider value={{ sections, setSections }}>
            {props.children}
        </SectionContext.Provider>
    );
}

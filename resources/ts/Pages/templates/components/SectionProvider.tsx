import React from "react";
import { Updater, useImmer } from "use-immer";

import { initialSections } from "../data";

type ISectionList<T> = {
    [key in keyof T]: T[key];
};

const sections : ISectionList<typeof initialSections> = initialSections;

export const SectionContext = React.createContext<{} | null>(null);

export default function SectionProvider(props: { children?: React.ReactNode }) {
    const [sections, updateSections] = useImmer(initialSections);

    return (
        <SectionContext.Provider value={{ sections, updateSections }}>
            {props.children}
        </SectionContext.Provider>
    );
}

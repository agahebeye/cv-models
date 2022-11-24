import { capitalize, isEmpty, isNull, lowerCase } from "lodash";
import { useContext } from "react";
import { SectionContext } from "../SectionProvider";
import PersonalDetails from "./PersonalDetails";

type PageType = {
    open: boolean;
};

export default function Page({ open }: PageType) {
    const { sections } = useContext(SectionContext);

    return (
        <div
            id="resumePage"
            className={`w-full min-h-screen bg-white rounded-sm shadow-lg lg:max-w-3xl
                            p-6
                             ${open ? "hidden md:block" : ""}`}
        >
            <div id="resume--header"></div>
            <div id="resume--body"></div>
            <div id="resume--footer"></div>
        </div>
    );
}

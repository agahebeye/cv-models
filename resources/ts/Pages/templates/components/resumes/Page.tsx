import { capitalize, isEmpty, isNull, lowerCase } from "lodash";
import { useContext } from "react";
import { SectionContext } from "../SectionProvider";
import PersonalDetails from "./PersonalDetails";

type PageType = {
    open: boolean;
};

export default function Page({ open }: PageType) {
    const { sections } = useContext(SectionContext);
    const title = (str: string) => capitalize(lowerCase(str));

    return (
        <div
            id="editor"
            className={`w-full min-h-screen bg-white rounded-sm shadow-lg lg:max-w-3xl
                            p-6
                             ${open ? "hidden md:block" : ""}`}
        >
            <PersonalDetails details={sections.personalDetails} />

            <section>
                <h3 className="text-xl font-semibold text-gray-800">Profile</h3>
                <div>{sections.profile.description}</div>
            </section>
        </div>
    );
}

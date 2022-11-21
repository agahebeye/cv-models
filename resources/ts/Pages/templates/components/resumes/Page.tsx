import { capitalize, isEmpty, isNull, lowerCase } from "lodash";
import { useContext } from "react";
import { SectionContext } from "../SectionProvider";

type PageType = {
    open: boolean;
};

type SectionKey<T> = keyof T;

export default function Editor({ open }: PageType) {
    const { sections } = useContext(SectionContext);
    const title = (str: string) => capitalize(lowerCase(str));

    return (
        <div
            id="editor"
            className={`w-full min-h-screen bg-white rounded-sm shadow-lg lg:max-w-3xl
                            p-6
                             ${open ? "hidden md:block" : ""}`}
        >
            <section id="personal--details">
                <h3 className="text-xl font-semibold text-gray-800">
                    Personal Details
                </h3>

                <div className="mt-2">
                    {Object.keys(sections.personalDetails).map((obj) => {
                        const key =
                            obj as keyof typeof sections.personalDetails;
                        const added = !isEmpty(sections.personalDetails[key]);

                        if (added) {
                            return (
                                <div key={key}>
                                    {`${title(key)}: ${
                                        sections.personalDetails[key]
                                    }`}
                                </div>
                            );
                        }

                        return;
                    })}
                </div>
            </section>
        </div>
    );
}

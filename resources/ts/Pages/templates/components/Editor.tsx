import { useContext } from "react";
import { SectionContext } from "./SectionProvider";

type EditorType = {
    open: boolean;
};

export default function Editor({ open }: EditorType) {
    const { sections } = useContext(SectionContext);

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

                {Object.keys(sections.personalDetails).map((key) => (
                    <div key={key}>
                        {key}:{" "}
                        {
                            sections.personalDetails[
                                key as keyof typeof sections.personalDetails
                            ]
                        }
                    </div>
                ))}
            </section>
        </div>
    );
}

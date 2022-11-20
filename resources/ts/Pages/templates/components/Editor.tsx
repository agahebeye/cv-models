import { useContext } from "react";
import { SectionContext } from "./SectionProvider";

type EditorType = {
    open: boolean;
};

export default function Editor({ open }: EditorType) {
    const {sections} = useContext(SectionContext);

    return (
        <div
            id="editor"
            className={`w-full min-h-screen bg-white rounded-sm shadow-lg lg:max-w-3xl
                            p-6
                             ${open ? "hidden md:block" : ""}`}
        >
            this is an editor {sections.personalDetails.name}
        </div>
    );
}

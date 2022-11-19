import SectionItem from "./SectionItem";
import PersonalDetails from "./PersonalDetails";

import type { Section } from "../../types";

type SectionListProps = {
    sections: any;
};

export default function SelectionList() {
    return (
        <div
            id="sections"
            className="px-6 pb-6 overflow-y-auto h-[80vh] md:pt-4"
        >
            <section key="section.name">
                <PersonalDetails />
            </section>
        </div>
    );
}

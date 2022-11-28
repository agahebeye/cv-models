import { useDndMonitor } from "@dnd-kit/core";

import Droppable from "./Droppable";
import classes from "../styles/new.module.css";
import { useSections } from "../SectionsProvier";
import { getSectionType } from "../data";

function Resume() {
    const { sections, setSections, getSection } = useSections();

    const educations = sections.filter(
        (section) => section.category === "education"
    );

    useDndMonitor({
        onDragEnd({ over, active }) {
            const data = active.data.current;
            const newSection = {
                category: data?.category,
                ...getSectionType(data?.type, data?.title),
            };

            //console.log(newSection)

            setSections((draft) => {
                const titleAdded = draft.filter(
                    (s) => s["title"] === data?.title
                ).length;

                if (data?.title && titleAdded) {
                    return;
                }

                draft.push(newSection as any);
            });
        },
    });

    return (
        <Droppable id="resume" className={classes.resume}>
            <div id="header"></div>
            <div id="body">
                <div id="personalDetails">
                    {getSection("personalDetails").map((section) => (
                        <div key={section.title} className="flex space-x-2">
                            <div className="text-sm">{section.title}:</div>
                            <div className="">[ {section.title} ]</div>
                        </div>
                    ))}
                </div>
                <div id="employments">
                    {getSection("employment").length} employments
                </div>
                <div id="educations">{educations.length} educations</div>
            </div>
            <div id="footer"></div>
        </Droppable>
    );
}

export default Resume;

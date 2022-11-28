import { useDndMonitor } from "@dnd-kit/core";

import type { DragEndEvent } from "@dnd-kit/core";

import Droppable from "../components/Droppable";
import classes from "../styles/new.module.css";
import { useSections } from "../SectionsProvier";
import { getSectionType } from "../data";
import {
    PersonalDetailsList,
    EducationList,
    EmploymentList,
} from "../components/ResumeContent";

function Resume() {
    const { sections, setSections, getSection } = useSections();

    useDndMonitor({
        onDragEnd,
    });

    return (
        <Droppable id="resume" className={classes.resume}>
            <div id="header"></div>

            <div id="body">
                <PersonalDetailsList details={getSection("personalDetails")} />
                <EducationList educations={getSection("education")} />
                <EmploymentList employements={getSection("employment")} />
            </div>

            <div id="footer"></div>
        </Droppable>
    );

    function onDragEnd({ over, active }: DragEndEvent) {
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
    }
}

export default Resume;

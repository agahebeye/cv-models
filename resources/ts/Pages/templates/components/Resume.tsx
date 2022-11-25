import { useDndMonitor } from "@dnd-kit/core";

import Droppable from "./Droppable";
import classes from "../styles/new.module.css";
import { useSections } from "../SectionsProvier";
import { getSectionType } from "../data";

function Resume() {
    const { sections, setSections } = useSections();

    useDndMonitor({
        onDragEnd({ over, active }) {
            const data = active.data.current;
            const newSection = {
                category: data?.category,
                ...getSectionType(data?.type, data?.title),
            };

            console.log(newSection);

            setSections((draft) => {
                draft.push(newSection as any);
            });
        },
    });

    return <Droppable id="resume" className={classes.resume}></Droppable>;
}

export default Resume;

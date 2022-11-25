import { useDndMonitor } from "@dnd-kit/core";

import Droppable from "./Droppable";
import classes from "../styles/new.module.css";
import { useSections } from "../SectionsProvier";

function Resume() {
    const { sections, setSections } = useSections();

    useDndMonitor({
        onDragEnd({ over, active }) {
            setSections((draft) => {

                draft.push(active.data.current as any);
            });
        },
    });

    return <Droppable id="resume" className={classes.resume}></Droppable>;
}


export default Resume;

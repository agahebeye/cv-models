import { sections } from "../../data";
import Draggable from "../Draggable";

export default function SectionList() {
    return (
        <div
            id="sections"
            className="px-6 pb-6 overflow-y-auto h-[80vh] md:pt-4"
        >
            <div className="flex flex-wrap gap-4 pt-4">
                {sections.map((section, index) => (
                    <Draggable id={index} key={index}>
                        {section?.name || section.section}
                    </Draggable>
                ))}
            </div>
        </div>
    );
}

import { useSections } from '../SectionsProvier';
import {initialSections as sections} from '../data'
import Draggable from './Draggable';

function SectionList() {
    const { getSection } = useSections();

    return (
        <div className="flex flex-wrap gap-2">
            {sections.map((section, key) => {
                const id = Math.random().toString(36).substring(2, 9);

                const added = getSection(
                    section.category,
                    section.title
                ).length;

                const props = {
                    id,
                    key,
                    data: section,
                    disabled: section.title && added ? true : false
                };

                const AddedBadge = (
                    <span className="ml-2 text-[9px] px-1 font-bold text-gray-800 bg-white rounded-full">{added}</span>
                )

                return (
                    <Draggable {...props}>
                        <span>{section?.title || section.category}</span>
                        {section.title ? "" : added > 0 ? AddedBadge : ""}
                    </Draggable>
                );
            })}
        </div>
    );
}

export default SectionList;
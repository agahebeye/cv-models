import {useState} from 'react';
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";

import Draggable from './Draggable';
import { initialSections as sections } from '../data';
import classes from '../styles/new.module.css';

function Sidebar() {
    const [open, setOpen] = useState(false);
    
    return (
        <div className={classes.sidebar}>
            <div
                className={`h-full w-2/5 p-4 bg-white ${
                    open ? "shadow-lg" : "hidden"
                }`}
            >
                <SectionList />
            </div>

            <button
                className="p-1 m-2 bg-gray-800 rounded-full"
                onClick={() => setOpen((open) => !open)}
            >
                <Bars3BottomLeftIcon className="w-5 h-5 text-white" />
            </button>
        </div>
    );
}

function SectionList() {
    return (
        <div className="flex flex-wrap gap-2">
            {sections.map((section, key) => {
                const id = Math.random().toString(36).substring(2, 9);
                return (
                    <Draggable id={id} key={key} data={section}>
                        {section?.title || section.category}
                    </Draggable>
                );
            })}
        </div>
    );
}

export default Sidebar;

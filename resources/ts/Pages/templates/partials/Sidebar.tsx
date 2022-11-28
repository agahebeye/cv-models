import { useState } from "react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";

import SectionList from "../components/SectionList";
import classes from "../styles/new.module.css";

function Sidebar() {
    const [open, setOpen] = useState(false);

    const togglerClass = `h-full w-2/5 p-4 bg-white ${
        open ? "shadow-lg" : "hidden"
    }`;

    return (
        <div className={classes.sidebar}>
            <div className={togglerClass}>
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

export default Sidebar;

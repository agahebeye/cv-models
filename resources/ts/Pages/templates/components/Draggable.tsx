import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

import type { UniqueIdentifier } from "@dnd-kit/core";

type DraggableType = {
    id: UniqueIdentifier;
    children?: React.ReactNode;
    data?: any;
};

function Draggable({ id, data, children }: DraggableType) {
    const draggable = useDraggable({
        id,
        data,
    });

    const mergedAttributes = {
        ...draggable.attributes,
        ...draggable.listeners,
        className:
            "inline-flex items-center px-3 py-1 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-sm font-medium text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none transition ease-in-out duration-150",
        style: { transform: CSS.Translate.toString(draggable.transform) },
    };

    return (
        <button ref={draggable.setNodeRef} {...mergedAttributes}>
            {children}
        </button>
    );
}

export default Draggable;

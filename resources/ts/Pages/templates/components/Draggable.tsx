import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

import type { UniqueIdentifier } from "@dnd-kit/core";

type DraggableType = {
    id: UniqueIdentifier;
    disabled?: boolean;
    data?: any;
    children?: React.ReactNode;
};

function Draggable({ id, data, disabled, children }: DraggableType) {
    const draggable = useDraggable({
        id,
        data,
    });

    const disabledAttribute = disabled ? { disabled } : undefined;

    const mergedAttributes = {
        ...draggable.attributes,
        ...draggable.listeners,
        ...disabledAttribute,
        className: "button px-3 py-1 rounded-sm focus:ring-0",
        style: { transform: CSS.Translate.toString(draggable.transform) },
    };

    return (
        <button ref={draggable.setNodeRef} {...mergedAttributes}>
            {children}
        </button>
    );
}

export default Draggable;

import { useDndMonitor, useDroppable } from "@dnd-kit/core";
import React from "react";
import type { UniqueIdentifier } from "@dnd-kit/core";
import classnames from "classnames";

type DropabbleProps = {
    id: UniqueIdentifier;
    className?: string;
    children?: React.ReactNode;
};

function Droppable({ id, className, children }: DropabbleProps) {
    const { isOver, setNodeRef } = useDroppable({
        id,
    });

    useDndMonitor({
        onDragEnd({ over, active }) {
            console.log(active.data.current);
        },
    });

    className = classnames(
        className,
        `${isOver ? "bg-gray-100 shadow-lg border rounded-lg" : ""}`
    );

    return (
        <div className={className} ref={setNodeRef}>
            {children}
        </div>
    );
}

export default Droppable;

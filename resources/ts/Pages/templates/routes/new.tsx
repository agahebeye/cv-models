import React, { useContext, useState } from "react";
import { Head } from "@inertiajs/inertia-react";

import AuthenticatedLayout from "~/Layouts/AuthenticatedLayout";
import { DndContext } from "@dnd-kit/core";
import { sections } from "../data";
import Draggable from "../components/Draggable";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import Droppable from "../Droppable";

export default function New(props: AuthenticatedLayoutProps) {
    const [open, setOpen] = useState(false);
    return (
        <AuthenticatedLayout auth={props.auth}>
            <Head title="New Template" />

            <DndContext>
                <div className="flex h-full">
                    <div className="absolute top-0 left-0 flex items-start h-[calc(100vh-60px)] space-x-2">
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

                    <Droppable
                        id="resume"
                        className="w-full md:max-w-2xl md:mx-auto h-[calc(100vh-110px)] mx-2 bg-white"
                    />
                </div>
            </DndContext>
        </AuthenticatedLayout>
    );
}

function SectionList() {
    return (
        <div className="flex flex-wrap gap-2">
            {sections.map((section, key) => {
                const id = Math.random().toString(36).substring(2, 9);
                return (
                    <Draggable id={id} key={key} data={section}>
                        {section?.name || section.section}
                    </Draggable>
                );
            })}
        </div>
    );
}

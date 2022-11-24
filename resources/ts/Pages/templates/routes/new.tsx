import React, { useContext, useState } from "react";
import { Head } from "@inertiajs/inertia-react";

import AuthenticatedLayout from "~/Layouts/AuthenticatedLayout";
import { DndContext } from "@dnd-kit/core";
import { sections } from "../data";
import Draggable from "../components/Draggable";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function New(props: AuthenticatedLayoutProps) {
    return (
        <AuthenticatedLayout auth={props.auth}>
            <Head title="New Template" />

            <DndContext>
                <div className="flex h-full">
                    <div className="flex items-start space-x-2">
                        <div className="h-[calc(100vh-105px)] w-2/5 p-4 bg-white">
                            <SectionList />
                        </div>
                        <button className="">
                            <Bars3BottomLeftIcon className="w-7 h-7" />
                        </button>
                    </div>
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
                    <Draggable id={id} key={key}>
                        {section?.name || section.section}
                    </Draggable>
                );
            })}
        </div>
    );
}

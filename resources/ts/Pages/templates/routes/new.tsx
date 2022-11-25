import { Head } from "@inertiajs/inertia-react";
import { DndContext } from "@dnd-kit/core";

import AuthenticatedLayout from "~/Layouts/AuthenticatedLayout";

import Droppable from "../components/Droppable";

import classes from "../styles/new.module.css";
import Sidebar from "../components/Sidebar";
import { SectionsProvider } from "../SectionsProvier";

export default function New(props: AuthenticatedLayoutProps) {
    return (
        <AuthenticatedLayout auth={props.auth}>
            <Head title="New Template" />

            <SectionsProvider>
                <DndContext>
                    <div className="flex h-full">
                        <Sidebar />
                        <Droppable id="resume" className={classes.resume} />
                    </div>
                </DndContext>
            </SectionsProvider>
        </AuthenticatedLayout>
    );
}

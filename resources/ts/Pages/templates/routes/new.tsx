import { Head } from "@inertiajs/inertia-react";
import { DndContext } from "@dnd-kit/core";

import AuthenticatedLayout from "~/Layouts/AuthenticatedLayout";

import Sidebar from "../partials/Sidebar";
import { SectionsProvider } from "../SectionsProvier";
import Resume from "../partials/Resume";

export default function New(props: AuthenticatedLayoutProps) {
    return (
        <AuthenticatedLayout auth={props.auth}>
            <Head title="New Template" />

            <SectionsProvider>
                <DndContext>
                    <div className="flex h-full">
                        <Sidebar />
                        <Resume />
                    </div>
                </DndContext>
            </SectionsProvider>
        </AuthenticatedLayout>
    );
}

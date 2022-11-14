import { Head } from "@inertiajs/inertia-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Navigation from "@/Components/Navigation";

import EditorSidebar from "./Partials/EditorSidebar";
import TemplateEditor from "./Partials/TemplateEditor";

export default function New(props) {
    return (
            <AuthenticatedLayout
                navigation={<Navigation showLeftNavigation={false} />}
            >
                <Head title="New template" />

                <div className="flex">
                    <EditorSidebar />

                    <div className="w-full min-h-screen mb-6 bg-white shadow-lg shadow-gray-200"></div>
                </div>
            </AuthenticatedLayout>
    );
}

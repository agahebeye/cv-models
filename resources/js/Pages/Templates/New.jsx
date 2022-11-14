import { Head } from "@inertiajs/inertia-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function New(props) {
    return (
        <AuthenticatedLayout auth={props.auth}>
            <Head title="New template" />

            <div>
                <h1>this is a new template</h1>
            </div>
        </AuthenticatedLayout>
    );
}

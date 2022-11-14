import { Head } from "@inertiajs/inertia-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Home(props) {
    return (
        <AuthenticatedLayout auth={props.auth}>
            <Head title="Home" />

            <div>
                <h1>this is a homepage</h1>
            </div>
        </AuthenticatedLayout>
    );
}

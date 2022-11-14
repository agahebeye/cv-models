import { Head } from "@inertiajs/inertia-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Navigation from "@/Components/Navigation";

export default function Home(props) {
    return (
        <AuthenticatedLayout navigation={<Navigation />}>
            <Head title="Home" />

            <div>
                <h1>this is a homepage</h1>
            </div>
        </AuthenticatedLayout>
    );
}

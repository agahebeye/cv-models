import { Head } from "@inertiajs/inertia-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Navigation from "@/Components/Navigation";

export default function New(props) {
    return (
        <AuthenticatedLayout
            header={<Header />}
            navigation={<Navigation showLeftNavigation={false} />}
        >
            <Head title="New template" />

            <div>
                <h1>this is a new template</h1>
            </div>
        </AuthenticatedLayout>
    );
}

function Header() {
    return (
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
            New template
        </h2>
    );
}

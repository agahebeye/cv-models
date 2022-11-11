import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/inertia-react";

export default function Index(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="flex items-center space-x-2 text-3xl font-semibold leading-tight text-gray-800">
                    <Link
                        className="text-gray-700 border-b border-gray-500"
                        href={route("templates.index")}
                    >
                        Templates
                    </Link>
                    <div className="">/</div>
                    <div>{props.template}</div>
                </h2>
            }
        >
            <div className="pb-6"></div>
        </AuthenticatedLayout>
    );
}

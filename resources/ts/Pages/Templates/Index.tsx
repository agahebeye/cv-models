import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import AuthenticatedLayout from "~/Layouts/AuthenticatedLayout";


export default function Index(props) {
    return (
        <AuthenticatedLayout auth={props.auth}
          header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Templates
                </h2>
            }
        >
            <>
                <Head title="Templates" />
            </>
        </AuthenticatedLayout>
    );
}

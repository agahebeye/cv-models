import React from "react";
import AuthenticatedLayout from "~/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";

export default function Dashboard(props: AuthenticatedLayoutProps) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="text-gray-900 dark:text-gray-100">
                You're logged in!
            </div>
        </AuthenticatedLayout>
    );
}

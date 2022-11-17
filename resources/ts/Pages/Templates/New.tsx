import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import AuthenticatedLayout from "~/Layouts/AuthenticatedLayout";


export default function Index(props) {
    return (
        <AuthenticatedLayout auth={props.auth}
        >
            <>
                <Head title="New Template" />
            </>
        </AuthenticatedLayout>
    );
}

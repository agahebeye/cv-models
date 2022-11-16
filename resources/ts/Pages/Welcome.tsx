import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import AuthenticatedLayout from "~/Layouts/AuthenticatedLayout";

export default function Welcome(props) {
    return (
        <AuthenticatedLayout auth={props.auth}>
            <>
                <Head title="Welcome" />
                <div className="text-2xl font-semibold">hello there</div>
            </>
        </AuthenticatedLayout>
    );
}

import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import AuthenticatedLayout from "~/Layouts/AuthenticatedLayout";

export default function Index(props: AuthenticatedLayoutProps) {
    const templates = Array.from(
        {
            length: 15,
        },
        () => Math.random().toString(36).substring(2, 10)
    );

    return (
        <AuthenticatedLayout
            auth={props.auth}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Templates
                </h2>
            }
        >
            <>
                <Head title="Templates" />

                <div className="pb-6">
                    <div
                        className="flex flex-wrap justify-center gap-6 md:justify-start"
                        id="templates"
                    >
                        {templates.map((templ) => (
                            <Link
                                key={templ}
                                href={route("templates.show", templ)}
                                className="border border-blue-300 h-36 shadow rounded-md bg-white p-4 max-w-[250px] w-full"
                            >
                                <div className="flex space-x-4 animate-pulse">
                                    <div className="flex-1 py-1 space-y-6">
                                        <div className="h-2 rounded bg-slate-200"></div>
                                        <div className="space-y-3">
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="h-2 col-span-2 rounded bg-slate-200"></div>
                                                <div className="h-2 col-span-1 rounded bg-slate-200"></div>
                                            </div>
                                            <div className="h-2 rounded bg-slate-200"></div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </>
        </AuthenticatedLayout>
    );
}

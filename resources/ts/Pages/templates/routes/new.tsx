import React, { useContext, useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";

import AuthenticatedLayout from "~/Layouts/AuthenticatedLayout";
import SelectionList from "../components/sections/SectionList";
import SectionProvider from "../components/SectionProvider";
import Page from "../components/resumes/Page";

export default function New(props: AuthenticatedLayoutProps) {
    const [open, setOpen] = useState(false);

    return (
        <AuthenticatedLayout auth={props.auth}>
            <Head title="New Template" />

            <SectionProvider>
                <div className="md:space-x-4 md:flex">
                    <div
                        id="sidebar"
                        className={`min-h-[80vh] shadow-lg bg-white w-full z-10 md:w-[500px] ${
                            open ? "block" : "hidden md:block"
                        }`}
                    >
                        <div className="w-full p-4 text-right md:hidden">
                            <button onClick={() => setOpen(false)}>
                                <XMarkIcon className={`w-5 h-5`} />
                            </button>
                        </div>
                        <SelectionList />
                    </div>

                    <div className="flex items-start w-full">
                        {!open && (
                            <button
                                className="mr-2"
                                onClick={() => setOpen(true)}
                            >
                                <Bars3BottomLeftIcon
                                    className={`w-5 h-5 md:hidden`}
                                />
                            </button>
                        )}

                        <Page open={open} />
                    </div>
                </div>
            </SectionProvider>
        </AuthenticatedLayout>
    );
}

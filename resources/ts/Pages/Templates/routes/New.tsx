import React, { useState } from "react";
import { useImmer } from "use-immer";
import { Link, Head } from "@inertiajs/inertia-react";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";

import AuthenticatedLayout from "~/Layouts/AuthenticatedLayout";
import SelectionList from "../components/SectionList";

import {initialSections} from '../data';

export default function New(props: AuthenticatedLayoutProps) {
    const [open, setOpen] = useState(false);
    const [sections, UpdateSections] = useImmer(initialSections);

    return (
        <AuthenticatedLayout auth={props.auth}>
            <Head title="New Template" />

            <div>
                <div className="md:space-x-4 md:flex">
                    <div
                        id="sidebar"
                        className={`min-h-[82vh] shadow-lg bg-white w-full z-10 md:w-[500px] ${
                            !open ? "block" : "hidden md:block"
                        }`}
                    >
                        <div className="w-full p-4 text-right md:hidden">
                            <button onClick={() => setOpen(false)}>
                                <XMarkIcon className={`w-5 h-5`} />
                            </button>
                        </div>

                        <SelectionList
                            sections={sections}
                            onUpdate={UpdateSections}
                        />
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

                        <div
                            id="editor"
                            className={`w-full min-h-screen bg-white rounded-sm shadow-lg lg:max-w-3xl ${
                                open ? "hidden md:block" : ""
                            }`}
                        ></div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

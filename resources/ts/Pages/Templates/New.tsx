import React, { useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";

import AuthenticatedLayout from "~/Layouts/AuthenticatedLayout";

export default function New(props: AuthenticatedLayoutProps) {
    const [open, setOpen] = useState(false);
    const [section, setSection] = useState([
        {
            name: "Person Details",
            fields: [{ label: "Given name", value: "" }],
        },
    ]);

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

                        <div id="sections" className="px-4">
                            <section>
                                <h3 className="text-xl">{section[0].name}</h3>
                                <form action="" className="mt-4">
                                    <div className="flex flex-col">
                                        <label htmlFor="">
                                            {section[0].fields[0].label}
                                        </label>
                                        <input
                                        onChange={() => console.log('section 1')}
                                            type="text"
                                            value={section[0].fields[0].value}
                                        />
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>

                    <div className="flex items-start hidden w-full">
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
                        >
                            editor
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

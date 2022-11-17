import React, { useState } from "react";
import { useImmer } from "use-immer";
import { Link, Head } from "@inertiajs/inertia-react";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";

import AuthenticatedLayout from "~/Layouts/AuthenticatedLayout";

type Section = {
    name: string;
    fields: Field[];
};

type Field = {
    label: string;
    value: string;
};

const sections = [
    {
        name: "Person Details",
        fields: [{ label: "Given name", value: "" }],
    },
];

export default function New(props: AuthenticatedLayoutProps) {
    const [open, setOpen] = useState(false);
    const [section, UpdateSection] = useImmer(sections);

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement>,
        section: string,
        field: string
    ) {
        UpdateSection((draft) => {
            const s = draft.find((s) => s.name === section) as Section;
            const f = s.fields.find((f) => (f.label = field)) as Field;
            f.value = e.target.value;
        });
    }

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
                            {sections.map((s: Section) => (
                                <section key="s.name">
                                    <h3 className="text-xl"></h3>
                                    <form action="" className="mt-4">
                                        {s.fields.map((f) => (
                                            <div
                                                className="flex flex-col"
                                                key={f.label}
                                            >
                                                <label htmlFor="">{f.label}</label>
                                                <input
                                                    onChange={(event) => {
                                                        handleChange(
                                                            event,
                                                            s.name,
                                                            f.label
                                                        );
                                                    }}
                                                    type="text"
                                                />
                                            </div>
                                        ))}
                                    </form>
                                </section>
                            ))}
                        </div>
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
                        >
                            {section[0].fields[0].label}:{" "}
                            {section[0].fields[0].value}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

import TextInput from "~/Components/TextInput";
import InputLabel from "~/Components/InputLabel";

import type { Section, Field } from "../types";
import { Updater } from "use-immer";

type Props = {
    sections: Section[];
    onUpdate: Updater<Section[]>;
};

export default function SelectionList({ sections, onUpdate }: Props) {
    function handleChange(
        e: React.ChangeEvent<HTMLInputElement>,
        section: string,
        field: string
    ) {
        onUpdate((draft) => {
            const s = draft.find((s) => s.name === section) as Section;
            const f = s.fields.find((f) => (f.label = field)) as Field;
            f.value = e.target.value;
        });
    }

    return (
        <div
            id="sections"
            className="px-6 pb-6 overflow-y-auto h-[80vh] md:pt-4"
        >
            {sections.map((section: Section) => (
                <section key="section.name">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <h3 className="text-xl">{section.name}</h3>
                                    <ChevronUpIcon
                                        className={`${
                                            open ? "rotate-180 transform" : ""
                                        } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    <form
                                        action=""
                                        className="sm:grid sm:grid-cols-2 md:grid-cols-1 sm:gap-2"
                                    >
                                        {section.fields.map((field) => (
                                            <div
                                                className="flex flex-col mt-4"
                                                key={field.label}
                                            >
                                                <InputLabel
                                                    forInput={field.label}
                                                    value={field.label}
                                                />

                                                <TextInput
                                                    className="block w-full mt-1"
                                                    handleChange={(event) =>
                                                        handleChange(
                                                            event,
                                                            section.name,
                                                            field.label
                                                        )
                                                    }
                                                />
                                            </div>
                                        ))}
                                    </form>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </section>
            ))}
        </div>
    );
}

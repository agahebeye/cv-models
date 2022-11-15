import { useState, useContext } from "react";
import { Tab } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

import { EditorContext } from "../../Contexts/EditorProvider";
import TemplateDetailsForm from "./TemplateDetailsForm";
import TemplateAttributes from "./TemplateAttributes";

export default function Sidebar() {
    const { isOpen, setIsOpen } = useContext(EditorContext);
    const tabClassName = ({ selected }) => `
                  w-full py-1.5 text-sm font-medium leading-5 text-gray-700
                  outline-none
                  ${selected ? "bg-gray-100" : ""}`;

    return (
        <aside className="relative">
            {!isOpen && (
                <div className="w-full absolute md:relative h-screen p-6 md:mr-6 overflow-y-auto bg-white shadow-lg md:w-[320px] dark:bg-gray-900 dark:text-gray-100 shadow-gray-200">
                    <button
                        className="mb-10 text-xs text-right underline"
                        onClick={() =>
                            setIsOpen((prevState) => (prevState = false))
                        }
                    >
                        <XMarkIcon className="w-5 h-5" />
                    </button>

                    <nav className="space-y-8 text-sm">
                        <Tab.Group>
                            <Tab.List className="flex space-x-1 border-b ">
                                <Tab className={tabClassName}>General</Tab>
                                <Tab className={tabClassName}>Tools</Tab>
                                <Tab className={tabClassName}>Tab 3</Tab>
                            </Tab.List>

                            <Tab.Panels>
                                <Tab.Panel>
                                    <TemplateDetailsForm />
                                </Tab.Panel>
                                <Tab.Panel>
                                    <TemplateAttributes />
                                </Tab.Panel>
                                <Tab.Panel>Content 3</Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </nav>
                </div>
            )}
        </aside>
    );
}

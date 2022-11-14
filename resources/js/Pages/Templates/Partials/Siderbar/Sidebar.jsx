import { useState, useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { EditorContext } from "../../Contexts/EditorProvider";
import { Tab } from "@headlessui/react";
import TemplateDetailsForm from "./TemplateDetailsForm";

export default function Sidebar() {
    const { isOpen, setIsOpen } = useContext(EditorContext);
    const tabClassName = ({ selected }) => `
                  w-full py-1.5 text-sm font-medium leading-5 text-gray-700
                  outline-none
                  ${selected ? "bg-gray-100" : ""}`;

    return (
        <aside>
            {!isOpen && (
                <div className="w-full min-h-screen p-6 mr-6 bg-white shadow-lg sm:w-60 dark:bg-gray-900 dark:text-gray-100 shadow-gray-200">
                    <div className="mb-10 text-right">
                        <button
                            className="text-xs underline"
                            onClick={() =>
                                setIsOpen((prevState) => (prevState = false))
                            }
                        >
                            <XMarkIcon className="w-5 h-5" />
                        </button>
                    </div>

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
                                <Tab.Panel>Content 2</Tab.Panel>
                                <Tab.Panel>Content 3</Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </nav>
                </div>
            )}
        </aside>
    );
}

import { useState, useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { EditorContext } from "../EditorProvider";
import { Tab } from "@headlessui/react";

export default function EditorSidebar() {
    const { isOpen, setIsOpen } = useContext(EditorContext);

    return (
        <aside>
            {isOpen && (
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
                            <Tab.List>
                                <Tab>Tab 1</Tab>
                                <Tab>Tab 2</Tab>
                                <Tab>Tab 3</Tab>
                            </Tab.List>
                            <Tab.Panels>
                                <Tab.Panel>Content 1</Tab.Panel>
                                <Tab.Panel>Content 2</Tab.Panel>
                                <Tab.Panel>Content 3</Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                        {/* <div className="space-y-2">
                            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">
                                Getting Started
                            </h2>
                            <div className="flex flex-col space-y-1">
                                <a rel="noopener noreferrer" href="#">
                                    Installation
                                </a>
                                <a rel="noopener noreferrer" href="#">
                                    Plugins
                                </a>
                                <a rel="noopener noreferrer" href="#">
                                    Migrations
                                </a>
                                <a rel="noopener noreferrer" href="#">
                                    Appearance
                                </a>
                                <a rel="noopener noreferrer" href="#">
                                    Mamba UI
                                </a>
                            </div>
                        </div> */}
                    </nav>
                </div>
            )}
        </aside>
    );
}

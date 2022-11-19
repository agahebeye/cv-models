import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { isArrayLikeObject } from "lodash";

import TextInput from "~/Components/TextInput";
import InputLabel from "~/Components/InputLabel";

export default function SectionItem({ name, children }: any) {
    return (
        <Disclosure as="div" className="mt-4">
            {({ open }) => (
                <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <h3 className="text-xl">{name}</h3>
                        <ChevronUpIcon
                            className={`${
                                open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-purple-500`}
                        />
                    </Disclosure.Button>

                    <Disclosure.Panel
                        static
                        className="px-4 pt-4 pb-2 text-sm text-gray-500"
                    >
                        {children}
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}

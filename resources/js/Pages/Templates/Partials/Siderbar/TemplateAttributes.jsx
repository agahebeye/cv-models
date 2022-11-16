import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function TemplateAttributes() {
    const attributes = [
        "Personal details",
        "Employment",
        "Profile",
        "Education",
        "Skills",
        "Languages",
        "Hobbies",
        "Courses",
        "Internships",
        "Certificates",
        "References",
        "Achievements",
        "Footer",
        "Activities",
        "Qualities",
    ];

    const sections = {
        name: "Person details",
        fields: [
            {
                name: "Given name",
                value: "",
                type: "input",
            },
        ],
    };

    return (
        <div className="space-y-3">
            {attributes.map((attribute) => (
                <div className="w-full bg-white rounded-2xl" key={attribute}>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <span>{attribute}</span>
                                    <ChevronUpIcon
                                        className={`${
                                            open ? "rotate-180 transform" : ""
                                        } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    If you're unhappy with your purchase for any
                                    reason, email us within 90 days and we'll
                                    refund you in full, no questions asked.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            ))}
        </div>
    );
}

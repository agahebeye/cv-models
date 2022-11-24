import React, { ChangeEvent, useContext, useRef } from "react";
import { CheckIcon, TrashIcon, PencilIcon } from "@heroicons/react/24/outline";

import InputLabel from "~/Components/InputLabel";
import PrimaryButton from "~/Components/PrimaryButton";
import TextInput from "~/Components/TextInput";

import { SectionContext } from "../SectionProvider";
import SectionItem from "./SectionItem";

export default function Education() {
    const { sections, setSections } = useContext(SectionContext);
    const parentRef = useRef<HTMLDivElement | null>(null);

    function onEducationChanged(
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        key: number
    ) {
        setSections((draft) => {
            const education = draft.educations[key];
            const eduKey = event.target.name as keyof typeof education;
            education[eduKey] = event.target.value;
        });
    }

    function onEducationDone(key: number) {
        const parent = parentRef.current as HTMLDivElement;
        const editBlock = parent.children[key].children[0];
        const formBlock = parent.children[key].children[1];

        editBlock.classList.remove("hidden");
        formBlock.classList.add("hidden");
    }

    function onEducationUndone(key: number) {
        const parent = parentRef.current as HTMLDivElement;
        const editBlock = parent.children[key].children[0];
        const formBlock = parent.children[key].children[1];

        editBlock.classList.add("hidden");
        formBlock.classList.remove("hidden");
    }

    function onEducationAdded() {
        const newEducation = { title: "", school: "", description: "" };

        setSections((draft) => {
            draft.educations.push(newEducation);
        });
    }

    function onEducationRemoved(key: number) {
        setSections((draft) => {
            draft.educations = draft.educations.filter(
                (eduction, i) => i != key
            );
        });
    }

    return (
        <SectionItem name={`Education`}>
            <div className="space-y-4" ref={parentRef}>
                {sections.educations.map((education, key) => {
                    return (
                        <div key={key}>
                            <div className="flex items-center justify-between hidden p-3 mt-2 mb-4 border rounded-lg">
                                <div>{education.title || `[Education]`}</div>
                                <button onClick={() => onEducationUndone(key)}>
                                    <PencilIcon className="w-4 h-4" />
                                </button>
                            </div>

                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                }}
                                className="flex flex-wrap gap-4 p-6 border rounded-lg"
                                key={key}
                            >
                                <div>
                                    <InputLabel
                                        forInput="title"
                                        value="Title"
                                    />

                                    <TextInput
                                        name="title"
                                        value={education.title}
                                        handleChange={(e) =>
                                            onEducationChanged(e, key)
                                        }
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        forInput="school"
                                        value="School"
                                    />
                                    <TextInput
                                        name="school"
                                        value={education.school}
                                        handleChange={(e) =>
                                            onEducationChanged(e, key)
                                        }
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        forInput="education"
                                        value="Description"
                                    />
                                    <TextInput
                                        name="description"
                                        type="textarea"
                                        handleChange={(e) => onEducationChanged(key)}
                                    />
                                </div>

                                <div className="w-full space-x-3 text-right">
                                    <button
                                        onClick={() => onEducationDone(key)}
                                    >
                                        <CheckIcon className="w-5 h-5" />
                                    </button>

                                    <button
                                        onClick={() => onEducationRemoved(key)}
                                    >
                                        <TrashIcon className="w-5 h-5" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    );
                })}
            </div>

            <PrimaryButton
                type="button"
                className=""
                onClick={onEducationAdded}
            >
                add new education
            </PrimaryButton>
        </SectionItem>
    );
}

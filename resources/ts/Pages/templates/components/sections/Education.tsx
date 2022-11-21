import React, { ChangeEvent, useContext } from "react";
import { CheckIcon, TrashIcon, PencilIcon } from "@heroicons/react/24/outline";

import InputLabel from "~/Components/InputLabel";
import PrimaryButton from "~/Components/PrimaryButton";
import TextInput from "~/Components/TextInput";

import { SectionContext } from "../SectionProvider";
import SectionItem from "./SectionItem";

export default function Education() {
    const { sections, setSections } = useContext(SectionContext);

    const educations = sections.educations.map((education) => ({
        ...education,
        done: false,
    }));

    function onEducationChange(event: ChangeEvent) {}
    function onFormFinished(key: number) {}
    function onEducationAdded() {
        setSections((draft) => {
            draft.educations.push({
                title: "",
                school: "",
                description: "",
            });
        });
    }

    return (
        <SectionItem name={`Education`}>
            <div className="space-y-4">
                {educations.map((education, key) => {
                    return (
                        <React.Fragment key={key}>
                            {education.done ? (
                                <div className="flex items-center justify-between p-3 mt-2 mb-4 border rounded-lg">
                                    <div>{`[Education]`}</div>
                                    <button>
                                        <PencilIcon className="w-4 h-4" />
                                    </button>
                                </div>
                            ) : (
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
                                            value={education.title}
                                            handleChange={onEducationChange}
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            forInput="school"
                                            value="School"
                                        />
                                        <TextInput
                                            value={education.school}
                                            handleChange={onEducationChange}
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            forInput="education"
                                            value="Description"
                                        />
                                        <TextInput type="textarea" />
                                    </div>

                                    <div className="w-full space-x-3 text-right">
                                        <button
                                            onClick={() => onFormFinished(key)}
                                        >
                                            <CheckIcon className="w-5 h-5" />
                                        </button>

                                        <button>
                                            <TrashIcon className="w-5 h-5" />
                                        </button>
                                    </div>
                                </form>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>

            <PrimaryButton
                type="button"
                className="mt-4"
                onClick={onEducationAdded}
            >
                add new education
            </PrimaryButton>
        </SectionItem>
    );
}

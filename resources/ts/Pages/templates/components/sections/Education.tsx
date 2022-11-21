import { ChangeEvent, useContext, useId } from "react";
import InputLabel from "~/Components/InputLabel";
import PrimaryButton from "~/Components/PrimaryButton";
import TextInput from "~/Components/TextInput";
import { SectionContext } from "../SectionProvider";
import SectionItem from "./SectionItem";

export default function Education() {
    const {
        sections: { educations },
        setSections,
    } = useContext(SectionContext);

    const education = {
        title: "",
        school: "",
        description: "",
    };

    function onEducationChange(event: ChangeEvent) {}
    function onEducationAdded() {
        setSections((draft) => {
            draft.educations = [...draft.educations, education];
        });
    }

    return (
        <SectionItem name={`Education`}>
            <div className="space-y-4">
                {educations.map((education) => {
                    const key = Math.random().toString(36).substring(2, 9);

                    return (
                        <form
                            className="flex flex-wrap gap-4 p-4 border"
                            key={key}
                        >
                            <div>
                                <InputLabel forInput="title" value="Title" />
                                <TextInput
                                    value={education.title}
                                    handleChange={onEducationChange}
                                />
                            </div>

                            <div>
                                <InputLabel forInput="school" value="School" />
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
                        </form>
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

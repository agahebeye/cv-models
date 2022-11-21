import React, { useContext } from "react";

import TextInput from "~/Components/TextInput";
import InputLabel from "~/Components/InputLabel";

import SectionItem from "./SectionItem";
import { SectionContext } from "../SectionProvider";

export default function PersonalDetails() {
    const { sections, setSections } = useContext(SectionContext);

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        setSections((draft) => {
            const key = e.target.name as keyof typeof draft.personalDetails;
            draft.personalDetails[key] = e.target.value;
        });
    }

    return (
        <SectionItem name={"Personal Details"}>
            <form className="flex flex-wrap gap-4">
                <div>
                    <InputLabel forInput="name" value="Given name" />
                    <TextInput
                        name="firstName"
                        handleChange={handleChange}
                        value={sections.personalDetails.firstName}
                    />
                </div>

                <div>
                    <InputLabel forInput="email" value="email adress" />

                    <TextInput
                        name="email"
                        type="email"
                        handleChange={handleChange}
                        value={sections.personalDetails.email}
                    />
                </div>
            </form>
        </SectionItem>
    );
}

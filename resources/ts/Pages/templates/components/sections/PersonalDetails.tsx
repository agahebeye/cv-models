import React, { ChangeEvent, useContext } from "react";

import TextInput from "~/Components/TextInput";
import InputLabel from "~/Components/InputLabel";

import SectionItem from "./SectionItem";
import { SectionContext } from "../SectionProvider";

export default function PersonalDetails() {
    const { sections, setSections } = useContext(SectionContext);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setSections((draft) => {
            draft.personalDetails[e.target.name] = e.target.value;
        });
    }

    return (
        <SectionItem name={"Personal Details"}>
            <form>
                <div>
                    <InputLabel forInput="name" value="Given name" />
                    <TextInput
                        name="name"
                        handleChange={handleChange}
                        value={sections.personalDetails.name}
                    />
                </div>
            </form>
        </SectionItem>
    );
}

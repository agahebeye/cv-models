import { ChangeEvent, useContext } from "react";
import { SectionContext } from "../SectionProvider";
import SectionItem from "./SectionItem";

export default function Profile() {
    const {
        sections: { profile },
        setSections,
    } = useContext(SectionContext);

    function onProfileChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setSections((draft) => {
            draft.profile.description = event.target.value;
        });
    }

    return (
        <SectionItem name={"Profile"}>
            <div>
                <h4>Description</h4>
                <textarea name="profile" onChange={onProfileChange}></textarea>
            </div>
        </SectionItem>
    );
}

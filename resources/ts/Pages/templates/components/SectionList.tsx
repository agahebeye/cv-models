import TextInput from "~/Components/TextInput";
import InputLabel from "~/Components/InputLabel";

import type { Section, Field } from "../types";
import { Updater } from "use-immer";

type Props = {
    sections: Section[];
    onUpdate: Updater<Section[]>;
};

export default function SelectionList({ sections, onUpdate }: Props) {
    function handleChange(
        e: React.ChangeEvent<HTMLInputElement>,
        section: string,
        field: string
    ) {
        onUpdate((draft) => {
            const s = draft.find((s) => s.name === section) as Section;
            const f = s.fields.find((f) => (f.label = field)) as Field;
            f.value = e.target.value;
        });
    }

    return (
        <div id="sections" className="px-6 pb-6 overflow-y-auto h-[80vh] md:pt-4">
            {sections.map((section: Section) => (
                <section key="section.name">
                    <h3 className="text-xl">{section.name}</h3>

                    <form action="" className="sm:grid sm:grid-cols-2 md:grid-cols-1 sm:gap-2">
                        {section.fields.map((field) => (
                            <div
                                className="flex flex-col mt-4"
                                key={field.label}
                            >
                                <InputLabel
                                    forInput={field.label}
                                    value={field.label}
                                />

                                <TextInput
                                    className="block w-full mt-1"
                                    handleChange={(event) =>
                                        handleChange(
                                            event,
                                            section.name,
                                            field.label
                                        )
                                    }
                                />
                            </div>
                        ))}
                    </form>
                </section>
            ))}
        </div>
    );
}

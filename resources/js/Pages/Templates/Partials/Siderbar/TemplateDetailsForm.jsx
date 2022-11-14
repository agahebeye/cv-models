import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import SelectBox from '@/Components/SelectBox'
import { useForm } from "@inertiajs/inertia-react";

export default function TemplateDetailsForm() {
    const { data, setData, post, processing, errors, reset } = useForm('TemplateDetails', {
        title: "",
        description: "",
    });

    return (
        <form onSubmit={null}>
            <div>
                <InputLabel forInput="title" value="Title" />

                <TextInput
                    type="text"
                    name="title"
                    value={data.title}
                    className="block w-full py-1 mt-1 text-sm"
                    isFocused={true}
                    handleChange={(e) => setData("title", e.target.value)}
                />

                <InputError message={errors.title} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel forInput="description" value="Description" />

                <SelectBox
                    type="text"
                    name="description"
                    value={data.description}
                    className="block w-full mt-1"
                    handleChange={(e) => setData("description", e.target.value)}
                />

                <InputError message={errors.description} className="mt-2" />
            </div>
        </form>
    );
}

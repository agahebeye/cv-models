import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import MultilineInput from '@/Components/MultilineInput'
import { useForm } from "@inertiajs/inertia-react";

export default function TemplateDetailsForm() {
    const { data, setData, post, processing, errors, reset } = useForm('TemplateDetails', {
        title: "",
        description: "",
    });

    return (
        <form onSubmit={null}>
            <h3 className="text-xl font-semibold text-gray-700">Template details</h3>

            <div className="mt-4">
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

                <MultilineInput
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

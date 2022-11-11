import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Skeleton from "./Components/Skeleton";

export default function Index(props) {
    const templates = Array.from(
        {
            length: 15,
        },
        () => Math.random().toString(36).substring(2, 10)
    );

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="text-3xl font-semibold leading-tight text-gray-800">
                    Templates
                </h2>
            }
        >
            <div className="pb-6">
                <div
                    className="flex flex-wrap gap-6 sm:justify-start"
                    id="templates"
                >
                    {templates.map((templ) => (
                        <Skeleton key={templ} templ={templ} />
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Index(props) {
    const templates = Array.from(
        {
            length: 15,
        },
        (_, i) => i + 1
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
            <div className="flex flex-wrap justify-between gap-6 sm:justify-start">
                {templates.map((i) => (
                    <div
                        key={i}
                        class="border border-blue-300 h-36 shadow rounded-md p-4 max-w-[250px] w-full"
                    >
                        <div class="animate-pulse flex space-x-4">
                            {/* <div class="rounded-full bg-slate-200 h-10 w-10"></div> */}
                            <div class="flex-1 space-y-6 py-1">
                                <div class="h-2 bg-slate-200 rounded"></div>
                                <div class="space-y-3">
                                    <div class="grid grid-cols-3 gap-4">
                                        <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                                        <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                                    </div>
                                    <div class="h-2 bg-slate-200 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}

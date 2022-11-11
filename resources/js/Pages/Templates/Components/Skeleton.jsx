import {Link} from '@inertiajs/inertia-react';

export default function Skeleton({templ}) {
    return (
        <Link href={`/templates/${templ}`} className="border border-blue-300 h-36 shadow rounded-md p-4 max-w-[250px] w-full">
            <div className="flex space-x-4 animate-pulse">
                <div className="flex-1 py-1 space-y-6">
                    <div className="h-2 rounded bg-slate-200"></div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 col-span-2 rounded bg-slate-200"></div>
                            <div className="h-2 col-span-1 rounded bg-slate-200"></div>
                        </div>
                        <div className="h-2 rounded bg-slate-200"></div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

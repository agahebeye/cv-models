import React from "react";
import ApplicationLogo from "~/Components/ApplicationLogo";
import { Link } from "@inertiajs/inertia-react";

export default function Guest({ header, children }: LayoutProps) {
    return (
        <div className="flex flex-col items-center min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0 dark:bg-gray-900">
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 text-gray-500 fill-current" />
                </Link>
            </div>

            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md dark:bg-gray-800 sm:rounded-lg">
                {header && (
                    <header className="bg-white shadow dark:bg-gray-800">
                        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}
                {children}
            </div>
        </div>
    );
}

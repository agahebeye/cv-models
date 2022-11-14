import Navigation from "@/Components/Navigation";

export default function AuthenticatedLayout({ navigation, header, children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            {navigation}

            {header && (
                <header className="bg-white">
                    <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main className="px-4 pt-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {children}
            </main>
        </div>
    );
}

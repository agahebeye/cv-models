import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Home() {
    return (
        <AuthenticatedLayout>
            <div>
                <h1>this is a homepage</h1>
            </div>
        </AuthenticatedLayout>
    );
}

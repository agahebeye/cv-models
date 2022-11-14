import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Home(props) {
    return (
        <AuthenticatedLayout auth={props.auth}>
            <div>
                <h1>this is a homepage</h1>
            </div>
        </AuthenticatedLayout>
    );
}

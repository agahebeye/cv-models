import PersonalDetails from "./PersonalDetails";
import Profile from "./Profile";

export default function SectionList() {
    return (
        <div
            id="sections"
            className="px-6 pb-6 overflow-y-auto h-[80vh] md:pt-4"
        >
            <section key="section.name">
                <PersonalDetails />
                <Profile />
            </section>
        </div>
    );
}

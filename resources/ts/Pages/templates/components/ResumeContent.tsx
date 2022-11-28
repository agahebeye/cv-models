export function PersonalDetailsList({ details }: { details: any[] }) {
    if (details.length < 1) {
        return <></>;
    }

    return (
        <div id="personalDetails">
            <Header name="Personal Details" />

            {details.map((section) => (
                <div key={section.title} className="flex space-x-2 text-sm">
                    <div className="font-semibold capitalize">
                        {section.title}:
                    </div>
                    <div className="">[ {section.title} ]</div>
                </div>
            ))}
        </div>
    );
}

export function EducationList({ educations }: { educations: any[] }) {
    if (educations.length < 1) {
        return <></>;
    }

    return (
        <div id="education" className="mt-4">
            <h3 className="text-xl font-bold">Education</h3>
        </div>
    );
}

export function EmploymentList({ employements }: { employements: any[] }) {
    if (employements.length < 1) {
        return <></>;
    }

    return (
        <div id="employment" className="mt-4">
            <h3 className="text-xl font-bold">Employment</h3>
        </div>
    );
}

export function Header({ name }: { name: string }) {
    return <h3 className="mb-2 text-xl font-bold">{name}</h3>;
}

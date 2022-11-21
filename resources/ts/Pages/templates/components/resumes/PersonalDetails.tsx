import {isEmpty, capitalize, lowerCase} from 'lodash';
import { initialSections } from '../../data';

type PersonalDetailsType = {
    details: typeof initialSections.personalDetails
}

export default function PersonalDetails({ details }: PersonalDetailsType) {
    const title = (str: string) => capitalize(lowerCase(str));
    return (
        <section id="personal--details">
            <h3 className="text-xl font-semibold text-gray-800">
                Personal Details
            </h3>

            <div className="mt-2">
                {Object.keys(details).map((obj) => {
                    const key = obj as keyof typeof details;
                    const added = !isEmpty(details[key]);

                    if (added) {
                        return (
                            <div key={key}>
                                {`${title(key)}: ${
                                    details[key]
                                }`}
                            </div>
                        );
                    }

                    return;
                })}
            </div>
        </section>
    );
}

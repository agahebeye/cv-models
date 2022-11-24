export const initialSections =
{
    personalDetails: {
        firstName: '',
        lastName: '',
        email: ''
    },
    profile: {
        description: ''
    },
    educations: [{
        title: '',
        school: '',
        description: ''
    }]
}

export const sections = [{
    name: 'firstName',
    section: 'personalDetails'
}, {
    name: 'lastName',
    section: 'personalDetails'
}, {
    name: 'email',
    section: 'personalDetails'
}, {
    section: 'education'
}, {
    section: 'employment',
}, {
    section: 'skills'
}, {
    section: 'languages'
}]

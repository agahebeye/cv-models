export const initialSections = [{
    title: 'given name',
    category: 'personalDetails',
}, {
    title: 'family name',
    category: 'personalDetails'
}, {
    title: 'email',
    category: 'personalDetails'
},  {
    title: 'headline',
    category: 'personalDetails'
},  {
    title: 'phone number',
    category: 'personalDetails'
},  {
    title: 'address',
    category: 'personalDetails'
},  {
    title: 'post code',
    category: 'personalDetails'
},  {
    title: 'city',
    category: 'personalDetails'
}, {
    type: 'entries',
    category: 'education'
},{
    type: 'description',
    category: 'profile'
}, {
    type: 'entries',
    category: 'employment',
}, {
    type: 'level',
    category: 'skills'
}, {
    type: 'level',
    category: 'languages'
}]

export function getSectionType(type: string, title?: string) {
    switch (type) {
        case 'description': return {
            description: ''
        }

        case 'entries': return {
            value: '',
            source: '',
            city: '',
            started: '',
            ended: '',
            description: ''
        }

        case 'level': return {
            value: '',
            level: ''
        }

        default: return {
            title,
            value: ''
        }
    }
}

export const initialSections = [{
    title: 'firstName',
    category: 'personalDetails',
}, {
    title: 'lastName',
    category: 'personalDetails'
}, {
    title: 'email',
    category: 'personalDetails'
}, {
    type: 'entries',
    category: 'education'
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

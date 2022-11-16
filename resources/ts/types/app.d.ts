declare global {
    declare function route(): any
    declare function route(name: string, params?: any): any
}

export {}
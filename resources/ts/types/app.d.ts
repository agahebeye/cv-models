declare global {
    declare function route(): any
    declare function route(name: string, params?: any): any

    declare type User = {
        id: number,
        name: string,
        email: string
    }
}

export { }
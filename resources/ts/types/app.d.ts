import type { Errors } from '@inertiajs/inertia'

declare global {
    declare function route(): any
    declare function route(name: string, params?: any): any

    declare type User = {
        id: number,
        name: string,
        email: string
    }

    declare type LayoutProps = {
        header?: React.ReactNode;
        children: React.ReactNode;
        errors?: Errors;
    }

    declare type AuthenticatedLayoutProps = {
        auth: { user?: User }
    } & LayoutProps
}



export { }
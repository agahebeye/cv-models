import React, { useEffect } from 'react';
import Checkbox from '~/Components/Checkbox';
import GuestLayout from '~/Layouts/GuestLayout';
import InputError from '~/Components/InputError';
import InputLabel from '~/Components/InputLabel';
import PrimaryButton from '~/Components/PrimaryButton';
import TextInput from '~/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

interface Props {
    canResetPassword: boolean;
    status: any;
}

export default function Login({ status, canResetPassword }: Props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event: React.FormEvent<HTMLInputElement>) => {
       setData(event.currentTarget.name, event.currentTarget.type === 'checkbox' ? event.currentTarget.checked : event.currentTarget.value);
    };

    const submit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 text-sm font-medium text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <div>
                    <InputLabel forInput="email" value="Email" />

                    <TextInput
                        type="text"
                        name="email"
                        value={data.email}
                        className="block w-full mt-1"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="password" value="Password" />

                    <TextInput
                        type="password"
                        name="password"
                        value={data.password}
                        className="block w-full mt-1"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />
                        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="text-sm text-gray-600 underline rounded-md dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton className="ml-4" processing={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}

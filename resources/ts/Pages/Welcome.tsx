import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className='text-2xl font-semibold'>
                hello there
            </div>
          
        </>
    );
}

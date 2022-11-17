import React from 'react';

type InputLabelProps = {
    forInput: string,
    value?: string,
    className?: string,
    children?: React.ReactNode
}

export default function InputLabel({ forInput, value, className, children }: InputLabelProps) {
    return (
        <label htmlFor={forInput} className={`block font-medium text-sm text-gray-700 dark:text-gray-300 ` + className}>
            {value ? value : children}
        </label>
    );
}

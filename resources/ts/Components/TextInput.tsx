import React, { ChangeEvent, forwardRef, useEffect, useRef } from "react";

type TextInputProps = React.ComponentPropsWithRef<"input">
& {
    isFocused?: boolean;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default forwardRef(function TextInput(
    props: TextInputProps,
    ref: React.Ref<HTMLInputElement | HTMLTextAreaElement | null>
) {
    const input = ref ? ref : useRef(null);

    const inputProps = {
        type: typeof props.type === "undefined" ? "text" : props.type,
        name: props.name,
        value: props.value,
        className:
            "border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm " +
            props.className,
        autoComplete: props.autoComplete,
        required: props.required,
        onChange: (
            e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
        ) => props.handleChange?.(e),
    };

    useEffect(() => {
        if (props.isFocused) {
            input.current?.focus();
        }
    }, []);

    if (props.type === "textarea") {
        return <textarea {...inputProps} />;
    }

    return <input {...inputProps} />;
});

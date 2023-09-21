import { ComponentProps, forwardRef } from "react";
import { useFormContext } from "react-hook-form";

type InputProps = ComponentProps<"input"> & {
    name: string;
    label: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, reference) => {
    const form = useFormContext();
    const state = form.getFieldState(props.name);

    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <input ref={reference} {...props} />
            {state.error && <p>{state.error.message}</p>}
        </>
    );
});

export const Button = forwardRef<HTMLButtonElement, ComponentProps<"button">>((props, reference) => {
    return <button ref={reference} {...props} />;
});

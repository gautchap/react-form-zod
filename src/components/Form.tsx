import { ComponentProps } from "react";
import { FieldValues, FormProvider, SubmitHandler, UseFormReturn } from "react-hook-form";

type FormProps<T extends FieldValues> = Omit<ComponentProps<"form">, "onSubmit"> & {
    form: UseFormReturn<T>;
    onSubmit: SubmitHandler<T>;
};

export const Form = <T extends FieldValues>({ form, onSubmit, children, ...props }: FormProps<T>) => (
    <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} {...props}>
            <fieldset disabled={form.formState.isSubmitting}>{children}</fieldset>
        </form>
    </FormProvider>
);

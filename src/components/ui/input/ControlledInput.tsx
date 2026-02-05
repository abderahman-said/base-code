"use client";

import { useFormContext } from "react-hook-form";
import {
    FormField,
    FormItem,
    FormControl,
} from "@/components/ui/Form";
import { InputField, InputFieldProps } from "@/components/ui/input";

interface ControlledInputProps extends Omit<InputFieldProps, "error" | "value" | "onChange"> {
    name: string;
    control?: any; // We can type this better if we want strict typing
}

export function ControlledInput({ name, control, ...props }: ControlledInputProps) {
    const context = useFormContext();
    const formControl = control || context?.control;

    if (!formControl) {
        console.error("ControlledInput must be used within a FormProvider or pass a control prop");
        return null;
    }

    return (
        <FormField
            control={formControl}
            name={name}
            render={({ field, fieldState }) => (
                <FormItem>
                    <FormControl>
                        <InputField
                            {...field}
                            {...props}
                            error={fieldState.error?.message}
                        />
                    </FormControl>
                </FormItem>
            )}
        />
    );
}

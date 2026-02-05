"use client";

import { useFormContext } from "react-hook-form";
import {
    FormField,
    FormItem,
    FormControl,
} from "@/components/ui/Form";
import { SelectField, SelectFieldProps } from "@/components/ui/select/SelectField";

interface ControlledSelectProps extends Omit<SelectFieldProps, "error" | "value" | "onChange" | "defaultValue"> {
    name: string;
    control?: any;
}

export function ControlledSelect({ name, control, ...props }: ControlledSelectProps) {
    const context = useFormContext();
    const formControl = control || context?.control;

    if (!formControl) {
        console.error("ControlledSelect must be used within a FormProvider or pass a control prop");
        return null;
    }

    return (
        <FormField
            control={formControl}
            name={name}
            render={({ field, fieldState }) => (
                <FormItem>
                    <FormControl>
                        <SelectField
                            {...field}
                            {...props}
                            onValueChange={field.onChange}
                            value={field.value}
                            error={fieldState.error?.message}
                        />
                    </FormControl>
                </FormItem>
            )}
        />
    );
}

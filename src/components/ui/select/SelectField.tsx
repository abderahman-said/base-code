"use client"

import * as React from "react"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "./Select"
import { Label } from "../Label"
import { cn } from "@/utils/cn"

export interface SelectOption {
    value: string
    label: string
}

export interface SelectFieldProps extends React.ComponentPropsWithoutRef<typeof Select> {
    label?: string
    error?: string
    placeholder?: string
    options?: SelectOption[]
    children?: React.ReactNode
    containerClassName?: string
    triggerClassName?: string
}

const SelectField = React.forwardRef<React.ElementRef<typeof SelectTrigger>, SelectFieldProps>(
    ({ label, error, placeholder, options, children, containerClassName, triggerClassName, ...props }, ref) => {
        const id = React.useId()
        const errorId = `${id}-error`

        return (
            <div className={cn("space-y-2", containerClassName)}>
                {label && (
                    <Label
                        htmlFor={id}
                        className={cn(error && "text-red-500 dark:text-red-400")}
                    >
                        {label}
                    </Label>
                )}

                <Select {...props}>
                    <SelectTrigger
                        ref={ref}
                        id={id}
                        className={cn(error && "border-red-500 focus:ring-red-500", triggerClassName)}
                        aria-invalid={!!error}
                        aria-describedby={error ? errorId : undefined}
                    >
                        <SelectValue placeholder={placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                        {options ? (
                            options.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))
                        ) : (
                            children
                        )}
                    </SelectContent>
                </Select>

                {error && (
                    <p
                        id={errorId}
                        className="text-sm font-medium text-red-500 dark:text-red-400"
                    >
                        {error}
                    </p>
                )}
            </div>
        )
    }
)
SelectField.displayName = "SelectField"

export { SelectField }

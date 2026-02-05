import * as React from 'react';
import { Input, type InputProps } from './Input';
import { Label } from '../Label';
import { cn } from '@/utils/cn';

export interface InputFieldProps extends InputProps {
    label?: string;
    error?: string;
    hint?: string;
    required?: boolean;
    containerClassName?: string;
}

/**
 * InputField - Shared Input with Label
 * Combines Input + Label + Error/Hint messages
 */
const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
    (
        {
            label,
            error,
            hint,
            required = false,
            containerClassName,
            className,
            id,
            variant,
            ...props
        },
        ref
    ) => {
        const inputId = id || React.useId();
        const errorId = `${inputId}-error`;
        const hintId = `${inputId}-hint`;

        // Auto-set variant based on error
        const inputVariant = error ? 'error' : variant;

        return (
            <div className={cn('space-y-2', containerClassName)}>
                {label && (
                    <Label htmlFor={inputId} className="text-zinc-900 dark:text-zinc-100">
                        {label}
                        {required && <span className="text-red-500 ml-1">*</span>}
                    </Label>
                )}

                <Input
                    id={inputId}
                    ref={ref}
                    variant={inputVariant}
                    className={className}
                    aria-invalid={error ? 'true' : 'false'}
                    aria-describedby={error ? errorId : hint ? hintId : undefined}
                    {...props}
                />

                {error && (
                    <p id={errorId} className="text-sm text-red-500 dark:text-red-400">
                        {error}
                    </p>
                )}

                {hint && !error && (
                    <p id={hintId} className="text-sm text-zinc-500 dark:text-zinc-400">
                        {hint}
                    </p>
                )}
            </div>
        );
    }
);
InputField.displayName = 'InputField';

export { InputField };

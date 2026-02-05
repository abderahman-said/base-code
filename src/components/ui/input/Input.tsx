import * as React from 'react';
import { inputVariants, type InputVariants } from './input.variants';
import { cn } from '@/utils/cn';

export interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    InputVariants { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, variant, inputSize, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(inputVariants({ variant, inputSize, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = 'Input';

export { Input, inputVariants };

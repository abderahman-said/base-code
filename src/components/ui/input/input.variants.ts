import { cva, type VariantProps } from 'class-variance-authority';

export const inputVariants = cva(
    // Base styles
    'flex w-full rounded-md border bg-white text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300',
    {
        variants: {
            variant: {
                default: 'border-zinc-200 dark:border-zinc-800',
                error: 'border-red-500 dark:border-red-500 focus-visible:ring-red-500',
                success: 'border-green-500 dark:border-green-500 focus-visible:ring-green-500',
            },
            inputSize: {
                sm: 'h-8 px-2 py-1 text-xs',
                md: 'h-10 px-3 py-2',
                lg: 'h-12 px-4 py-3 text-base',
            },
        },
        defaultVariants: {
            variant: 'default',
            inputSize: 'md',
        },
    }
);

export type InputVariants = VariantProps<typeof inputVariants>;

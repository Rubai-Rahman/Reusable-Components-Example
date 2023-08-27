import { FC, ButtonHTMLAttributes, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/utils/utils';

const buttonVariants = cva('font-semibold border rounded ', {
  variants: {
    variant: {
      default: 'bg-slate-900 text-white hover:bg-slate-50 dark:text-slate-900',
      outline:
        'bg-transparetn border border-slate-200 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:text-slate-200',
    },
    size: {
      default: 'h-10 py-2 px-4',
      sm: 'h-9 px-2 rounded-md',
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
});
interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
export { Button, buttonVariants };

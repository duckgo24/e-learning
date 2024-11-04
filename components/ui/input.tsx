import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, leftIcon, rightIcon, ...props }, ref) => {
    return (
      <div className="flex items-center h-11 w-full rounded-3xl border border-input transition-colors p-2 focus-within:border-neutral-500 focus-within:border-2 focus-within: shadow">
        {leftIcon && <div>{leftIcon}</div>}
        <input
          type={type}
          className={cn(
            "flex h-9 w-full bg-transparent p-2 py-1 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 outline-none focus:border-gray-400 focus:shadow-lg",
            className
          )}
          ref={ref}
          {...props}
        />
        {rightIcon && <div>{rightIcon}</div>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };

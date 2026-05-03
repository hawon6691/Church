import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@shared/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-extrabold transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-[0_10px_18px_rgb(6_71_165/18%)] hover:bg-primary/95",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/95",
        outline: "border border-border bg-background text-primary hover:bg-accent",
        ghost: "text-primary hover:bg-accent",
        light: "bg-white text-primary hover:bg-white/90"
      },
      size: {
        default: "h-11",
        sm: "h-9 px-3",
        lg: "h-12 px-6",
        icon: "h-11 w-11 px-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { buttonVariants };

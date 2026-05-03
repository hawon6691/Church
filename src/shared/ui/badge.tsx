import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@shared/lib/utils";

const badgeVariants = cva("inline-flex min-h-7 items-center rounded-full px-2.5 text-xs font-bold", {
  variants: {
    variant: {
      default: "bg-accent text-accent-foreground",
      secondary: "bg-secondary/10 text-secondary",
      outline: "border border-border bg-background text-foreground"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}

import type { PropsWithChildren } from "react";
import { cn } from "@shared/lib/utils";

type SectionProps = PropsWithChildren<{
  title?: string;
  lead?: string;
  tone?: "default" | "soft" | "white";
  className?: string;
  contentClassName?: string;
}>;

export function Section({ title, lead, tone = "default", className, contentClassName, children }: SectionProps) {
  return (
    <section className={cn("py-16 md:py-24", tone === "soft" && "bg-muted", tone === "white" && "bg-white", className)}>
      <div className={cn("mx-auto w-full max-w-[1610px] px-6 md:px-10", contentClassName)}>
        {title ? <h2 className="mb-8 text-[34px] font-extrabold leading-tight tracking-normal md:text-[44px]">{title}</h2> : null}
        {lead ? <p className="mb-8 max-w-3xl text-lg leading-8 text-muted-foreground">{lead}</p> : null}
        {children}
      </div>
    </section>
  );
}

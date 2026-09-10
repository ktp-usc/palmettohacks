import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionBadge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        // Negative margin cancels the trailing letter-space so the label centers optically.
        "-mr-[0.24em] text-xs font-medium uppercase tracking-[0.24em] text-ph-yellow sm:text-sm",
        className
      )}
    >
      {children}
    </span>
  );
}

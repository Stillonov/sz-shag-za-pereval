import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  /** INFO: the nav bar spans full width (no 1280px cap) per the design handoff. */
  fullWidth?: boolean;
};

export function Container({ children, className, fullWidth = false }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-10", !fullWidth && "max-w-7xl", className)}>
      {children}
    </div>
  );
}

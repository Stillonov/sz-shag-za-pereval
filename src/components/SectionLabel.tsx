import type { ReactNode } from 'react';

import { cn } from '@/utils/cn';

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
};

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        'text-terracotta font-mono text-base font-bold tracking-widest uppercase',
        className,
      )}
    >
      {children}
    </div>
  );
}

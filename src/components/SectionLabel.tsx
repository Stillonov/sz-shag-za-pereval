import type { ReactNode } from 'react';

import { cn } from '@/utils/cn';

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
};

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn('text-terracotta font-mono-tight text-base font-bold uppercase', className)}>
      {children}
    </div>
  );
}

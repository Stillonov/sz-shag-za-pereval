import type { ReactNode } from 'react';

import { cn } from '@/utils/cn';

type BadgeProps = {
  children: ReactNode;
  variant?: 'terracotta' | 'charcoal';
  className?: string;
};

export function Badge({ children, variant = 'terracotta', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'font-mono-tight text-cream-100 rounded-md px-3 py-1.5 text-xs font-bold uppercase',
        variant === 'terracotta' ? 'bg-terracotta' : 'bg-charcoal',
        className,
      )}
    >
      {children}
    </span>
  );
}

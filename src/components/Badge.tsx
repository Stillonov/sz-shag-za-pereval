import type { ReactNode } from 'react';

import { cn } from '@/utils/cn';

type BadgeProps = {
  children: ReactNode;
  variant?: 'terracotta' | 'charcoal' | 'cream';
  className?: string;
};

const variantClasses = {
  terracotta: 'bg-terracotta text-cream-100',
  charcoal: 'bg-charcoal text-cream-100',
  cream: 'bg-cream-100 text-walnut',
};

export function Badge({ children, variant = 'terracotta', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'font-mono-tight rounded-md px-3 py-1.5 text-xs font-bold uppercase',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}

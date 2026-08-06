import type { ReactNode } from 'react';

import { cn } from '@/utils/cn';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
};

export function Container({ children, className, fullWidth = false }: ContainerProps) {
  return (
    <div
      className={cn('mx-auto w-full px-4 md:px-6 lg:px-10', !fullWidth && 'max-w-7xl', className)}
    >
      {children}
    </div>
  );
}

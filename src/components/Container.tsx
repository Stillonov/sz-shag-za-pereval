import type { ReactNode, Ref } from 'react';

import { cn } from '@/utils/cn';

type ContainerProps = {
  children: ReactNode;
  fullWidth?: boolean;
  className?: string;
  ref?: Ref<HTMLDivElement>;
};

export function Container({ children, fullWidth = false, className, ref }: ContainerProps) {
  return (
    <div
      ref={ref}
      className={cn('mx-auto w-full px-4 md:px-6 lg:px-10', !fullWidth && 'max-w-7xl', className)}
    >
      {children}
    </div>
  );
}

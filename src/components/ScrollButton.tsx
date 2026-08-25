'use client';

import type { ReactNode } from 'react';

import { Button } from '@/components/Button';

type ScrollButtonProps = {
  children: ReactNode;
  targetId: string;
  className?: string;
};

export function ScrollButton({ children, targetId, className }: ScrollButtonProps) {
  return (
    <Button
      href={`#${targetId}`}
      className={className}
      onClick={(event) => {
        event.preventDefault();
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      {children}
    </Button>
  );
}

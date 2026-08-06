'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navLinks } from '@/content/site';
import { cn } from '@/utils/cn';

type NavigationProps = {
  className?: string;
};

export function Navigation({ className }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className={cn('flex items-center gap-8 font-sans text-base', className)}>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? 'page' : undefined}
            className={cn(
              'text-charcoal',
              isActive
                ? 'underline underline-offset-4'
                : 'opacity-75 hover:underline hover:underline-offset-4',
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

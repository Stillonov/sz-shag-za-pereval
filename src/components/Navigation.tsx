'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navLinks } from '@/content/site';
import { cn } from '@/utils/cn';

type NavigationProps = {
  className?: string;
  variant?: 'light' | 'dark';
};

export function Navigation({ className, variant = 'light' }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className={cn('flex items-center gap-8 font-sans text-base', className)}>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        const activeColor = variant === 'light' ? 'text-charcoal' : 'text-cream-100';
        const inactiveColor = variant === 'light' ? 'text-taupe' : 'text-cream-400';

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? 'page' : undefined}
            className={cn(
              isActive
                ? `${activeColor} underline underline-offset-4`
                : `${inactiveColor} hover:underline hover:underline-offset-4`,
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

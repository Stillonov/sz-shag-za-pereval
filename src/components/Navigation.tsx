'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navLinks } from '@/content/site';
import { cn } from '@/utils/cn';

type NavigationProps = {
  variant?: 'light' | 'dark';
  muteInactive?: boolean;
  className?: string;
};

export function Navigation({ variant = 'light', muteInactive = true, className }: NavigationProps) {
  const pathname = usePathname();
  const links = pathname === '/' ? navLinks.filter((link) => link.href !== '/') : navLinks;

  return (
    <nav className={cn('flex items-center gap-8 font-sans text-base', className)}>
      {links.map((link) => {
        const isActive = pathname === link.href;

        const activeColor = variant === 'light' ? 'text-charcoal' : 'text-cream-100';
        const inactiveColor = !muteInactive
          ? activeColor
          : variant === 'light'
            ? 'text-taupe'
            : 'text-cream-400';

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? 'page' : undefined}
            className={cn(
              isActive
                ? `${activeColor} underline decoration-[--underline-thickness] underline-offset-4`
                : `${inactiveColor} hover:underline hover:decoration-[--underline-thickness] hover:underline-offset-4`,
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

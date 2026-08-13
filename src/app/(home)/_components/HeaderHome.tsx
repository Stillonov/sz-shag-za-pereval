import Link from 'next/link';

import { Container } from '@/components/Container';

import { navLinks } from '@/content/site';
import { cn } from '@/utils/cn';

const links = navLinks.filter((link) => link.href !== '/');

type HeaderHomeProps = {
  className?: string;
};

export function HeaderHome({ className }: HeaderHomeProps) {
  return (
    <header className={cn('absolute inset-x-0 top-0 z-10', className)}>
      <Container fullWidth className="flex min-h-17 items-center justify-end gap-8 py-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-cream-100 text-base hover:underline hover:underline-offset-4"
          >
            {link.label}
          </Link>
        ))}
      </Container>
    </header>
  );
}

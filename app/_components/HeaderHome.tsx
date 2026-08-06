import Link from 'next/link';

import { Container } from '@/components/Container';

import { navLinks } from '@/content/site';
import { cn } from '@/utils/cn';

// INFO: the home page has no "Главная" link (you're already on it) and no logo
// (it's already shown large in the hero itself).
const heroLinks = navLinks.filter((link) => link.href !== '/');

type HeaderHomeProps = {
  className?: string;
};

export function HeaderHome({ className }: HeaderHomeProps) {
  return (
    <header className={cn('absolute inset-x-0 top-0 z-10', className)}>
      <Container fullWidth className="flex min-h-17 items-center justify-end gap-8 py-3">
        {heroLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-cream text-base font-semibold hover:underline hover:underline-offset-4"
          >
            {link.label}
          </Link>
        ))}
      </Container>
    </header>
  );
}

'use client';

import { useEffect, useRef, useTransition, type MouseEvent } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { MenuIcon, XIcon } from 'lucide-react';

import { Container } from '@/components/Container';

import { navLinks } from '@/content/site';
import { cn } from '@/utils/cn';

const MENU_ID = 'header-mobile-menu';

type HeaderMobileMenuProps = {
  variant?: 'light' | 'dark';
  className?: string;
};

// INFO: uses the native popover API — the browser handles open/close,
// Escape, and outside-click for free. Nav links navigate via
// startTransition so `isPending` tells us exactly when the new page has
// rendered — the menu closes then, instead of guessing with a fixed delay.
export function HeaderMobileMenu({ variant = 'light', className }: HeaderMobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const wasPending = useRef(false);
  const links = pathname === '/' ? navLinks.filter((link) => link.href !== '/') : navLinks;

  useEffect(() => {
    if (wasPending.current && !isPending) {
      menuRef.current?.hidePopover();
    }
    wasPending.current = isPending;
  }, [isPending]);

  const handleNavClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    startTransition(() => {
      router.push(href);
    });
  };

  return (
    <div className={cn('flex lg:hidden', className)}>
      <button
        type="button"
        popoverTarget={MENU_ID}
        aria-label="Открыть меню"
        className={cn(
          'inline-flex cursor-pointer items-center justify-center',
          variant === 'light' ? 'text-charcoal' : 'text-cream-100',
        )}
      >
        <MenuIcon className="h-6 w-6" />
      </button>

      <div
        ref={menuRef}
        id={MENU_ID}
        popover="auto"
        className="bg-cream-100 inset-0 m-0 hidden h-full max-h-none w-full max-w-none flex-col [&:popover-open]:flex"
      >
        <Container fullWidth className="flex min-h-17 items-center justify-end py-3">
          <button
            type="button"
            popoverTarget={MENU_ID}
            popoverTargetAction="hide"
            aria-label="Закрыть меню"
            className="text-charcoal inline-flex cursor-pointer items-center justify-center"
          >
            <XIcon className="h-6 w-6" />
          </button>
        </Container>

        <nav className="flex flex-1 flex-col items-start justify-center gap-8 px-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleNavClick(link.href)}
              className="text-charcoal font-serif text-4xl hover:underline hover:decoration-[--underline-thickness] hover:underline-offset-8"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

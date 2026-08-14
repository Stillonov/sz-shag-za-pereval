import Link from 'next/link';
import { MenuIcon, XIcon } from 'lucide-react';

import { Container } from '@/components/Container';

import { navLinks } from '@/content/site';

const MENU_ID = 'header-mobile-menu';

// INFO: uses the native popover API (no JS state) — the browser handles
// open/close, Escape, and outside-click for free.
export function HeaderMobileMenu() {
  return (
    <div className="flex lg:hidden">
      <button
        type="button"
        popoverTarget={MENU_ID}
        aria-label="Открыть меню"
        className="text-charcoal inline-flex cursor-pointer items-center justify-center"
      >
        <MenuIcon className="h-6 w-6" />
      </button>

      <div
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
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-charcoal font-serif text-4xl">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

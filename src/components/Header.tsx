import Link from 'next/link';

import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { Navigation } from '@/components/Navigation';

type HeaderProps = {
  className?: string;
};

export function Header({ className }: HeaderProps) {
  return (
    <header className={className}>
      <Container fullWidth className="flex min-h-17 items-center justify-between py-3">
        <Link href="/" aria-label="Шаг за перевал — на главную">
          <Logo />
        </Link>

        <Navigation />
      </Container>
    </header>
  );
}

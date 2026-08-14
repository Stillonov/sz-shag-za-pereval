import { Container } from '@/components/Container';
import { Navigation } from '@/components/Navigation';

import { cn } from '@/utils/cn';

type HeaderHomeProps = {
  className?: string;
};

export function HeaderHome({ className }: HeaderHomeProps) {
  return (
    <header className={cn('absolute inset-x-0 top-0 z-20', className)}>
      <Container fullWidth className="flex min-h-17 items-center justify-end py-3">
        <Navigation variant="dark" muteInactive={false} />
      </Container>
    </header>
  );
}

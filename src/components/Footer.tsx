import { cn } from '@/utils/cn';

type FooterProps = {
  className?: string;
};

export function Footer({ className }: FooterProps) {
  return <footer className={cn('bg-charcoal py-10', className)} />;
}

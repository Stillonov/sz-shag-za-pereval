import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { Navigation } from '@/components/Navigation';

import { siteContact, socialLinks } from '@/content/site';
import { cn } from '@/utils/cn';

type FooterProps = {
  className?: string;
};

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('bg-charcoal pt-20 pb-10', className)}>
      <Container className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo variant="cream" />
          <p className="text-cream/55 mt-2.5 font-sans text-xs">Бюро горных экспедиций</p>
        </div>

        <Navigation variant="cream" />

        <div className="flex flex-col items-center gap-3.5 md:items-end">
          <div className="text-cream/70 text-center font-mono text-sm leading-relaxed md:text-right">
            <a
              href={`mailto:${siteContact.email}`}
              className="block hover:underline hover:underline-offset-4"
            >
              {siteContact.email}
            </a>
            <a
              href={`tel:${siteContact.phone.replace(/\s+/g, '')}`}
              className="block hover:underline hover:underline-offset-4"
            >
              {siteContact.phone}
            </a>
          </div>
          <div className="flex gap-5 font-mono text-xs tracking-wider uppercase">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-cream/70 hover:underline hover:underline-offset-4"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>

      <Container className="border-cream/15 text-cream/40 mt-10 border-t pt-6 font-mono text-xs tracking-wider">
        <span>© {new Date().getFullYear()} Шаг за перевал · Все права защищены</span>
      </Container>
    </footer>
  );
}

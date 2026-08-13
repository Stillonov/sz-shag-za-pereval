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
    <footer className={cn('bg-charcoal text-cream-400 pt-20 pb-10', className)}>
      <Container className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo variant="cream" />
          <p className="mt-2.5 text-xs">Бюро горных экспедиций</p>
        </div>

        <Navigation variant="dark" />

        <div className="flex flex-col items-center gap-3.5 md:items-end">
          <div className="text-center font-mono text-sm leading-relaxed md:text-right">
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
                className="hover:underline hover:underline-offset-4"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>

      <Container className="border-cream-800 text-cream-600 mt-10 border-t pt-6 font-mono text-xs tracking-wider">
        <span>© {new Date().getFullYear()} Шаг за перевал · Все права защищены</span>
      </Container>
    </footer>
  );
}

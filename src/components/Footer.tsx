import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { Navigation } from '@/components/Navigation';

import { siteContact, siteTagline, socialLinks } from '@/content/site';
import { cn } from '@/utils/cn';

type FooterProps = {
  className?: string;
};

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('bg-charcoal text-cream-400 pt-20 pb-10', className)}>
      <Container className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col items-center">
          <Logo variant="cream" />
          <p className="mt-2.5 text-xs">{siteTagline}</p>
        </div>

        <Navigation variant="dark" />

        <div className="flex flex-col items-center gap-3.5 md:items-end">
          <div className="font-mono-tight flex flex-col items-center text-sm leading-relaxed md:items-end">
            {/* TODO: no real phone number yet — re-enable once we have one.
            <a
              href={`tel:${siteContact.phone.replace(/\s+/g, '')}`}
              className="hover:underline hover:decoration-[--underline-thickness] hover:underline-offset-4"
            >
              {siteContact.phone}
            </a>
            */}
            <a
              href={`mailto:${siteContact.email}`}
              className="hover:underline hover:decoration-[--underline-thickness] hover:underline-offset-4"
            >
              {siteContact.email}
            </a>
          </div>
          <div className="font-mono-tight flex gap-5 text-xs uppercase">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:decoration-[--underline-thickness] hover:underline-offset-4"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>

      <Container className="border-cream-800 text-cream-600 font-mono-tight mt-10 border-t pt-6 text-center text-xs md:text-left">
        <span>&copy; {new Date().getFullYear()} Шаг за перевал · Все права защищены</span>
      </Container>
    </footer>
  );
}

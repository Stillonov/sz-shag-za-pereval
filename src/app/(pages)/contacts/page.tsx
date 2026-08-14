import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';

import { siteContact, socialLinks } from '@/content/site';

export default function ContactsPage() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionLabel className="mb-6">На связи</SectionLabel>
        <h1 className="font-serif text-5xl font-medium md:text-8xl">Контакты</h1>
        <div className="mt-9 flex flex-col gap-3 text-2xl font-semibold">
          <a
            href={`mailto:${siteContact.email}`}
            className="hover:underline hover:decoration-[--underline-thickness] hover:underline-offset-4"
          >
            {siteContact.email}
          </a>
          <a
            href={`tel:${siteContact.phone.replace(/\s+/g, '')}`}
            className="hover:underline hover:decoration-[--underline-thickness] hover:underline-offset-4"
          >
            {siteContact.phone}
          </a>
        </div>
        <div className="mt-5 flex gap-5 font-mono text-xs tracking-wider uppercase">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:underline hover:decoration-[--underline-thickness] hover:underline-offset-4"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

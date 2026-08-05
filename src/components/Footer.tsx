import Image from "next/image";
import Link from "next/link";

import { contacts, navLinks, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-ink text-cream px-10 pt-20 pb-10">
      <div className="max-w-page mx-auto grid grid-cols-[1fr_auto_1fr] items-start gap-8">
        <div>
          <Image
            src="/assets/logo-cream.png"
            alt={site.name}
            width={159}
            height={44}
            className="h-11 w-auto"
          />
          <p className="text-cream/55 mt-2.5 text-xs">{site.tagline}</p>
        </div>

        <div className="flex gap-5.5 text-base whitespace-nowrap">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="opacity-70 hover:underline hover:underline-offset-4"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-end gap-3.5 text-right">
          <div className="text-cream/72 font-mono text-sm leading-relaxed">
            <a
              href={`mailto:${contacts.email}`}
              className="block hover:underline hover:underline-offset-4"
            >
              {contacts.email}
            </a>
            <a href={contacts.phoneHref} className="block hover:underline hover:underline-offset-4">
              {contacts.phone}
            </a>
          </div>
          <div className="flex gap-5.5 font-mono text-xs tracking-widest uppercase">
            <a
              href={contacts.telegram}
              className="opacity-70 hover:underline hover:underline-offset-4"
            >
              Telegram
            </a>
            <a href={contacts.vk} className="opacity-70 hover:underline hover:underline-offset-4">
              VK
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-page border-cream/14 text-cream/40 mx-auto mt-10 border-t pt-6 font-mono text-xs tracking-widest">
        {site.copyright}
      </div>
    </footer>
  );
}

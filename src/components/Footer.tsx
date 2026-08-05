import Image from "next/image";
import Link from "next/link";

import { contacts, navLinks, site } from "@/content/site";

const linkHover = "hover:underline hover:underline-offset-4";

export function Footer() {
  return (
    <footer className="bg-ink text-cream px-10 pt-20 pb-10">
      <div className="max-w-page mx-auto grid grid-cols-[1fr_auto_1fr] items-start gap-8">
        <div>
          <Image
            src="/assets/logo-handwritten-cream-trim.png"
            alt={site.name}
            width={159}
            height={44}
            className="h-11 w-auto"
          />
          <p className="text-cream/55 mt-2.5 text-[12.6px]">{site.tagline}</p>
        </div>

        <div className="flex gap-[22px] text-base whitespace-nowrap">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={`opacity-70 ${linkHover}`}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-end gap-3.5 text-right">
          <div className="text-cream/72 font-mono text-[13px]/[1.7]">
            <a href={`mailto:${contacts.email}`} className={`block ${linkHover}`}>
              {contacts.email}
            </a>
            <a href={contacts.phoneHref} className={`block ${linkHover}`}>
              {contacts.phone}
            </a>
          </div>
          <div className="flex gap-[22px] font-mono text-xs tracking-[0.1em] uppercase">
            <a href={contacts.telegram} className={`opacity-70 ${linkHover}`}>
              Telegram
            </a>
            <a href={contacts.vk} className={`opacity-70 ${linkHover}`}>
              VK
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-page border-cream/14 text-cream/40 mx-auto mt-10 border-t pt-6 font-mono text-[11px] tracking-[0.08em]">
        {site.copyright}
      </div>
    </footer>
  );
}

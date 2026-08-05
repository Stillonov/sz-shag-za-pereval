"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/content/site";

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-[30px] text-base">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={
              isActive
                ? "text-ink underline underline-offset-4"
                : "text-ink opacity-75 hover:underline hover:underline-offset-4"
            }
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

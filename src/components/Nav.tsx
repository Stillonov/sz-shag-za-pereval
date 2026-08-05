"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/content/site";

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-10 py-3">
      <Link href="/" aria-label="Шаг за перевал — на главную">
        <Image
          src="/assets/logo-handwritten-accent-B5623F.png"
          alt="Шаг за перевал"
          width={130}
          height={36}
          priority
          className="h-9 w-auto"
        />
      </Link>

      <div className="flex items-center gap-[30px] text-base">
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
      </div>
    </nav>
  );
}

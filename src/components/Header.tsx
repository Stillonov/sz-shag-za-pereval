import Image from "next/image";
import Link from "next/link";

import { Nav } from "@/components/Nav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-10 py-3">
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

      <Nav />
    </header>
  );
}

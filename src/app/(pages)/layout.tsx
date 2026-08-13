import type { ReactNode } from 'react';

import { Header } from '@/components/Header';

export default function PagesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
    </>
  );
}

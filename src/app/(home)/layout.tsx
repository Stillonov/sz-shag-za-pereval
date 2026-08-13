import type { ReactNode } from 'react';

import { HeaderHome } from './_components/HeaderHome';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeaderHome />
      <main className="flex flex-1 flex-col">{children}</main>
    </>
  );
}

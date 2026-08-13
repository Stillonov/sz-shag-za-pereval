import type { ReactNode } from 'react';

import { HeaderHome } from './_components/HeaderHome';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-charcoal relative flex flex-1 items-center justify-center">
      <HeaderHome />
      {children}
    </div>
  );
}

import Image from 'next/image';

import { cn } from '@/utils/cn';

type LogoProps = {
  variant?: 'terracotta' | 'cream';
  className?: string;
};

export function Logo({ variant = 'terracotta', className }: LogoProps) {
  return (
    <Image
      className={cn('h-9 w-auto', className)}
      src={`/assets/logo-${variant}.png`}
      alt="Шаг за перевал"
      width={2096}
      height={582}
      priority
    />
  );
}

import Image from 'next/image';

import { Badge } from '@/components/Badge';
import { Container } from '@/components/Container';
import { ScrollButton } from '@/components/ScrollButton';

import type { HeroContent } from '@/content/tripDetails';

type HeroProps = {
  title: string;
  hero: HeroContent;
};

export function Hero({ title, hero }: HeroProps) {
  return (
    <section className="bg-charcoal relative flex min-h-[calc(100dvh-(--spacing(17)))] flex-col justify-end overflow-hidden">
      <Image
        src={hero.photo}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,transparent_45%,color-mix(in_oklch,var(--color-charcoal)_85%,transparent)_100%)]" />

      <Container fullWidth className="relative z-10 pb-14">
        <div className="flex flex-wrap gap-2.5">
          <Badge>{hero.dates}</Badge>
          <Badge variant="charcoal">{hero.format}</Badge>
        </div>

        <h1 className="text-cream-100 mt-5 w-full font-serif text-[clamp(var(--text-5xl),9vw,var(--text-8xl))] leading-none font-medium text-balance md:w-1/2">
          {title}
        </h1>

        <div className="border-cream-400 mt-10 flex flex-wrap items-center justify-between gap-6 border-t pt-6">
          <div className="font-mono-tight flex flex-wrap gap-5 md:gap-8">
            <div>
              <div className="text-cream-100 text-lg font-bold md:text-2xl">{hero.days}</div>
              <div className="text-cream-400 text-sm uppercase md:text-base">дней</div>
            </div>
            <div>
              <div className="text-cream-100 text-lg font-bold md:text-2xl">{hero.distance}</div>
              <div className="text-cream-400 text-sm uppercase md:text-base">км</div>
            </div>
            <div>
              <div className="text-cream-100 text-lg font-bold md:text-2xl">{hero.price}</div>
              <div className="text-cream-400 text-sm uppercase md:text-base">стоимость</div>
            </div>
          </div>
          <ScrollButton targetId="application" className="shrink-0">
            Присоединиться
          </ScrollButton>
        </div>
      </Container>
    </section>
  );
}

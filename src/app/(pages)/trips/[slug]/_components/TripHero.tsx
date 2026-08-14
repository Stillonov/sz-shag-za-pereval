import Image from 'next/image';

import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

import type { TripDetail } from '@/content/tripDetails';

type TripHeroProps = {
  trip: TripDetail;
};

export function TripHero({ trip }: TripHeroProps) {
  return (
    <section className="bg-charcoal relative flex min-h-[calc(100dvh-(--spacing(17)))] flex-col justify-end overflow-hidden">
      <Image
        src={trip.photo}
        alt={trip.title}
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,transparent_45%,color-mix(in_oklch,var(--color-charcoal)_85%,transparent)_100%)]" />

      <Container fullWidth className="relative z-10 pb-20">
        <div className="flex flex-wrap gap-2.5">
          <Badge>{trip.dates}</Badge>
          <Badge variant="charcoal">{trip.format}</Badge>
        </div>

        <h1 className="text-cream-100 mt-5 w-1/2 font-serif text-5xl font-medium text-balance md:text-8xl">
          {trip.title}
        </h1>

        <div className="border-cream-400 mt-20 flex flex-wrap items-center justify-between gap-6 border-t pt-6">
          <div className="flex flex-wrap gap-8 font-mono">
            <div>
              <div className="text-cream-100 text-2xl font-bold">{trip.days}</div>
              <div className="text-cream-400 text-base tracking-widest uppercase">дней</div>
            </div>
            <div>
              <div className="text-cream-100 text-2xl font-bold">{trip.distance}</div>
              <div className="text-cream-400 text-base tracking-widest uppercase">км</div>
            </div>
            <div>
              <div className="text-cream-100 text-2xl font-bold">{trip.price}</div>
              <div className="text-cream-400 text-base tracking-widest uppercase">стоимость</div>
            </div>
          </div>
          <Button href="/contacts" className="shrink-0">
            Присоединиться
          </Button>
        </div>
      </Container>
    </section>
  );
}

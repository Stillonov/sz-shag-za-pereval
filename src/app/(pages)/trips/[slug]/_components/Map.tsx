import Image from 'next/image';

import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';

import type { TripDetail } from '@/content/tripDetails';

type MapProps = {
  trip: TripDetail;
};

export function Map({ trip }: MapProps) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionLabel className="mb-4">03 — Маршрут</SectionLabel>
        <h2 className="mb-12 font-serif text-4xl font-medium text-balance md:text-6xl">
          Карта маршрута
        </h2>
        <Image
          src={trip.map.photo}
          alt="Карта маршрута"
          width={2752}
          height={1536}
          sizes="(min-width: 1280px) 1240px, 100vw"
          className="h-auto w-full rounded-lg"
        />
      </Container>
    </section>
  );
}

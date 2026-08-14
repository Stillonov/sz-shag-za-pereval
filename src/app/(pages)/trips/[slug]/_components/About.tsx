import Image from 'next/image';

import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';

import type { TripDetail } from '@/content/tripDetails';
import { cn } from '@/utils/cn';

type AboutProps = {
  trip: TripDetail;
};

export function About({ trip }: AboutProps) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionLabel className="mb-4">01 — О маршруте</SectionLabel>
        <p className="max-w-2xl font-serif text-3xl leading-tight font-medium text-balance md:text-5xl">
          {trip.about.lead}
        </p>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-10">
          {trip.about.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-taupe text-base leading-relaxed md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:h-96 md:grid-cols-[1.6fr_1fr_1fr]">
          {trip.about.photos.map((photo, index) => (
            <div
              key={index}
              className={cn(
                'relative aspect-4/3 overflow-hidden rounded-md md:aspect-auto md:h-full',
                index === 0 && 'col-span-2 aspect-16/9 md:col-span-1',
              )}
            >
              <Image
                src={photo}
                alt={trip.title}
                fill
                sizes={
                  index === 0 ? '(min-width: 768px) 40vw, 100vw' : '(min-width: 768px) 25vw, 50vw'
                }
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

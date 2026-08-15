import Link from 'next/link';

import { Container } from '@/components/Container';
import { TripCard } from '@/components/TripCard';

import { trips } from '@/content/trips';

export function UpcomingTrips() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mb-11 flex flex-wrap items-baseline justify-between gap-5">
          <h2 className="w-full font-serif text-4xl font-medium text-balance md:text-6xl lg:w-auto">
            Ближайшие путешествия
          </h2>
          <Link
            href="/trips"
            className="text-terracotta font-mono-tight hidden text-sm font-bold uppercase hover:underline hover:decoration-[--underline-thickness] hover:underline-offset-4 lg:inline-block"
          >
            Все путешествия
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10">
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
        <Link
          href="/trips"
          className="text-terracotta font-mono-tight mt-10 block text-center text-sm font-bold uppercase hover:underline hover:decoration-[--underline-thickness] hover:underline-offset-4 lg:hidden"
        >
          Все путешествия
        </Link>
      </Container>
    </section>
  );
}

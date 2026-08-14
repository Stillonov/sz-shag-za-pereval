import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';
import { TripCard } from '@/components/TripCard';

import { trips } from '@/content/trips';

export default function TripsPage() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionLabel className="mb-6">Календарь</SectionLabel>
        <h1 className="font-serif text-5xl font-medium text-balance md:text-8xl">Путешествия</h1>
        <p className="text-taupe mt-6 max-w-prose text-base leading-relaxed md:text-lg">
          Командные горные экспедиции в самые красивые и малохоженые районы. Небольшие группы,
          опытные гиды, настоящие приключения. Выбирайте маршрут и присоединяйтесь.
        </p>
        <div className="mt-11 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </Container>
    </section>
  );
}

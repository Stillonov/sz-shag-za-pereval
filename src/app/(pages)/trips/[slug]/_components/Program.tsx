import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';

import type { TripDetail } from '@/content/tripDetails';

type ProgramProps = {
  trip: TripDetail;
};

export function Program({ trip }: ProgramProps) {
  return (
    <section className="bg-charcoal text-cream-100 py-16 md:py-24">
      <Container>
        <div className="mb-11 flex flex-wrap items-end justify-between gap-5">
          <div>
            <SectionLabel className="mb-4">02 — Программа</SectionLabel>
            <h2 className="font-serif text-4xl font-medium md:text-6xl">По дням</h2>
          </div>
          <div className="text-cream-600 font-mono text-sm tracking-widest uppercase">
            {trip.hero.days} дней · {trip.hero.distance} км · {trip.hero.dates}
          </div>
        </div>

        <div className="border-cream-800 border-t">
          {trip.program.days.map((day) => (
            <div
              key={day.id}
              className="border-cream-800 grid grid-cols-1 gap-2 border-b py-6 md:grid-cols-[210px_1fr_1.3fr] md:gap-7"
            >
              <div className="font-mono">
                <div className="text-terracotta text-base font-bold tracking-widest uppercase">
                  День {day.n}
                </div>
                <div className="text-cream-600 mt-1.5 flex flex-wrap gap-x-3 text-xs tracking-wider uppercase">
                  {day.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <h3 className="font-serif text-2xl font-semibold">{day.place}</h3>
              <p className="text-cream-400 leading-relaxed">{day.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

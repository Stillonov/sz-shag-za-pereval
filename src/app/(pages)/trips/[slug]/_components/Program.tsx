import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';

import type { HeroContent, ProgramDay } from '../types';

type ProgramProps = {
  hero: HeroContent;
  days: ProgramDay[];
};

export function Program({ hero, days }: ProgramProps) {
  return (
    <section className="bg-charcoal text-cream-100 py-16 md:py-24">
      <Container>
        <div className="mb-11 flex flex-wrap items-end justify-between gap-5">
          <div>
            <SectionLabel className="mb-4">Программа</SectionLabel>
            <h2 className="font-serif text-4xl font-medium text-balance md:text-6xl">По дням</h2>
          </div>
          <div className="font-mono-tight text-cream-600 text-sm uppercase md:text-base">
            {hero.days} дней · {hero.distance} км · {hero.dates}
          </div>
        </div>

        <div className="border-cream-800 border-t">
          {days.map((day) => (
            <div
              key={day.id}
              className="border-cream-800 grid grid-cols-1 gap-2 border-b py-6 md:grid-cols-[210px_1fr_1.3fr] md:gap-7"
            >
              <div>
                <div className="text-terracotta font-mono-tight text-base font-bold uppercase">
                  День {day.n}
                </div>
                <div className="font-mono-tight text-cream-600 mt-1.5 flex flex-col gap-1 text-xs uppercase">
                  {day.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-balance">{day.place}</h3>
              <p className="text-cream-400 leading-relaxed">{day.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

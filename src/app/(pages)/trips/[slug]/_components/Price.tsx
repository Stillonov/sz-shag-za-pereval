import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';

import type { TripDetail } from '@/content/tripDetails';

type PriceProps = {
  trip: TripDetail;
};

export function Price({ trip }: PriceProps) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 xl:grid-cols-[0.85fr_1.3fr]">
          <div>
            <SectionLabel className="mb-4">Стоимость</SectionLabel>
            <div className="text-5xl leading-none font-bold md:text-7xl">{trip.hero.price}</div>
            <p className="text-taupe mt-7 max-w-[44ch] leading-relaxed">{trip.price.note}</p>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:mt-11">
            <div>
              <div className="text-terracotta font-mono-tight mb-4.5 text-base font-bold uppercase">
                Включено
              </div>
              <ul className="text-walnut flex flex-col gap-3 leading-normal">
                {trip.price.included.map((item, index) => (
                  <li key={index}>— {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-ash font-mono-tight mb-4.5 text-base font-bold uppercase">
                Не включено
              </div>
              <ul className="text-walnut flex flex-col gap-3 leading-normal">
                {trip.price.excluded.map((item, index) => (
                  <li key={index}>— {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

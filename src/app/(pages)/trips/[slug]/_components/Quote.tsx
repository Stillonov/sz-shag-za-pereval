import { Container } from '@/components/Container';

import type { TripDetail } from '@/content/tripDetails';

type QuoteProps = {
  trip: TripDetail;
};

export function Quote({ trip }: QuoteProps) {
  return (
    <section className="bg-cream-100 py-16 md:py-24">
      <Container className="max-w-4xl text-center">
        <div className="text-terracotta font-serif text-[clamp(var(--text-5xl),8vw,var(--text-7xl))] leading-none">
          «
        </div>
        <p className="mt-3 font-serif text-[clamp(var(--text-2xl),4vw,var(--text-5xl))] leading-tight font-medium text-balance">
          {trip.quote.text}
        </p>
        <div className="text-ash font-mono-tight mt-9 text-sm uppercase md:text-base">
          — {trip.quote.author}
        </div>
      </Container>
    </section>
  );
}

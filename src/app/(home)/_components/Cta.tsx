import Link from 'next/link';

import { Container } from '@/components/Container';

export function Cta() {
  return (
    <section className="bg-charcoal py-24">
      <Container className="max-w-4xl text-center">
        <h2 className="text-cream-100 font-serif text-4xl leading-none font-medium md:text-6xl">
          Готовы к приключениям?
        </h2>
        <p className="text-cream-400 mx-auto mt-6 max-w-lg text-base leading-relaxed md:text-lg">
          Выберите маршрут в календаре или напишите нам — подскажем, какое путешествие подойдёт
          именно вам.
        </p>
        <Link
          href="/trips"
          className="bg-terracotta text-cream-100 mt-10 inline-block rounded-md px-9 py-4 font-mono text-base font-bold tracking-widest uppercase hover:brightness-110"
        >
          Выбрать путешествие
        </Link>
      </Container>
    </section>
  );
}

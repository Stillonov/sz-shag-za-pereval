import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

export function Cta() {
  return (
    <section className="bg-charcoal py-16 md:py-24">
      <Container className="max-w-4xl text-center">
        <h2 className="text-cream-100 font-serif text-4xl leading-none font-medium text-balance md:text-6xl">
          Готовы к приключениям?
        </h2>
        <p className="text-cream-400 mx-auto mt-6 max-w-lg text-base leading-relaxed md:text-lg">
          Выберите маршрут в календаре или напишите нам — подскажем, какое путешествие подойдёт
          именно вам.
        </p>
        <Button href="/trips" className="mt-10">
          Выбрать путешествие
        </Button>
      </Container>
    </section>
  );
}

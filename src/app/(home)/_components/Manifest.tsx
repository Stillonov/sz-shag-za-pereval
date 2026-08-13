import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';

export function Manifest() {
  return (
    <section className="py-24">
      <Container>
        <SectionLabel className="mb-6">О нас</SectionLabel>
        <h2 className="max-w-2xl font-serif text-3xl leading-tight font-medium text-balance md:text-5xl">
          Мы не про услуги — мы про команду, приключение и характер.
        </h2>
        <div className="mt-14 flex max-w-3xl flex-col gap-5">
          <p className="text-taupe text-base leading-relaxed md:text-lg">
            С 2016 года мы водим небольшие группы в горы — от Кавказа до Алтая и Памира. За это
            время через наши маршруты прошли сотни путешественников, и мы каждый раз собираем поход
            заново: под маршрут, сезон и людей, а не по шаблону.
          </p>
          <p className="text-taupe text-base leading-relaxed md:text-lg">
            Группы у нас небольшие, гиды — опытные, а подход честный: если поход не состоится по
            нашей вине, мы вернём деньги полностью. Для нас горы — это не услуга, а общее дело с
            теми, кто идёт рядом.
          </p>
        </div>
      </Container>
    </section>
  );
}

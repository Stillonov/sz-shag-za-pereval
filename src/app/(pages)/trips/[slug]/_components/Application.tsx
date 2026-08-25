'use client';

import Image from 'next/image';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';

export function Application() {
  return (
    <section id="application" className="py-16 md:py-24">
      <Container className="max-w-5xl">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
          <div className="relative hidden overflow-hidden rounded-lg md:block md:h-full">
            <Image
              src="/assets/section07-application.jpg"
              alt="Шаг за перевал"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionLabel className="mb-4">07 — Заявка</SectionLabel>
            <h2 className="font-serif text-4xl leading-none font-medium text-balance md:text-6xl">
              Готовы к приключениям?
            </h2>
            <p className="text-taupe mt-5 max-w-[44ch] leading-relaxed">
              Чтобы записаться или уточнить подробности, заполните форму — мы свяжемся с вами в
              течение суток.
            </p>
            <form onSubmit={(event) => event.preventDefault()} className="mt-10 flex flex-col gap-3.5">
              <input
                type="text"
                placeholder="Имя"
                aria-label="Имя"
                className="border-charcoal/22 rounded-md border bg-transparent px-4.5 py-4 text-base"
              />
              <input
                type="tel"
                placeholder="Телефон"
                aria-label="Телефон"
                className="border-charcoal/22 rounded-md border bg-transparent px-4.5 py-4 text-base"
              />
              <input
                type="email"
                placeholder="E-mail"
                aria-label="E-mail"
                className="border-charcoal/22 rounded-md border bg-transparent px-4.5 py-4 text-base"
              />
              <textarea
                placeholder="Комментарий или вопрос"
                aria-label="Комментарий или вопрос"
                rows={3}
                className="border-charcoal/22 resize-y rounded-md border bg-transparent px-4.5 py-4 text-base"
              />
              <Button type="submit">Присоединиться</Button>
            </form>
            <p className="text-ash mt-5 text-xs leading-normal">
              Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и c политикой
              конфиденциальности.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

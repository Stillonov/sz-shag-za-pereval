import { PlusIcon } from 'lucide-react';

import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';

import type { FaqItem } from '../types';

type FaqProps = {
  faq: FaqItem[];
};

export function Faq({ faq }: FaqProps) {
  return (
    <section className="bg-charcoal text-cream-100 py-16 md:py-24">
      <Container className="max-w-5xl">
        <SectionLabel className="mb-4">Оргмоменты</SectionLabel>
        <h2 className="mb-12 font-serif text-4xl font-medium text-balance md:text-6xl">
          Как всё устроено
        </h2>
        <p className="text-cream-400 mb-12 max-w-prose leading-relaxed">
          «Шаг за перевал» — не про оказание услуг, а про командные путешествия, где есть место
          приключениям. В команде есть руководитель и участники, и все — сознательные взрослые люди,
          включённые в процесс.
        </p>
        <div className="border-cream-800 border-t">
          {faq.map((item) => (
            <details key={item.id} className="group border-cream-800 border-b">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 select-none [&::-webkit-details-marker]:hidden">
                <span className="text-2xl font-semibold text-balance">{item.question}</span>
                <PlusIcon className="text-terracotta h-6 w-6 shrink-0 transition-transform duration-200 ease-out group-open:rotate-45" />
              </summary>
              <p className="text-cream-400 max-w-prose pb-6.5 leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

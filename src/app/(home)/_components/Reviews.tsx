'use client';

import { useEffect, useReducer } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

import { Container } from '@/components/Container';

import { reviews } from '@/content/reviews';

import { ReviewCard } from './ReviewCard';

export function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' });
  const [, forceUpdate] = useReducer((count: number) => count + 1, 0);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', forceUpdate).on('reInit', forceUpdate);
    return () => {
      emblaApi.off('select', forceUpdate).off('reInit', forceUpdate);
    };
  }, [emblaApi]);

  const canScrollPrev = emblaApi?.canScrollPrev() ?? false;
  const canScrollNext = emblaApi?.canScrollNext() ?? false;

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mb-11 flex items-baseline justify-between gap-5">
          <h2 className="font-serif text-4xl font-medium text-balance md:text-6xl">Отзывы</h2>
          <div className="flex gap-2.5">
            <button
              type="button"
              aria-label="Назад"
              disabled={!canScrollPrev}
              onClick={() => emblaApi?.scrollPrev()}
              className="border-cream-400 hover:bg-charcoal hover:border-charcoal hover:text-cream-100 inline-flex h-13 w-13 cursor-pointer items-center justify-center rounded-full border transition-colors duration-200 ease-out disabled:pointer-events-none disabled:opacity-40"
            >
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Вперёд"
              disabled={!canScrollNext}
              onClick={() => emblaApi?.scrollNext()}
              className="border-cream-400 hover:bg-charcoal hover:border-charcoal hover:text-cream-100 inline-flex h-13 w-13 cursor-pointer items-center justify-center rounded-full border transition-colors duration-200 ease-out disabled:pointer-events-none disabled:opacity-40"
            >
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
      <Container fullWidth>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="-ml-4 flex will-change-transform select-none md:-ml-6 lg:-ml-10">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="min-w-0 max-w-md flex-[0_0_100%] pl-4 md:flex-[0_0_50%] md:pl-6 lg:flex-[0_0_33.333%] lg:pl-10"
              >
                <ReviewCard review={review} className="h-full" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

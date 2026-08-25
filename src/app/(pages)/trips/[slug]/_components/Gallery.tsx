'use client';

import { useEffect, useReducer } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

import { Container } from '@/components/Container';

import type { TripDetail } from '@/content/tripDetails';

type GalleryProps = {
  trip: TripDetail;
};

export function Gallery({ trip }: GalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'center' });
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
      <Container className="mb-8 flex justify-end gap-2.5">
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
      </Container>
      <Container ref={emblaRef} className="overflow-hidden" fullWidth>
        <div className="-ml-4 flex will-change-transform select-none md:-ml-6 lg:-ml-10">
          {trip.gallery.map((photo) => (
            <div
              key={photo.id}
              className="min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%] md:pl-6 lg:pl-10"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg md:aspect-16/10">
                <Image
                  src={photo.photo}
                  alt={photo.caption}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

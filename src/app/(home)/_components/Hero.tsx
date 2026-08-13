'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import useEmblaCarousel from 'embla-carousel-react';

import { Logo } from '@/components/Logo';

import { trips } from '@/content/trips';
import { cn } from '@/utils/cn';

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 200 }, [
    Fade(),
    Autoplay({ delay: 6000 }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const activeTrip = trips[selectedIndex];

  return (
    <section className="relative min-h-dvh overflow-hidden">
      <h1 className="sr-only">Шаг за перевал</h1>

      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {trips.map((trip, index) => (
            <div key={trip.title} className="relative h-full min-w-0 flex-[0_0_100%]">
              <Image
                src={trip.photo}
                alt={trip.title}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,color-mix(in_oklch,var(--color-charcoal)_30%,transparent)_0%,transparent_25%,transparent_75%,color-mix(in_oklch,var(--color-charcoal)_30%,transparent)_100%)]" />

      <div className="absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 px-4 text-center">
        <Logo variant="cream" className="mx-auto h-auto w-full max-w-xl md:max-w-4xl" />
        <p className="text-cream-100 mt-4 text-xl">Бюро горных экспедиций</p>
      </div>

      <div className="absolute inset-x-0 bottom-24 z-10 flex flex-col items-center gap-4 px-4 text-center">
        <h2 className="text-cream-100 font-serif text-3xl font-semibold md:text-5xl">
          {activeTrip.title}
        </h2>
        <span className="text-cream-300 font-mono text-sm font-bold tracking-widest uppercase">
          {activeTrip.dates}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-14 z-10 flex justify-center gap-3">
        {trips.map((trip, index) => (
          <button
            key={trip.title}
            type="button"
            aria-label={`Показать «${trip.title}»`}
            onClick={() => emblaApi?.scrollTo(index)}
            className={cn(
              'h-2 rounded-full transition-all duration-400',
              index === selectedIndex ? 'bg-cream-100 w-8' : 'bg-cream-400 w-2',
            )}
          />
        ))}
      </div>
    </section>
  );
}

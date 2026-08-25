'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Logo } from '@/components/Logo';

import { siteTagline } from '@/content/site';
import { upcomingTrips } from '@/content/upcomingTrips';
import { cn } from '@/utils/cn';

const AUTOPLAY_DELAY = 6000;
const hasMultipleTrips = upcomingTrips.length > 1;

export function Hero() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!hasMultipleTrips) return;

    const id = setInterval(() => {
      setSelectedIndex((current) => (current + 1) % upcomingTrips.length);
    }, AUTOPLAY_DELAY);
    return () => clearInterval(id);
  }, []);

  const activeTrip = upcomingTrips[selectedIndex];

  return (
    <section className="bg-charcoal relative min-h-dvh overflow-hidden">
      <h1 className="sr-only text-balance">Шаг за перевал</h1>

      <div className="absolute inset-0">
        <div className="relative h-full">
          {upcomingTrips.map((trip, index) => (
            <div
              key={trip.id}
              className={cn(
                'absolute inset-0 transition-opacity duration-1000',
                index === selectedIndex ? 'opacity-100' : 'opacity-0',
              )}
            >
              <Image
                src={trip.photo}
                alt={trip.title}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
              <Link
                href={`/trips/${trip.slug}`}
                aria-label={trip.title}
                tabIndex={index === selectedIndex ? undefined : -1}
                aria-hidden={index !== selectedIndex}
                className={cn(
                  'absolute inset-0 z-10',
                  index !== selectedIndex && 'pointer-events-none',
                )}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,color-mix(in_oklch,var(--color-charcoal)_30%,transparent)_0%,transparent_25%,transparent_75%,color-mix(in_oklch,var(--color-charcoal)_30%,transparent)_100%)]" />

      <div className="pointer-events-none absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 px-6 text-center md:px-12">
        <Logo variant="cream" className="mx-auto h-auto w-full max-w-xl md:max-w-4xl" />
        <p className="text-cream-100 mt-4 text-xl">{siteTagline}</p>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-24 z-10 flex flex-col items-center gap-4 px-4 text-center">
        <h2 className="text-cream-100 font-serif text-3xl font-semibold text-balance md:text-5xl">
          {activeTrip.title}
        </h2>
        <span className="text-cream-300 font-mono-tight text-sm font-bold uppercase">
          {activeTrip.dates}
        </span>
      </div>

      {hasMultipleTrips ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-14 z-10 flex justify-center gap-3">
          {upcomingTrips.map((trip, index) => (
            <span
              key={trip.id}
              className={cn(
                'h-2 rounded-full transition-all duration-500',
                index === selectedIndex ? 'bg-cream-100 w-8' : 'bg-cream-400 w-2',
              )}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}

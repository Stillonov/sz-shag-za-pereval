import Image from 'next/image';
import Link from 'next/link';

import type { Trip } from '@/content/trips';
import { cn } from '@/utils/cn';

type TripCardProps = {
  trip: Trip;
  className?: string;
};

export function TripCard({ trip, className }: TripCardProps) {
  return (
    <Link
      href={`/trips/${trip.slug}`}
      className={cn('relative block aspect-3/4 overflow-hidden rounded-lg', className)}
    >
      <Image
        src={trip.photo}
        alt={trip.title}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
      <div className="from-charcoal/90 via-charcoal/10 absolute inset-0 bg-linear-to-t to-transparent" />
      <span className="bg-terracotta text-cream-100 absolute top-4 left-4 rounded-md px-3 py-1.5 font-mono text-xs font-bold tracking-wider uppercase">
        {trip.region}
      </span>
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="text-cream-100 font-serif text-3xl font-semibold md:text-4xl">
          {trip.title}
        </h3>
        <div className="text-cream-300 mt-3 flex flex-col gap-1 font-mono text-sm font-bold tracking-widest uppercase">
          <span>{trip.dates}</span>
          <span>{trip.price}</span>
        </div>
      </div>
    </Link>
  );
}

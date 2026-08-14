import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/Badge';

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
      className={cn('group relative block aspect-3/4 overflow-hidden rounded-lg', className)}
    >
      <Image
        src={trip.photo}
        alt={trip.title}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover saturate-50 transition-all duration-700 ease-out group-hover:scale-110 group-hover:saturate-100"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_oklch,var(--color-charcoal)_90%,transparent)_0%,color-mix(in_oklch,var(--color-charcoal)_10%,transparent)_45%,transparent_75%)]" />
      <Badge className="absolute top-4 left-4">{trip.region}</Badge>
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="text-cream-100 font-serif text-3xl font-semibold md:text-4xl">
          {trip.title}
        </h3>
        <div className="text-cream-300 font-mono-tight mt-3 flex flex-col gap-1 text-sm font-bold uppercase">
          <span>{trip.dates}</span>
          <span>{trip.price}</span>
        </div>
      </div>
    </Link>
  );
}

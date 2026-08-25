import type { Trip } from '@/components/TripCard.types';

export type TripStatus = 'upcoming' | 'past';

export type TripListing = Trip & { status: TripStatus };

import type { Trip, TripStatus } from '@/components/TripCard.types';

export type TripListing = Trip & { status: TripStatus };

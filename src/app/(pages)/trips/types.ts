import type { Trip } from '@/components/TripCard.types';

import type { TripStatus } from '@/types/trips';

export type TripListing = Trip & { status: TripStatus };

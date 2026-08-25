import type { TripStatus } from '@/types/trips';

export type Trip = {
  id: number;
  slug: string;
  title: string;
  region: string;
  status?: TripStatus;
  dates: string;
  price?: string;
  photo: string;
};

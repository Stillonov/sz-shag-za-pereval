export type TripStatus = 'upcoming' | 'past';

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

import type { TripListing } from '@/app/(pages)/trips/types';

export const trips: TripListing[] = [
  {
    id: 0,
    slug: 'severny-kavkaz',
    title: 'Северный Кавказ',
    region: 'Кавказ',
    status: 'past',
    dates: '15 – 19 августа 2026',
    price: '100 000 ₽',
    photo: '/assets/hero-1.jpg',
  },
  {
    id: 1,
    slug: 'plato-bermamyt',
    title: 'Плато Бермамыт',
    region: 'Кавказ',
    status: 'upcoming',
    dates: '2 – 6 сентября 2026',
    price: '85 000 ₽',
    photo: '/assets/hero-2.jpg',
  },
];

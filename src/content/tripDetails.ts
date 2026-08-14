export type TripDetail = {
  slug: string;
  title: string;
  format: string;
  days: number;
  distance: number;
  dates: string;
  price: string;
  photo: string;
};

export const tripDetails: TripDetail[] = [
  {
    slug: 'severny-kavkaz',
    title: 'Северный Кавказ',
    format: 'Роуд-трип',
    days: 5,
    distance: 750,
    dates: '15 – 19 августа 2026',
    price: 'от 100 000 ₽',
    photo: '/assets/hero-1.jpg',
  },
  {
    slug: 'plato-bermamyt',
    title: 'Плато Бермамыт',
    format: 'Джип-тур',
    days: 3,
    distance: 180,
    dates: '2 – 6 сентября 2026',
    price: 'от 85 000 ₽',
    photo: '/assets/hero-2.jpg',
  },
  {
    slug: 'ledniki-dombaya',
    title: 'Ледники Домбая',
    format: 'Треккинг',
    days: 4,
    distance: 95,
    dates: '20 – 24 сентября 2026',
    price: 'от 95 000 ₽',
    photo: '/assets/hero-3.jpg',
  },
];

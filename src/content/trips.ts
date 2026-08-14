export type Trip = {
  slug: string;
  title: string;
  region: string;
  dates: string;
  price: string;
  photo: string;
};

// TODO: placeholder trips, replace with the real lineup.
export const trips: Trip[] = [
  {
    slug: 'severny-kavkaz',
    title: 'Северный Кавказ',
    region: 'Кавказ',
    dates: '15 – 19 августа 2026',
    price: 'от 100 000 ₽',
    photo: '/assets/hero-1.jpg',
  },
  {
    slug: 'plato-bermamyt',
    title: 'Плато Бермамыт',
    region: 'Кавказ',
    dates: '2 – 6 сентября 2026',
    price: 'от 85 000 ₽',
    photo: '/assets/hero-2.jpg',
  },
  {
    slug: 'ledniki-dombaya',
    title: 'Ледники Домбая',
    region: 'Кавказ',
    dates: '20 – 24 сентября 2026',
    price: 'от 95 000 ₽',
    photo: '/assets/hero-3.jpg',
  },
];

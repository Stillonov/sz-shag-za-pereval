export type Trip = {
  id: number;
  slug: string;
  title: string;
  region: string;
  dates: string;
  price: string;
  photo: string;
};

export const trips: Trip[] = [
  {
    id: 0,
    slug: 'severny-kavkaz',
    title: 'Северный Кавказ',
    region: 'Кавказ',
    dates: '15 – 19 августа 2026',
    price: '100 000 ₽',
    photo: '/assets/hero-1.jpg',
  },
  {
    id: 1,
    slug: 'plato-bermamyt',
    title: 'Плато Бермамыт',
    region: 'Кавказ',
    dates: '2 – 6 сентября 2026',
    price: '85 000 ₽',
    photo: '/assets/hero-2.jpg',
  },
  {
    id: 2,
    slug: 'ledniki-dombaya',
    title: 'Ледники Домбая',
    region: 'Кавказ',
    dates: '20 – 24 сентября 2026',
    price: '95 000 ₽',
    photo: '/assets/hero-3.jpg',
  },
];

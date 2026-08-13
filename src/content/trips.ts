export type Trip = {
  slug: string;
  title: string;
  dates: string;
  photo: string;
};

// TODO: placeholder trips, replace with the real lineup.
export const trips: Trip[] = [
  {
    slug: 'severny-kavkaz',
    title: 'Северный Кавказ',
    dates: '15 – 19 августа 2026',
    photo: '/assets/hero-1.jpg',
  },
  {
    slug: 'plato-bermamyt',
    title: 'Плато Бермамыт',
    dates: '2 – 6 сентября 2026',
    photo: '/assets/hero-2.jpg',
  },
  {
    slug: 'ledniki-dombaya',
    title: 'Ледники Домбая',
    dates: '20 – 24 сентября 2026',
    photo: '/assets/hero-3.jpg',
  },
];

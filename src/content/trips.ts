export type Trip = {
  title: string;
  dates: string;
  photo: string;
};

// TODO: placeholder trips, replace with the real lineup.
export const trips: Trip[] = [
  {
    title: 'Северный Кавказ',
    dates: '15 – 19 августа 2026',
    photo: '/assets/hero-1.jpg',
  },
  {
    title: 'Плато Бермамыт',
    dates: '2 – 6 сентября 2026',
    photo: '/assets/hero-2.jpg',
  },
  {
    title: 'Ледники Домбая',
    dates: '20 – 24 сентября 2026',
    photo: '/assets/hero-3.jpg',
  },
];

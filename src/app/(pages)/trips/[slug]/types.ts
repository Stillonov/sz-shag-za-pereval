export type HeroContent = {
  format: string;
  days: number;
  distance: number;
  dates: string;
  price: string;
  photo: string;
};

export type AboutContent = {
  lead: string;
  paragraphs: string[];
  photos: string[];
};

export type QuoteContent = {
  text: string;
  author: string;
};

export type ProgramDay = {
  id: number;
  n: number;
  tags: string[];
  place: string;
  text: string;
};

export type GalleryPhoto = {
  id: number;
  caption: string;
  photo: string;
};

export type MapContent = {
  photo: string;
};

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
  photo: string;
};

export type PriceContent = {
  note: string;
  included: string[];
  excluded: string[];
};

export type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

export type TripDetail = {
  id: number;
  slug: string;
  title: string;
  hero: HeroContent;
  about: AboutContent;
  quote?: QuoteContent;
  program?: ProgramDay[];
  gallery?: GalleryPhoto[];
  map?: MapContent;
  team?: TeamMember[];
  price?: PriceContent;
  faq?: FaqItem[];
};

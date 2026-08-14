import { notFound } from 'next/navigation';

import { tripDetails } from '@/content/tripDetails';

import { About } from './_components/About';
import { Hero } from './_components/Hero';
import { Program } from './_components/Program';
import { Quote } from './_components/Quote';

export default async function TripPage(props: PageProps<'/trips/[slug]'>) {
  const { slug } = await props.params;
  const trip = tripDetails.find((trip) => trip.slug === slug);

  if (!trip) notFound();

  return (
    <>
      <Hero trip={trip} />
      <About trip={trip} />
      <Quote trip={trip} />
      <Program trip={trip} />
    </>
  );
}

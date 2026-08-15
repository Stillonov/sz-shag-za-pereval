import { notFound } from 'next/navigation';

import { tripDetails } from '@/content/tripDetails';

import { About } from './_components/About';
import { Gallery } from './_components/Gallery';
import { Hero } from './_components/Hero';
import { Map } from './_components/Map';
import { Program } from './_components/Program';
import { Quote } from './_components/Quote';
import { Team } from './_components/Team';

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
      <Gallery trip={trip} />
      <Map trip={trip} />
      <Team trip={trip} />
    </>
  );
}

import { notFound } from 'next/navigation';

import { tripDetails } from '@/content/tripDetails';

import { TripHero } from './_components/TripHero';

export default async function TripPage(props: PageProps<'/trips/[slug]'>) {
  const { slug } = await props.params;
  const trip = tripDetails.find((trip) => trip.slug === slug);

  if (!trip) notFound();

  return <TripHero trip={trip} />;
}

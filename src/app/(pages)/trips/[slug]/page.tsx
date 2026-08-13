import { notFound } from 'next/navigation';

import { trips } from '@/content/trips';

export default async function TripPage(props: PageProps<'/trips/[slug]'>) {
  const { slug } = await props.params;
  const trip = trips.find((trip) => trip.slug === slug);

  if (!trip) notFound();

  return <p className="font-sans text-lg">{trip.title}</p>;
}

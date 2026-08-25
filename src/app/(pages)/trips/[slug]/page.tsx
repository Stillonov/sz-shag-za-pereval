import { notFound } from 'next/navigation';

import { tripDetails } from '@/content/tripDetails';

import { About } from './_components/About';
import { Application } from './_components/Application';
import { Faq } from './_components/Faq';
import { Gallery } from './_components/Gallery';
import { Hero } from './_components/Hero';
import { Map } from './_components/Map';
import { Price } from './_components/Price';
import { Program } from './_components/Program';
import { Quote } from './_components/Quote';
import { Team } from './_components/Team';

export default async function TripPage(props: PageProps<'/trips/[slug]'>) {
  const { slug } = await props.params;
  const trip = tripDetails.find((trip) => trip.slug === slug);

  if (!trip) notFound();

  return (
    <>
      <Hero title={trip.title} hero={trip.hero} />
      <About title={trip.title} about={trip.about} />
      {trip.quote ? <Quote quote={trip.quote} /> : null}
      <Program hero={trip.hero} days={trip.program.days} />
      {trip.gallery && trip.gallery.length > 0 ? <Gallery gallery={trip.gallery} /> : null}
      {trip.map ? <Map map={trip.map} /> : null}
      {trip.team && trip.team.length > 0 ? <Team team={trip.team} /> : null}
      <Price heroPrice={trip.hero.price} price={trip.price} />
      <Faq faq={trip.faq} />
      <Application />
    </>
  );
}

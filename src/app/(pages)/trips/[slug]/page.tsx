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

  const isUpcoming = trip.status !== 'past';

  return (
    <>
      <Hero title={trip.title} hero={trip.hero} isUpcoming={isUpcoming} />
      <About title={trip.title} about={trip.about} />
      {trip.quote ? <Quote quote={trip.quote} /> : null}
      {trip.program && trip.program.length > 0 ? (
        <Program hero={trip.hero} days={trip.program} />
      ) : null}
      {trip.gallery && trip.gallery.length > 0 ? <Gallery gallery={trip.gallery} /> : null}
      {trip.map ? <Map map={trip.map} /> : null}
      {trip.team && trip.team.length > 0 ? <Team team={trip.team} /> : null}
      {isUpcoming && trip.price && trip.hero.price ? (
        <Price heroPrice={trip.hero.price} price={trip.price} />
      ) : null}
      {trip.faq && trip.faq.length > 0 ? <Faq faq={trip.faq} /> : null}
      {isUpcoming && trip.application ? (
        <Application tripTitle={trip.title} photo={trip.application.photo} />
      ) : null}
    </>
  );
}

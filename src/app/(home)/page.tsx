import { Cta } from './_components/Cta';
import { Hero } from './_components/Hero';
import { Manifest } from './_components/Manifest';
import { UpcomingTrips } from './_components/UpcomingTrips';

export default function Home() {
  return (
    <>
      <Hero />
      <Manifest />
      <UpcomingTrips />
      <Cta />
    </>
  );
}

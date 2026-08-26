import { Fragment } from 'react';

import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';

import { siteManifest } from '@/content/site';
import { typografize } from '@/utils/typograf';

export function Manifest() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionLabel className="mb-6">О нас</SectionLabel>
        <h2 className="max-w-2xl font-serif text-3xl leading-tight font-medium text-balance md:text-5xl">
          {siteManifest.headingLines.map((line, index) => (
            <Fragment key={index}>
              {index > 0 && <br />}
              {typografize(line)}
            </Fragment>
          ))}
        </h2>
        <div className="mt-14 flex max-w-3xl flex-col gap-5">
          {siteManifest.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-taupe text-base leading-relaxed md:text-lg">
              {typografize(paragraph)}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}

import Image from 'next/image';

import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';

import type { TeamMember } from '@/content/tripDetails';

type TeamProps = {
  team: TeamMember[];
};

export function Team({ team }: TeamProps) {
  return (
    <section className="bg-sand py-16 md:py-24">
      <Container>
        <SectionLabel className="mb-4">Команда</SectionLabel>
        <h2 className="mb-12 font-serif text-4xl font-medium text-balance md:text-6xl">
          Ваши проводники
        </h2>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          {team.map((member) => (
            <div key={member.id} className="flex gap-5">
              <Image
                src={member.photo}
                alt={member.name}
                width={96}
                height={96}
                className="h-24 w-24 shrink-0 rounded-full object-cover"
              />
              <div>
                <h3 className="font-serif text-2xl font-semibold">{member.name}</h3>
                <div className="text-terracotta font-mono-tight mt-1 text-xs uppercase">
                  {member.role}
                </div>
                <p className="text-taupe mt-2 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

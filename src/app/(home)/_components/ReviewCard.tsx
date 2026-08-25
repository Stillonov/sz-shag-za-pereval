import Image from 'next/image';

import { cn } from '@/utils/cn';

import type { Review } from '../types';

type ReviewCardProps = {
  review: Review;
  className?: string;
};

export function ReviewCard({ review, className }: ReviewCardProps) {
  return (
    <div className={cn('bg-sand flex flex-col gap-6 rounded-lg p-9', className)}>
      <div className="flex items-center gap-3.5">
        <Image
          src={review.photo}
          alt={review.name}
          width={52}
          height={52}
          className="h-13 w-13 rounded-full object-cover"
        />
        <div>
          <div className="text-base font-bold">{review.name}</div>
          <div className="text-ash font-mono-tight mt-1 text-xs uppercase">{review.trip}</div>
        </div>
      </div>
      <p className="font-serif text-xl leading-normal font-medium text-balance">«{review.text}»</p>
    </div>
  );
}

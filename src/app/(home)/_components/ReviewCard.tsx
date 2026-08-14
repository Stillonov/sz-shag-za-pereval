import Image from 'next/image';

import type { Review } from '@/content/reviews';
import { cn } from '@/utils/cn';

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
          <div className="text-ash mt-1 font-mono text-xs tracking-wider uppercase">
            {review.trip}
          </div>
        </div>
      </div>
      <p className="font-serif text-xl leading-normal font-medium text-balance">
        «{review.text}»
      </p>
    </div>
  );
}

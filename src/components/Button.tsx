import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import Link from 'next/link';

import { cn } from '@/utils/cn';

// INFO: discriminated on `href` itself (required in one branch, `undefined`
// in the other) rather than an explicit tag — fine for a two-way
// link-vs-button split. If a third rendering kind is ever needed, switch to
// an explicit string-literal discriminant prop named `variant` instead of
// stacking more implicit property-presence checks.
type ButtonProps = {
  children: ReactNode;
  className?: string;
} & (
  | ({ href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, 'href' | 'className'>)
  | ({ href?: undefined } & Omit<ComponentPropsWithoutRef<'button'>, 'className'>)
);

export function Button({ children, className, ...props }: ButtonProps) {
  const classes = cn(
    'bg-terracotta text-cream-100 cursor-pointer font-mono-tight inline-block rounded-md px-9 py-4 text-base font-bold uppercase transition duration-200 ease-out hover:brightness-110',
    className,
  );

  if (props.href !== undefined) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}

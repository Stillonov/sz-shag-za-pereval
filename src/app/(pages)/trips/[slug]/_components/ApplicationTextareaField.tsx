import { cn } from '@/utils/cn';

import { APPLICATION_MESSAGE_MAX_LENGTH } from '../schema';

type ApplicationTextareaFieldProps = {
  name: string;
  placeholder: string;
  error?: string[];
};

export function ApplicationTextareaField({
  name,
  placeholder,
  error,
}: ApplicationTextareaFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <textarea
        name={name}
        placeholder={placeholder}
        aria-label={placeholder}
        aria-invalid={error ? true : undefined}
        rows={3}
        maxLength={APPLICATION_MESSAGE_MAX_LENGTH}
        className={cn(
          'border-cream-400 resize-y rounded-md border bg-transparent px-4.5 py-4 text-base',
          error && 'border-terracotta',
        )}
      />
      {error ? (
        <p role="alert" className="text-terracotta text-sm">
          {error[0]}
        </p>
      ) : null}
    </div>
  );
}

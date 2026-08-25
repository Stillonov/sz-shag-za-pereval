import { cn } from '@/utils/cn';

type ApplicationFieldProps = {
  name: string;
  type: string;
  placeholder: string;
  error?: string[];
};

export function ApplicationField({ name, type, placeholder, error }: ApplicationFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        aria-label={placeholder}
        aria-invalid={error ? true : undefined}
        className={cn(
          'border-cream-400 rounded-md border bg-transparent px-4.5 py-4 text-base',
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

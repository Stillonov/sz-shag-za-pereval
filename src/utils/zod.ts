import { z } from 'zod';

export function fieldErrors<T extends Record<string, unknown>>(
  error: z.ZodError<T>,
): Partial<Record<keyof T, string[]>> & { root?: string[] } {
  const tree = z.treeifyError(error);
  const result: Partial<Record<keyof T, string[]>> = {};

  for (const [key, value] of Object.entries(tree.properties ?? {})) {
    if (value) result[key as keyof T] = value.errors;
  }

  return tree.errors.length > 0 ? { ...result, root: tree.errors } : result;
}

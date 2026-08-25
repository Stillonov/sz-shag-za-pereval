import { fieldErrors } from '@/utils/zod';

import { applicationSchema, type ApplicationErrors, type ApplicationInput } from './schema';

export type ApplicationValidation =
  { success: true; data: ApplicationInput } | { success: false; errors: ApplicationErrors };

export function validateApplication(formData: FormData): ApplicationValidation {
  const parsed = applicationSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return { success: false, errors: fieldErrors(parsed.error) };
  }

  return { success: true, data: parsed.data };
}

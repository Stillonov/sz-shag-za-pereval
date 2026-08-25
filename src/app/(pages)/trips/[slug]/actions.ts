'use server';

import type { ApplicationErrors } from './schema';
import { validateApplication } from './utils';

export type SubmitApplicationState =
  { status: 'idle' } | { status: 'success' } | { status: 'error'; errors: ApplicationErrors };

export async function submitApplication(
  _prevState: SubmitApplicationState,
  formData: FormData,
): Promise<SubmitApplicationState> {
  const validation = validateApplication(formData);

  if (!validation.success) {
    return { status: 'error', errors: validation.errors };
  }

  // TODO: send the application (email/Telegram/CRM) instead of logging it.
  console.log('New application:', validation.data);

  return { status: 'success' };
}

import { z } from 'zod';

export const APPLICATION_MESSAGE_MAX_LENGTH = 1000;

// INFO: honeypot field name — real users never see or fill it, so any value means a bot.
export const HONEYPOT_FIELD = 'company';

export const applicationSchema = z.object({
  name: z.string().trim().min(2, 'Введите имя'),
  phone: z.string().trim().min(10, 'Введите телефон'),
  email: z.string().trim().pipe(z.email('Некорректный e-mail')),
  message: z
    .string()
    .trim()
    .max(APPLICATION_MESSAGE_MAX_LENGTH, 'Слишком длинное сообщение')
    .optional(),
});

export type ApplicationInput = z.infer<typeof applicationSchema>;
export type ApplicationErrors = Partial<Record<keyof ApplicationInput, string[]>> & {
  root?: string[];
};

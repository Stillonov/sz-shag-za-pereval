'use client';

import { useActionState, useState, type SubmitEvent } from 'react';
import Image from 'next/image';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';

import { submitApplication, type SubmitApplicationState } from '../actions';
import type { ApplicationErrors } from '../schema';
import { validateApplication } from '../utils';
import { ApplicationField } from './ApplicationField';
import { ApplicationTextareaField } from './ApplicationTextareaField';

const initialState: SubmitApplicationState = { status: 'idle' };

export function Application() {
  const [errors, setErrors] = useState<ApplicationErrors>({});
  const [state, formAction, isPending] = useActionState(submitApplication, initialState);

  // INFO: adjusts state during render (not an effect) when the action result changes —
  // see https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes.
  const [prevState, setPrevState] = useState(state);
  if (state !== prevState) {
    setPrevState(state);
    if (state.status === 'error') setErrors(state.errors);
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    const validation = validateApplication(new FormData(event.currentTarget));

    if (!validation.success) {
      event.preventDefault();
      setErrors(validation.errors);
      return;
    }

    setErrors({});
  }

  return (
    <section id="application" className="py-16 md:py-24">
      <Container className="max-w-5xl">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
          <div className="relative hidden overflow-hidden rounded-lg md:block md:h-full">
            <Image
              src="/assets/section07-application.jpg"
              alt="Шаг за перевал"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionLabel className="mb-4">Заявка</SectionLabel>
            <h2 className="font-serif text-4xl leading-none font-medium text-balance md:text-6xl">
              Готовы к приключениям?
            </h2>
            <p className="text-taupe mt-5 max-w-[44ch] leading-relaxed">
              Чтобы записаться или уточнить подробности, заполните форму — мы свяжемся с вами в
              течение суток.
            </p>
            {state.status === 'success' ? (
              <p className="border-cream-400 mt-10 rounded-md border px-4.5 py-4 text-base">
                Заявка отправлена, мы свяжемся с вами в течение суток.
              </p>
            ) : (
              <form
                action={formAction}
                onSubmit={handleSubmit}
                noValidate
                className="mt-10 flex flex-col gap-3.5"
              >
                {errors.root ? (
                  <p role="alert" className="text-terracotta text-sm">
                    {errors.root[0]}
                  </p>
                ) : null}
                <ApplicationField name="name" type="text" placeholder="Имя" error={errors.name} />
                <ApplicationField
                  name="phone"
                  type="tel"
                  placeholder="Телефон"
                  error={errors.phone}
                />
                <ApplicationField
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  error={errors.email}
                />
                <ApplicationTextareaField
                  name="message"
                  placeholder="Комментарий или вопрос"
                  error={errors.message}
                />
                <Button type="submit" disabled={isPending} className="disabled:opacity-40">
                  {isPending ? 'Отправка…' : 'Присоединиться'}
                </Button>
              </form>
            )}
            <p className="text-ash mt-5 text-xs leading-normal">
              Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и c политикой
              конфиденциальности.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

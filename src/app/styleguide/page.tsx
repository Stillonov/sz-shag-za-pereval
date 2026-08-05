import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Дизайн-система — Шаг за перевал",
};

const colors = [
  { name: "bg", value: "#f2ede3", className: "bg-bg" },
  { name: "ink", value: "#26221e", className: "bg-ink" },
  { name: "panel", value: "#e9e3d7", className: "bg-panel" },
  { name: "body", value: "#4c463d", className: "bg-body" },
  { name: "body-strong", value: "#3a352d", className: "bg-body-strong" },
  { name: "muted", value: "#8a8375", className: "bg-muted" },
  { name: "accent", value: "#b5623f", className: "bg-accent" },
];

export default function Styleguide() {
  return (
    <main className="container-page py-20">
      <p className="eyebrow mb-6">Дизайн-система</p>
      <h1 className="text-h1">Токены</h1>

      {/* Colors */}
      <section className="mt-24">
        <h2 className="text-h2">Цвета</h2>
        <div className="mt-10 grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-6">
          {colors.map((color) => (
            <div key={color.name}>
              <div
                className={`${color.className} rounded-base border-ink/22 h-28 border`}
                aria-hidden
              />
              <p className="mono-label text-ink mt-3">{color.name}</p>
              <p className="text-fine text-muted font-mono">{color.value}</p>
            </div>
          ))}
        </div>

        <div className="rounded-base bg-ink mt-10 p-10">
          <p className="eyebrow">Текст на тёмном</p>
          <div className="mt-6 flex flex-col gap-2">
            {[100, 72, 62, 55, 50, 40].map((opacity) => (
              <p
                key={opacity}
                className="text-fine text-cream font-mono"
                style={{ opacity: opacity / 100 }}
              >
                cream / {opacity}% — Кавказ, 15–19.08.2026
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Fonts */}
      <section className="mt-24">
        <h2 className="text-h2">Шрифты</h2>
        <div className="mt-10 flex flex-col gap-10">
          <div>
            <p className="mono-label text-muted">Onest — sans / UI и текст</p>
            <p className="mt-3 font-sans text-2xl">
              Съешь ещё этих мягких булок — Quick brown fox 0123456789
            </p>
            <p className="mt-2 font-sans text-2xl font-semibold">Полужирный 600 · Жирный 800</p>
          </div>
          <div>
            <p className="mono-label text-muted">Source Serif 4 — serif / заголовки и лиды</p>
            <p className="mt-3 font-serif text-2xl">
              Съешь ещё этих мягких булок — Quick brown fox 0123456789
            </p>
          </div>
          <div>
            <p className="mono-label text-muted">JetBrains Mono — mono / метки и даты</p>
            <p className="mt-3 font-mono text-2xl uppercase">Северный кавказ · 100 000 ₽</p>
          </div>
        </div>
      </section>

      {/* Type scale */}
      <section className="mt-24">
        <h2 className="text-h2">Типографическая шкала</h2>
        <div className="border-ink/22 mt-10 flex flex-col gap-10 border-t pt-10">
          <div>
            <p className="mono-label text-muted">text-h1</p>
            <h1 className="text-h1 mt-3">Путешествия</h1>
          </div>
          <div>
            <p className="mono-label text-muted">text-h1-hero</p>
            <h1 className="text-h1-hero mt-3">
              Северный
              <br />
              Кавказ
            </h1>
          </div>
          <div>
            <p className="mono-label text-muted">text-h2</p>
            <h2 className="text-h2 mt-3">Ближайшие путешествия</h2>
          </div>
          <div>
            <p className="mono-label text-muted">text-h3</p>
            <h3 className="text-h3 mt-3">Сулакский каньон</h3>
          </div>
          <div>
            <p className="mono-label text-muted">text-lead</p>
            <p className="text-lead text-ink mt-3 max-w-[24ch] font-serif text-balance">
              Мы не про услуги — мы про команду, приключение и характер.
            </p>
          </div>
          <div>
            <p className="mono-label text-muted">text-quote</p>
            <p className="max-w-quote text-quote text-ink mt-3 font-serif">
              <span className="text-accent text-[80px] leading-none">«</span> Горы не делают тебя
              сильнее — они показывают, каким ты был всё это время.
            </p>
          </div>
          <div>
            <p className="mono-label text-muted">text-price</p>
            <p className="text-price text-ink mt-3 font-serif font-extrabold whitespace-nowrap">
              100 000 ₽
            </p>
          </div>
          <div>
            <p className="mono-label text-muted">text-body</p>
            <p className="text-body mt-3 max-w-[70ch]">
              Пять дней в горах Кабардино-Балкарии и Карачаево-Черкесии: Черекское ущелье, Джилы-Су,
              Бермамыт. Едем небольшой группой на внедорожниках, ночуем в гостевых домах, готовим
              вместе.
            </p>
          </div>
          <div>
            <p className="mono-label text-muted">text-fine</p>
            <p className="text-fine text-muted mt-3">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
            </p>
          </div>
        </div>
      </section>

      {/* Elements */}
      <section className="mt-24">
        <h2 className="text-h2">Элементы</h2>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <button className="mono-button rounded-base bg-accent text-cream px-9 py-[18px] transition-[filter] duration-200 hover:brightness-112">
            Присоединиться
          </button>
          <span className="mono-label rounded-base bg-accent text-cream px-3 py-1.5">
            Северный Кавказ
          </span>
          <span className="mono-label rounded-base bg-ink text-cream px-3 py-1.5">Роуд-трип</span>
          <span className="mono-label rounded-pill border-ink/25 text-ink border px-6 py-3">
            Подробнее
          </span>
          <button
            className="border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-cream flex size-13 items-center justify-center rounded-full border transition-colors"
            aria-label="Следующий слайд"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="mt-10 grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-8">
          <div className="rounded-card bg-panel p-9">
            <p className="mono-label text-muted">panel · rounded-card</p>
            <p className="text-ink mt-6 font-serif text-xl/relaxed">
              «Лучшая поездка за последние годы — вернулись другими людьми.»
            </p>
          </div>
          <div className="rounded-card photo-placeholder relative h-64 overflow-hidden">
            <div className="overlay-card absolute inset-0" />
            <div className="absolute right-0 bottom-0 left-0 p-8">
              <p className="mono-label text-cream">overlay-card + photo-placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Radii and containers */}
      <section className="mt-24 mb-24">
        <h2 className="text-h2">Радиусы и контейнеры</h2>
        <div className="text-fine text-body-strong mt-10 flex flex-col gap-3 font-mono">
          <p>rounded-base — 6px · rounded-card — 8px · rounded-pill — 40px</p>
          <p>max-w-page — 1280px · max-w-narrow — 1000px · max-w-quote — 920px</p>
        </div>
      </section>
    </main>
  );
}

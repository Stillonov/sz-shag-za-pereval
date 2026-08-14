---
name: Шаг за перевал
colors:
  cream-100: "#f2ede3"
  cream-200: "#e0dbd1"
  cream-300: "#d1c9be"
  cream-400: "#b5b0a8"
  cream-500: "#96928a"
  cream-600: "#78736d"
  cream-800: "#45403c"
  charcoal: "#26221e"
  sand: "#e9e3d7"
  taupe: "#4c463d"
  walnut: "#3a352d"
  ash: "#8a8375"
  terracotta: "#b5623f"
typography:
  body:
    fontFamily: Onest
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  hero-title:
    fontFamily: Source Serif 4
    fontSize: 30px
    fontWeight: "600"
    lineHeight: 1
  mobile-nav-link:
    fontFamily: Source Serif 4
    fontSize: 36px
    fontWeight: "400"
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: "700"
    letterSpacing: 0.1em
rounded:
  full: 9999px
---

## Overview

The site for the mountain expedition bureau "Шаг за перевал" ("A Step Over the Pass") — a warm, muted palette (cream/charcoal/terracotta), a handwritten logo, lots of breathing room, and no chasing trendy effects (shadows, blur, gradients are almost never used). The design leans on Tailwind's default scale (spacing, rounded, font-size) wherever possible — custom tokens exist only where Tailwind's default scale genuinely wasn't enough (see `src/app/globals.css`).

## Colors

The palette is built on a "warm cream / dark charcoal" pair plus a terracotta accent.

- **cream-100 … cream-800** — not isolated shades but a single scale (the `cream` hue, lighter toward 100, darker toward 800). `cream-100` is the base background for light pages and the text color on dark backgrounds; `cream-400/500/600/800` are muted text/borders on a dark (`charcoal`) background instead of `opacity` (see Do's and Don'ts).
- **charcoal** — the primary dark background (Hero, Footer) and the primary text color on light backgrounds.
- **terracotta** — the single bright accent; used sparingly (logo on a light background).
- **sand / taupe / walnut / ash** — supporting tones in the same range; `taupe`/`ash` are currently used as muted navigation text on light/dark backgrounds respectively (`ash` is also used as the muted mono label in `ReviewCard`), `sand` is the background of the review card in `ReviewCard`.

## Typography

Three fonts, three distinct roles — never mixed within a single text block:

- **Onest** (`font-sans`) — the default font for all UI (navigation, body text). Set on `<body>`, so it doesn't need to be specified explicitly in most components. Body text is responsive: `text-base` on mobile, `md:text-lg` on desktop.
- **Source Serif 4** (`font-serif`) — headings/large accent text only (the trip title in Hero, mobile menu items).
- **JetBrains Mono** (`font-mono`) — labels only: dates, copyright, social links — always paired with `uppercase` and increased `tracking` (`wider`/`widest`).

## Layout

The container (`src/components/Container.tsx`) — `max-w-7xl` with adaptive horizontal padding (`px-4 md:px-6 lg:px-10`); there's a `fullWidth` mode with no width cap (used in the header/hero). Vertical and horizontal spacing comes only from Tailwind's default scale — there's no custom spacing scale in the project.

Home page sections (except `Hero`, which has its own full-screen layout) share a single vertical rhythm, `py-24` (`Manifest`, `UpcomingTrips`, `Reviews`, `Cta`).

## Elevation & Depth

Flat design — shadows, blur, and depth are never used anywhere. Sections are separated by background color (`charcoal` vs `cream-100`) and a thin border (`border-t` on `cream-800`), not by shadow.

## Shapes

Sharp corners by default — `rounded` is barely used. Two deliberate exceptions:
- `rounded-full` — the slider dot indicators in Hero, the circular prev/next buttons of the review carousel in `Reviews`.
- `rounded-md`/`rounded-lg` — interactive controls and photo/content cards: the button in Cta, the region badge and the card itself in `TripCard`, the review card in `ReviewCard` (`rounded-lg` for photos/cards, `rounded-md` for small elements over a photo — the same radius as the button).

## Components

- **Header / HeaderHome** — fixed height (`min-h-17`), logo + navigation; the logo isn't duplicated on the home page (there's already a large one in Hero), the header itself is transparent over the photo. Both use `HeaderMobileMenu` below `lg`, with `variant="dark"` on `HeaderHome` (`Header`'s default `variant="light"` matches its solid light background) — only the trigger button's icon color changes; the popover panel itself is always `cream-100`/`charcoal` since it covers the full screen and the page behind it is no longer visible.
- **HeaderMobileMenu** (`src/components/HeaderMobileMenu.tsx`) — a full-screen `popover="auto"` panel; open/close/Escape/outside-click on the trigger button are native (no JS state), no open/close animation (native popover fade transitions turned out unreliable across browsers, so the panel just snaps open/closed). Nav links do need JS: they navigate via `router.push` wrapped in `startTransition`, and a `useEffect` watching `isPending` calls `hidePopover()` the moment it flips back to `false` — i.e. the menu closes exactly when the new route has actually rendered, not after a guessed delay. This only works within a layout that keeps rendering `HeaderMobileMenu` across the navigation (e.g. between two `(pages)` routes); navigating to a different layout unmounts it immediately regardless.
- **Navigation** — the active link is underlined and in full color (`charcoal`/`cream-100`), the inactive one is a muted solid color (`taupe`/`cream-400`), **not** via `opacity`.
- **Footer** — a dark (`charcoal`) section; the same muted-text logic via `cream-400/500/600/800`, never via `opacity`.
- **Hero** — a full-screen section with a cross-fade of trip photos (an `opacity` transition on a timer), a centered logo, a darkening gradient only in the bottom half of the frame for text legibility below.
- **Manifest** — the "About us" section on the home page: a mono label (`О нас`), a large serif tagline with `text-balance` — this is the **lead/tagline** tier (`text-3xl leading-tight font-medium md:text-5xl`), separate from the "big h2" below.
- **SectionLabel** — a section's mono label (terracotta, `uppercase`, wide tracking); the bottom margin is set from outside via `className` since it varies (16/20/24px) in the design.
- **"Big h2"** — the section-heading tier, larger than the lead tagline: `font-serif text-4xl font-medium md:text-6xl` (no `tracking-*` — default tracking; `tracking-tight` at this size caused the serif glyphs to collide). Used in `Cta` ("Готовы к приключениям?") and `UpcomingTrips` ("Ближайшие путешествия") — anywhere a section heading stands on its own rather than pairing with a tagline paragraph the way `Manifest` does.
- **Page `<h1>`** — one tier above "big h2", reserved for a page's own `<h1>` (the design goes up to 90px, bigger than any in-page section heading): `font-serif text-5xl font-medium md:text-8xl`, same no-`tracking-*` rule. Used in `TripsPage`, `ContactsPage`.
- **TripCard** (`src/components/TripCard.tsx`) — a reusable trip photo card (used in `UpcomingTrips` on the home page and in the `/trips` grid): `aspect-[3/4]`, `rounded-lg`, a darkening gradient at the bottom for legibility — the same `color-mix(in oklch, var(--color-charcoal) N%, transparent)` technique as the gradient in `Hero`, but one-sided (bottom to top, no darkening at the top), a region badge on terracotta, a heading `text-3xl md:text-4xl font-serif font-semibold` (30→36px, closer to the design's 34→46px than the "trip title" tier from Hero) — smaller than both the section's "big h2" and the active trip title in Hero, dates/price use the same `font-mono text-sm font-bold tracking-widest uppercase` pairing as the dates in Hero. Hover: the photo is muted by default (`saturate-50`), "comes alive" with color on hover (`saturate-100`) and zooms in slightly (`scale-110`) — plain CSS (`group`/`group-hover`, `transition-all duration-700`), no JS.
- **UpcomingTrips** — the "Ближайшие путешествия" section on the home page: the heading is the "big h2" (see above), the "Все путешествия" link reuses the `SectionLabel` pairing (mono/bold/tracking-widest/uppercase) but smaller (`text-sm`) and terracotta; the card grid is `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`.
- **ReviewCard** (`src/app/(home)/_components/ReviewCard.tsx`, page-only — used only in `Reviews`) — a review card: `bg-sand`, `rounded-lg`, `p-9`; avatar `h-13 w-13 rounded-full`, name `text-base font-bold`, trip — a mono meta label (`text-ash font-mono text-xs tracking-wider uppercase`), quote — `font-serif text-xl font-medium leading-normal text-balance`, wrapped in «» directly in the markup (not in the content).
- **Reviews** — the "Отзывы" section on the home page: two `Container`s in a row — a regular one (`max-w-7xl`) under the heading and prev/next buttons, followed by a `fullWidth` one just for the carousel track (only the track bleeds to the screen edge, not the section header). The heading is the "big h2" (see above) on the same line as the circular prev/next buttons (`items-baseline`, as in `UpcomingTrips` — the buttons don't drop below the heading's baseline). The carousel uses `embla-carousel-react` with no plugins (`align: 'start'`, no loop — the prev/next buttons dim (`disabled:opacity-40`) at the edges; swipe/drag out of the box, the track is `select-none` so dragging doesn't select card text, plus `will-change-transform`; no autoplay or fade — removed as unused dependencies). The gap between slides follows embla's official pattern (a negative `margin-left` on the track plus `padding-left` on each slide, `-ml-4/pl-4` → `md:-ml-6/pl-6` → `lg:-ml-10/pl-10`, the same steps as `Container`'s padding), **not** `gap` on the flex container — `gap` combined with a percentage `flex-basis` rounds unpredictably and breaks embla's `align: 'start'` alignment (a slide would sometimes sit flush, sometimes get clipped on the left). Slide width is `flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]` with a `max-w-md` ceiling (keeps a card from growing too large on very wide screens in the fluid track).
- **Cta** — a dark (`charcoal`) "Готовы к приключениям?" section with a terracotta button linking to `/trips`; text on the dark background uses named tiers (`cream-400`), not `opacity`.
- **TripsPage** (`src/app/(pages)/trips/page.tsx`) — the `/trips` listing: `SectionLabel` ("Календарь") + the page's own `<h1>` on the "Page `<h1>`" tier (see above) + an intro paragraph (`text-taupe`, `max-w-prose` — Tailwind's default ~65ch measure, close enough to the design's 60ch to skip a custom value), then the same `TripCard` grid as `UpcomingTrips` (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`).
- **ContactsPage** (`src/app/(pages)/contacts/page.tsx`) — `SectionLabel` ("На связи") + the page's own `<h1>` (see above) + email/phone as `text-2xl font-semibold` links, then the same social-links recipe as `Footer` (`font-mono text-xs tracking-wider uppercase`, `hover:underline hover:underline-offset-4`). Content comes straight from `siteContact`/`socialLinks` in `src/content/site.ts`.

## Do's and Don'ts

- **Don't** use `text-{color}/NN` (an opacity modifier) for muted text on a known solid background — set up/use a named scale tier instead (`cream-400`, etc.). This project's experience: semi-transparent text is equivalent to an eyeballed hardcoded color and doesn't scale to new components.
- **Don't** add a custom token (color/spacing/radius) when a value from Tailwind's default scale already fits — see `AGENTS.md`.
- **Don't** write a utility class that equals the CSS default value (`tracking-normal`, `font-normal` when it's already inherited) — if a tier turns out to be the default, just drop the class instead of writing it out explicitly (example: the "big h2" has no `tracking-*`, see Components).
- **Do** keep the three fonts strictly to their roles (sans — UI, serif — headings, mono — labels/dates), never mixed within one semantic block.
- **Do** use `cn()` (`src/utils/cn.ts`) whenever merging classes where the base classes might be overridden from outside via `className`.
- **Do** give every button's hover transition the same timing — `duration-200 ease-out` (`Cta`'s link-button, the prev/next buttons in `Reviews`) — so hover feedback feels consistent across controls.

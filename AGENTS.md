<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Conventions

## Git

Never run `git commit` or `git push` unless explicitly asked to, in that specific instance. Finishing a change does not imply permission to commit it — always ask first.

## Language

All code comments, documents, and READMEs are written in English, regardless of the language of the resource's own content (e.g. UI copy).

## Comment tags

- `TODO:` — something to do or fix later.
- `INFO:` — context on why something is done a certain way.

## Component placement

- **Shared components** — used in more than one place, or clearly destined to be (e.g. a `Button`) — go in `src/components`.
- **Page-only components** — used only on a single page — go next to that page, in a `_components` folder inside the page's own folder.

## Utilities

Shared helper functions (e.g. `cn`) go in `src/utils`, imported via the `@/utils/...` path alias.

## Icons

Import `lucide-react` icons using their `*Icon` alias (e.g. `MenuIcon`, not `Menu`) — the package exports both names for every icon specifically to avoid collisions with same-named DOM/library exports (`X`, `Menu`, etc.).

## Design system fidelity

Prefer Tailwind's own scale (spacing, colors, `container`/`max-w`, font sizes, etc.) over custom tokens or arbitrary bracket values. We're not going for pixel-perfect fidelity to the design handoff — snap to the nearest value Tailwind already provides instead of reproducing an exact px/rem number. Only add a custom token when nothing in Tailwind's default scale is close enough.

Don't add a utility class whose only effect is the CSS default (e.g. `tracking-normal`, `font-normal` where that's already inherited). If a step turns out to be the default, drop the class entirely instead of writing it out explicitly — it's dead weight that looks like a deliberate choice but isn't.

## Design system reference

[`DESIGN.md`](DESIGN.md) (repo root, [format spec](https://github.com/google-labs-code/design.md)) documents the actual design system — colors, typography, layout, shapes, component patterns, do's/don'ts. It's a living document, but only update it once a change is settled and about to be committed — not on every intermediate iteration while still tweaking a design back and forth. If it's unclear whether the current state is final, ask (e.g. "меняем дизайн и коммитим?") before touching `DESIGN.md`. Once a change adding/renaming/removing a design token (a color in `globals.css`, a font, a spacing/rounded override) or a new reusable visual pattern is settled, update `DESIGN.md` in the same commit. Keep it reflecting what the code actually does, not aspirational — don't document a token or pattern that isn't in use yet.

## Shared component props

Every shared component (`src/components`) must accept a `className` prop and merge it with its own classes via `cn()`, so callers can override/extend styling from outside.

A shared component owns its *internal* styling (padding, its own colors/typography) but never its *external* spacing (margin, absolute-position offsets like `top-4 left-4`) or anything else that varies by where it's placed — that's the caller's responsibility, passed in via `className`. Don't bake a margin or position into the component just because every current usage happens to need the same one.

## Prop order

In both the `type ComponentNameProps` definition and the destructured function signature: content/required props first (`children`, domain data like `trip`), then optional variant/behavior props (`variant`, `fullWidth`, `muteInactive`), `className` always last.

## Prop types

Type a component's props with `type ComponentNameProps = {...}`, not `interface`. `interface` allows declaration merging, which is more a risk than a feature for props; `type` also composes better with unions/intersections if a component grows variants.

## Naming variants

- A component that is a variant of another component for a specific context is named with that component's name as a prefix — e.g. `Header` + `HeaderHome` (the home page's version of the header).

## Naming subcomponents

- A component that's a building block used exclusively by one other component is also named with that component's name as a prefix — e.g. `Header` + `HeaderElement`.
- Only apply the prefix once a piece is confirmed to belong exclusively to that component; don't prefix (or rename) something that's still plausibly reusable elsewhere (e.g. `Navigation` isn't `HeaderNavigation` yet — it may end up shared with the footer).

## Content array ids

Every enumerable item in `src/content/*.ts` (trips, reviews, etc.) gets an `id: number`, assigned sequentially from `0` in source order. Use `id` as the React `key` when mapping over the array — not `title`/`slug`/`name`, which aren't guaranteed unique once real content replaces the placeholders. Placeholder content in `src/content/` doesn't need a `TODO:` comment explaining it's a placeholder — that's already the default assumption for everything there.

## Heading text wrapping

Every heading element (`h1`–`h6`) gets `text-balance`, so it never leaves a lone short word stranded alone on its own line when it wraps. Apply it directly on the heading, not on a wrapping element — anything else on that element renders as a heading and should balance the same way, including places styled by hand rather than via a shared component. Non-heading text that wraps (e.g. an attribution line under a quote) can use it too when it's short and centered/prominent enough for orphan words to be noticeable — no need to restrict it strictly to `h1`–`h6`.

## No units in field names

Don't bake a unit into a field name (`distanceKm`, `priceRub`, etc.) — name it plainly (`distance`, `price`) even when the value is a bare number. Keep the unit implicit/contextual instead.

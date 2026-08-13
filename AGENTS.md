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

## Design system fidelity

Prefer Tailwind's own scale (spacing, colors, `container`/`max-w`, font sizes, etc.) over custom tokens or arbitrary bracket values. We're not going for pixel-perfect fidelity to the design handoff — snap to the nearest value Tailwind already provides instead of reproducing an exact px/rem number. Only add a custom token when nothing in Tailwind's default scale is close enough.

## Shared component props

Every shared component (`src/components`) must accept a `className` prop and merge it with its own classes via `cn()`, so callers can override/extend styling from outside.

## Prop types

Type a component's props with `type ComponentNameProps = {...}`, not `interface`. `interface` allows declaration merging, which is more a risk than a feature for props; `type` also composes better with unions/intersections if a component grows variants.

## Naming variants

- A component that is a variant of another component for a specific context is named with that component's name as a prefix — e.g. `Header` + `HeaderHome` (the home page's version of the header).

## Naming subcomponents

- A component that's a building block used exclusively by one other component is also named with that component's name as a prefix — e.g. `Header` + `HeaderElement`.
- Only apply the prefix once a piece is confirmed to belong exclusively to that component; don't prefix (or rename) something that's still plausibly reusable elsewhere (e.g. `Navigation` isn't `HeaderNavigation` yet — it may end up shared with the footer).

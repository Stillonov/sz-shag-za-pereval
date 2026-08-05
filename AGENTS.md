<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Conventions

## Language

All code comments, documents, and READMEs are written in English, regardless of the language of the resource's own content (e.g. UI copy).

## Comment tags

- `TODO:` — something to do or fix later.
- `INFO:` — context on why something is done a certain way.

## Component placement

- **Shared components** — used in more than one place, or clearly destined to be (e.g. a `Button`) — go in `src/components`.
- **Page-only components** — used only on a single page — go next to that page, in a `_components` folder inside the page's own folder.

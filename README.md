# front-stylex-template

Monorepo frontend template wired around shared StyleX-powered UI and utilities, with Nx layered on top of pnpm for task orchestration and local caching.

## Apps

- `apps/nextjs` — Next.js App Router + StyleX Babel/PostCSS pipeline
- `apps/tanstack-start` — TanStack Start + Vite + StyleX unplugin
- `apps/astro` — Astro + React integration + StyleX unplugin
- `apps/vite` — Vite React + StyleX unplugin

## Packages

- `packages/shared-components` — reusable React + StyleX UI building blocks
- `packages/utils` — shared framework metadata, reference links, and content helpers

## Install

```bash
pnpm install
```

## Verify

```bash
pnpm run check
```

## Run apps

```bash
pnpm run dev:nextjs
pnpm run dev:tanstack-start
pnpm run dev:astro
pnpm run dev:vite
```

## Nx workflow

```bash
pnpm run nx:show
pnpm run nx:graph
pnpm run nx:affected:build
pnpm run nx:affected:typecheck
```

## Reference examples

The workspace borrows StyleX integration patterns from the official StyleX examples repository:

- https://github.com/facebook/stylex/tree/main/examples/example-nextjs
- https://github.com/facebook/stylex/tree/main/examples/example-vite-react
- https://github.com/facebook/stylex/tree/main/examples/example-react-router

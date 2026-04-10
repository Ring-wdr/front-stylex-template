# front-stylex-template

Monorepo frontend template wired around shared StyleX-powered UI and utilities, with Nx layered on top of pnpm for task orchestration and local caching.

![Nx](https://img.shields.io/badge/Nx-22.6.4-143055?logo=nx&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-10.33.0-F69220?logo=pnpm&logoColor=white)
![StyleX](https://img.shields.io/badge/StyleX-0.18.2-111827)
![React](https://img.shields.io/badge/React-19.2.5-149ECA?logo=react&logoColor=white)

## Apps

| App | Config badges | Notes |
| --- | --- | --- |
| `apps/nextjs` | ![Next.js](https://img.shields.io/badge/Next.js-16.2.3-000000?logo=nextdotjs&logoColor=white) ![App Router](https://img.shields.io/badge/App%20Router-enabled-111827) ![StyleX Babel/PostCSS](https://img.shields.io/badge/StyleX-Babel%20%2B%20PostCSS-2563EB) | Next.js App Router + StyleX Babel/PostCSS pipeline |
| `apps/tanstack-start` | ![TanStack Start](https://img.shields.io/badge/TanStack%20Start-latest-FF6B35) ![Vite](https://img.shields.io/badge/Vite-8.0.4-646CFF?logo=vite&logoColor=white) ![StyleX unplugin](https://img.shields.io/badge/StyleX-unplugin-2563EB) | TanStack Start + Vite + StyleX unplugin |
| `apps/astro` | ![Astro](https://img.shields.io/badge/Astro-6.1.5-FF5D01?logo=astro&logoColor=white) ![React integration](https://img.shields.io/badge/React-integration-149ECA?logo=react&logoColor=white) ![StyleX unplugin](https://img.shields.io/badge/StyleX-unplugin-2563EB) | Astro + React integration + StyleX unplugin |
| `apps/vite` | ![Vite](https://img.shields.io/badge/Vite-8.0.4-646CFF?logo=vite&logoColor=white) ![React](https://img.shields.io/badge/React-19.2.5-149ECA?logo=react&logoColor=white) ![StyleX unplugin](https://img.shields.io/badge/StyleX-unplugin-2563EB) | Vite React + StyleX unplugin |

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

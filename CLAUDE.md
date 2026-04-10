# CLAUDE.md

This repo is a multi-framework frontend monorepo using Nx + pnpm with shared StyleX-based UI.

## Use the repo workflow skill

For any of these tasks, read and follow:
- `.codex/skills/front-stylex-workflow/SKILL.md`

Trigger cases:
- framework config changes
- shared UI or theme changes
- React version upgrades
- build/runtime mismatch debugging
- multi-app verification

## Theme implementation map

- Shared theme model: `packages/utils/src/theme.ts`
- Shared tokens/themes: `packages/shared-components/src/themeTokens.stylex.ts` and `packages/shared-components/src/themeModes.stylex.ts`
- Shared switcher UI: `packages/shared-components/src/ThemeModeSwitcher.tsx`
- Next.js theme wiring: `apps/nextjs/app/ThemeShowcase.tsx` + `apps/nextjs/app/page.tsx`
- TanStack Start theme wiring: `apps/tanstack-start/src/components/TanStackThemePage.tsx` + `apps/tanstack-start/src/routes/index.tsx`
- Astro theme wiring: `apps/astro/src/components/AstroThemePage.tsx` + `apps/astro/src/pages/index.astro`
- Vite theme wiring: `apps/vite/src/ThemePage.tsx` + `apps/vite/src/App.tsx`

## Browser verification

When browser proof matters, use:
- `.claude/skills/playwright-cli/SKILL.md`

Do not rely only on “no console error”. For styling fixes, confirm computed styles on real elements.

## Repo habits

- Prefer repo scripts / Nx targets over ad hoc commands
- Keep shared dependency versions aligned across app workspaces
- Preserve the SSR vs CSR theme persistence split already used in this repo

---
name: front-stylex-workflow
description: Guardrails for working in this Nx + pnpm frontend monorepo with Next.js, TanStack Start, Astro, Vite, and shared StyleX packages. Use when changing framework config, shared UI/theme logic, dependency versions, dev/build/test flows, or when debugging runtime/build mismatches across apps.
---

# Front StyleX Workflow

## Overview

Use this skill for repo-specific execution guidance when you are touching shared UI, StyleX/theme code, framework config, or multi-app verification. Keep this file lean; load the references only when the current task needs them.

## Use this skill when

- Changing shared code under `packages/`
- Editing framework config (`next`, `vite`, `astro`, TanStack Start, Nx, pnpm)
- Debugging missing CSS, hydration mismatch, SSR/CSR behavior, or dev-server oddities
- Upgrading React or other shared runtime dependencies
- Running runtime verification across more than one app

## Workflow

1. **Preflight**
   - Prefer root scripts / Nx targets over ad hoc commands.
   - Check for already-running dev servers before assuming a port conflict is the root cause.
   - Treat the current repo state and latest logs as source of truth.

2. **Implement carefully**
   - Reuse existing shared packages and patterns before adding app-specific duplication.
   - Keep SSR apps and CSR-only apps on separate persistence paths when behavior differs.
   - When touching StyleX/theme logic, read `references/stylex-and-theme-rules.md` first.

3. **Verify with evidence**
   - Do not trust “no console errors” alone.
   - For visual or styling fixes, confirm computed styles on real elements.
   - For runtime work, use the Playwright CLI skill at `.claude/skills/playwright-cli/SKILL.md` when browser proof matters.
   - For multi-app changes, verify each affected app explicitly.

## Repo-specific rules

- **Nx first**
  - Prefer `pnpm nx run <project>:<target>` or repo scripts such as `pnpm run check`.
  - Use `pnpm run nx:show` / `pnpm run nx:graph` when the project map matters.

- **Shared dependency alignment**
  - Keep `react` / `react-dom` aligned across all app workspaces and the shared React package.
  - Avoid upgrading only one app when the runtime is shared.

- **Theme implementation map**
  - Shared theme types/constants: `packages/utils/src/theme.ts`
  - Shared StyleX tokens/themes: `packages/shared-components/src/themeTokens.stylex.ts` and `packages/shared-components/src/themeModes.stylex.ts`
  - Shared theme switcher UI: `packages/shared-components/src/ThemeModeSwitcher.tsx`
  - Shared themed showcase: `packages/shared-components/src/FrameworkShowcase.tsx`
  - Next.js wiring: `apps/nextjs/app/ThemeShowcase.tsx` and `apps/nextjs/app/page.tsx`
  - TanStack Start wiring: `apps/tanstack-start/src/components/TanStackThemePage.tsx` and `apps/tanstack-start/src/routes/index.tsx`
  - Astro wiring: `apps/astro/src/components/AstroThemePage.tsx` and `apps/astro/src/pages/index.astro`
  - Vite wiring: `apps/vite/src/ThemePage.tsx` and `apps/vite/src/App.tsx`

- **Token efficiency**
  - Read only the reference file relevant to the current failure mode.
  - Do not load every framework note unless the task truly spans all of them.

## References

- `references/stylex-and-theme-rules.md` — StyleX, tokens, themes, SSR/CSR theme persistence rules
- `references/framework-runtime-notes.md` — framework-specific runtime/build rules and traps
- `references/verification-playbook.md` — how to verify styling/runtime changes efficiently

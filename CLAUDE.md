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

## Browser verification

When browser proof matters, use:
- `.claude/skills/playwright-cli/SKILL.md`

Do not rely only on “no console error”. For styling fixes, confirm computed styles on real elements.

## Repo habits

- Prefer repo scripts / Nx targets over ad hoc commands
- Keep shared dependency versions aligned across app workspaces
- Preserve the SSR vs CSR theme persistence split already used in this repo

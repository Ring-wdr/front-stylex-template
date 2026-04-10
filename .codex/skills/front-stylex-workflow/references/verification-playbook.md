# Verification playbook

## Default verification order

1. `pnpm run check`
2. Start only the affected app dev servers
3. Use Playwright CLI when runtime or styling proof matters
4. Stop servers and clean up browser sessions afterward

## Styling verification

Do not stop at “page loaded”. Verify at least one concrete style signal:

- computed background color or background image on the themed container
- heading font size or spacing that differs from browser defaults
- persistence after reload if the task involves theme or client state

## Theme verification

For theme changes:

1. Load the app
2. Switch to dark
3. Confirm the rendered surface changed via computed styles
4. Confirm persistence store changed:
   - cookie for SSR apps
   - localStorage for Vite
5. Reload
6. Confirm the dark mode still renders
7. Check console errors after reload

## Runtime verification

Use `.claude/skills/playwright-cli/SKILL.md` for browser workflows when needed.
Capture:

- actual URL/port
- visible page state
- console error log
- network failures only when they matter to the bug

## Keep token use efficient

- Prefer one targeted computed-style check over verbose page dumps.
- Read only the reference file that matches the failure class.
- Do not rerun every app unless the change truly affects every app.

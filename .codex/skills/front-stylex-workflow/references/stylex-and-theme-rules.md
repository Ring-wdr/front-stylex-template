# StyleX and theme rules

## Shared StyleX rules

- Prefer StyleX for component and page styling in this repo.
- Use plain CSS only when StyleX cannot cleanly express the requirement or when framework/compiler plumbing explicitly requires CSS (for example global resets, `@stylex;` emission, or other required global entrypoints).
- If you fall back to plain CSS, document the specific constraint that prevented a StyleX solution.
- If `stylex.create` references tokens or themes, import them from `.stylex.ts` sources directly when required by the compiler path.
- In this repo, compiler-sensitive theme sources are:
  - `packages/shared-components/src/themeTokens.stylex.ts`
  - `packages/shared-components/src/themeModes.stylex.ts`
- For Next.js PostCSS emission, there must be a real CSS emission path with `@stylex;`.
- When a page renders StyleX class names but still looks unstyled, check whether generated CSS is actually present in the loaded stylesheet.

## Theme rules in this repo

- Theme modes are `light`, `dark`, `system`.
- Shared theme constants/types live in `packages/utils/src/theme.ts`.
- Shared theme tokens/themes and switcher UI live in `packages/shared-components/src/`.
- The shared showcase reads theme tokens in `packages/shared-components/src/FrameworkShowcase.tsx`.

## Persistence split by app

- **Next.js**: SSR-safe initial theme comes from cookie in `apps/nextjs/app/page.tsx`; client switching lives in `apps/nextjs/app/ThemeShowcase.tsx`.
- **TanStack Start**: SSR-safe initial theme comes from cookie in `apps/tanstack-start/src/routes/index.tsx`; client switching lives in `apps/tanstack-start/src/components/TanStackThemePage.tsx`.
- **Astro**: SSR-safe initial theme comes from cookie in `apps/astro/src/pages/index.astro`; client switching lives in `apps/astro/src/components/AstroThemePage.tsx`.
- **Vite**: CSR-only; localStorage persistence lives in `apps/vite/src/ThemePage.tsx`.

## Hydration safety

- SSR apps must render the initial theme from the server-readable cookie to avoid mismatch/flash.
- `system` is the first-visit default, but SSR must still choose a stable initial rendered mode path based on the stored value contract.
- If adding dev-only Vite virtual StyleX injection, do not introduce hydration warnings in SSR shells.

## Common failure patterns

- Missing `@stylex;` in Next CSS entrypoint (`apps/nextjs/app/globals.css`)
- Importing theme tokens through a non-`.stylex.ts` helper in compiler-sensitive code
- Vite SSR shell missing `/virtual:stylex.css` and runtime injection in dev
- Astro using cookie-based theme logic while still building as prerendered static output

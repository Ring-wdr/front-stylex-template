# StyleX and theme rules

## Shared StyleX rules

- If `stylex.create` references tokens or themes, import them from `.stylex.ts` sources directly when required by the compiler path.
- For Next.js PostCSS emission, there must be a real CSS emission path with `@stylex;`.
- When a page renders StyleX class names but still looks unstyled, check whether generated CSS is actually present in the loaded stylesheet.

## Theme rules in this repo

- Theme modes are `light`, `dark`, `system`.
- Shared theme constants/types live in `packages/utils`.
- Shared theme tokens/themes and shared theme switcher UI live in `packages/shared-components`.

## Persistence split by app

- **Next.js**: SSR-safe initial theme comes from cookie.
- **TanStack Start**: SSR-safe initial theme comes from cookie.
- **Astro**: SSR-safe initial theme comes from cookie; cookie-based SSR requires server output rather than static prerender.
- **Vite**: CSR-only; use localStorage and do not add cookie logic unless the app becomes SSR.

## Hydration safety

- SSR apps must render the initial theme from the server-readable cookie to avoid mismatch/flash.
- `system` is the first-visit default, but SSR must still choose a stable initial rendered mode path based on the stored value contract.
- If adding dev-only Vite virtual StyleX injection, do not introduce hydration warnings in SSR shells.

## Common failure patterns

- Missing `@stylex;` in Next CSS entrypoint
- Importing theme tokens through a non-`.stylex.ts` helper in compiler-sensitive code
- Vite SSR shell missing `/virtual:stylex.css` and runtime injection in dev
- Astro using cookie-based theme logic while still building as prerendered static output

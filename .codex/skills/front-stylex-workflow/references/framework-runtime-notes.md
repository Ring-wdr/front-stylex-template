# Framework runtime notes

## Next.js

- Use the app router shell/layout for SSR-safe theme setup.
- Verify generated CSS is emitted into the actual loaded stylesheet, not just present as class names in HTML.
- `transpilePackages` matters for shared package source.

## TanStack Start

- Prefer existing Nx/Vite commands already defined in the repo.
- SSR-safe theme initialization can use server utilities / server functions, but client switchers still update cookie state.
- Be careful with dev-only head injections; hydration warnings are a real regression.

## Astro

- Cookie-backed SSR theme behavior is only valid when Astro output supports request access.
- If a page needs request headers/cookies, static prerender is the wrong mode.
- React island/theme switcher logic should stay small and focused.

## Vite

- Treat it as CSR-only unless the app architecture changes.
- Persist theme in localStorage.
- Do not add SSR/cookie complexity where it is not needed.

## Ports and process hygiene

- Check which ports are already in use before debugging the app itself.
- A successful browser load on an alternate port is still valid evidence; record the actual port you verified.

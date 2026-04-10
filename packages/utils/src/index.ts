export * from './theme';
export type FrameworkId = 'nextjs' | 'tanstack-start' | 'astro' | 'vite';

export type ReferenceLink = {
  title: string;
  href: string;
  description: string;
};

export type FrameworkContent = {
  id: FrameworkId;
  label: string;
  headline: string;
  summary: string;
  bullets: readonly string[];
  references: readonly ReferenceLink[];
};

export const workspacePackages = [
  {
    name: '@repo/shared-components',
    purpose: 'Reusable React + StyleX sections, cards, and layout primitives.',
  },
  {
    name: '@repo/utils',
    purpose: 'Framework metadata, shared copy, and official example references.',
  },
] as const;

const nextReferences = [
  {
    title: 'StyleX Next.js example',
    href: 'https://github.com/facebook/stylex/tree/main/examples/example-nextjs',
    description: 'Official App Router example using Babel + PostCSS compilation.',
  },
  {
    title: 'StyleX installation guide',
    href: 'https://stylexjs.com/docs/learn/installation/nextjs/',
    description: 'Reference for wiring StyleX into the Next.js toolchain.',
  },
] as const satisfies readonly ReferenceLink[];

const viteReferences = [
  {
    title: 'StyleX Vite React example',
    href: 'https://github.com/facebook/stylex/tree/main/examples/example-vite-react',
    description: 'Official Vite + React example using the StyleX unplugin.',
  },
  {
    title: 'StyleX unplugin config',
    href: 'https://stylexjs.com/docs/api/configuration/unplugin/',
    description: 'Configuration surface shared by the Vite-based apps in this repo.',
  },
] as const satisfies readonly ReferenceLink[];

const tanstackReferences = [
  {
    title: 'StyleX React Router example',
    href: 'https://github.com/facebook/stylex/tree/main/examples/example-react-router',
    description: 'Useful SSR/Vite reference while adapting StyleX to TanStack Start.',
  },
  {
    title: 'StyleX Vite React example',
    href: 'https://github.com/facebook/stylex/tree/main/examples/example-vite-react',
    description: 'Baseline plugin ordering for Vite-backed React frameworks.',
  },
] as const satisfies readonly ReferenceLink[];

const astroReferences = [
  {
    title: 'StyleX Vite React example',
    href: 'https://github.com/facebook/stylex/tree/main/examples/example-vite-react',
    description: 'Astro uses Vite under the hood, so this is the closest official reference.',
  },
  {
    title: 'Astro React integration',
    href: 'https://docs.astro.build/en/guides/integrations-guide/react/',
    description: 'Official Astro guide for rendering shared React components.',
  },
] as const satisfies readonly ReferenceLink[];

export const frameworkContent: Record<FrameworkId, FrameworkContent> = {
  nextjs: {
    id: 'nextjs',
    label: 'Next.js',
    headline: 'App Router template with shared StyleX UI primitives',
    summary:
      'This app compiles StyleX through Babel and PostCSS while transpiling the shared workspace packages.',
    bullets: [
      'Uses `transpilePackages` so shared package source works inside the monorepo.',
      'Renders the shared React showcase component directly from `packages/shared-components`.',
      'Keeps the app entry minimal so teams can start from a clean App Router baseline.',
    ],
    references: nextReferences,
  },
  'tanstack-start': {
    id: 'tanstack-start',
    label: 'TanStack Start',
    headline: 'TanStack Start routed through Vite with StyleX plugin support',
    summary:
      'This app uses TanStack Start for SSR-friendly routing and the StyleX Vite plugin for shared React components.',
    bullets: [
      'Shares exactly the same component package used by the Vite and Astro apps.',
      'Keeps TanStack Start config close to the official starter while adding StyleX.',
      'Provides a fast full-stack React starting point for teams that want typed routing.',
    ],
    references: tanstackReferences,
  },
  astro: {
    id: 'astro',
    label: 'Astro',
    headline: 'Astro page shell embedding the shared React + StyleX showcase',
    summary:
      'This app uses the Astro React integration so the shared workspace components stay reusable across React and Astro.',
    bullets: [
      'Demonstrates cross-framework reuse without cloning component code.',
      'Runs StyleX through Astro’s Vite pipeline with the same unplugin as the Vite apps.',
      'Pairs Astro layouts with React islands-ready shared UI.',
    ],
    references: astroReferences,
  },
  vite: {
    id: 'vite',
    label: 'Vite',
    headline: 'Lightweight Vite React baseline using the shared StyleX package',
    summary:
      'This app is the closest match to the official StyleX Vite example and acts as the simplest playground in the monorepo.',
    bullets: [
      'Uses the StyleX Vite plugin with React for fast local iteration.',
      'Reuses the workspace UI package without any app-specific styling code.',
      'Good default for micro-frontends or embeddable UI surfaces.',
    ],
    references: viteReferences,
  },
};

export function getFrameworkContent(id: FrameworkId): FrameworkContent {
  return frameworkContent[id];
}

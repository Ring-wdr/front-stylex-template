import * as stylex from '@stylexjs/stylex';

const DARK = '@media (prefers-color-scheme: dark)' as const;

export const themeTokens = stylex.defineVars({
  pageBackgroundBase: {
    default: '#eef4ff',
    [DARK]: '#0b1220',
  },
  pageBackgroundStart: {
    default: '#f8fbff',
    [DARK]: '#111b2e',
  },
  pageBackgroundEnd: {
    default: '#eef4ff',
    [DARK]: '#0b1220',
  },
  textPrimary: {
    default: '#10233d',
    [DARK]: '#e6eef8',
  },
  textSecondary: {
    default: '#334155',
    [DARK]: '#c1cfdf',
  },
  textMuted: {
    default: '#475569',
    [DARK]: '#9fb0c3',
  },
  heroSurface: {
    default: 'rgba(255, 255, 255, 0.88)',
    [DARK]: 'rgba(15, 23, 42, 0.82)',
  },
  cardSurface: {
    default: 'rgba(255, 255, 255, 0.94)',
    [DARK]: 'rgba(15, 23, 42, 0.88)',
  },
  borderColor: {
    default: 'rgba(148, 163, 184, 0.2)',
    [DARK]: 'rgba(148, 163, 184, 0.28)',
  },
  accentSolid: {
    default: '#1d4ed8',
    [DARK]: '#8fb6ff',
  },
  accentText: {
    default: '#ffffff',
    [DARK]: '#08111d',
  },
  accentSoft: {
    default: 'rgba(29, 78, 216, 0.10)',
    [DARK]: 'rgba(143, 182, 255, 0.18)',
  },
  accentSoftHover: {
    default: 'rgba(29, 78, 216, 0.18)',
    [DARK]: 'rgba(143, 182, 255, 0.28)',
  },
  controlSurface: {
    default: 'rgba(255, 255, 255, 0.72)',
    [DARK]: 'rgba(15, 23, 42, 0.68)',
  },
  controlSurfaceHover: {
    default: 'rgba(255, 255, 255, 0.92)',
    [DARK]: 'rgba(30, 41, 59, 0.92)',
  },
  controlText: {
    default: '#475569',
    [DARK]: '#cbd5e1',
  },
  controlActiveSurface: {
    default: '#1d4ed8',
    [DARK]: '#8fb6ff',
  },
  controlActiveText: {
    default: '#ffffff',
    [DARK]: '#08111d',
  },
  shadowStrong: {
    default: 'rgba(15, 23, 42, 0.08)',
    [DARK]: 'rgba(2, 6, 23, 0.42)',
  },
  shadowSoft: {
    default: 'rgba(15, 23, 42, 0.06)',
    [DARK]: 'rgba(2, 6, 23, 0.32)',
  },
});

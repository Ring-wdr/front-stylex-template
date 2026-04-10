export const THEME_COOKIE_NAME = 'front_stylex_theme';
export const THEME_STORAGE_KEY = 'front_stylex_theme';

export const THEME_OPTIONS = ['light', 'dark', 'system'] as const;

export type ThemeMode = (typeof THEME_OPTIONS)[number];
export type ResolvedTheme = 'light' | 'dark';

export function isThemeMode(value: unknown): value is ThemeMode {
  return typeof value === 'string' && (THEME_OPTIONS as readonly string[]).includes(value);
}

export function parseThemeMode(value: unknown): ThemeMode {
  return isThemeMode(value) ? value : 'system';
}

export function resolveSystemTheme(prefersDark: boolean): ResolvedTheme {
  return prefersDark ? 'dark' : 'light';
}

export function readThemeModeFromCookieHeader(cookieHeader?: string | null): ThemeMode {
  if (!cookieHeader) return 'system';

  const match = cookieHeader
    .split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${THEME_COOKIE_NAME}=`));

  if (!match) return 'system';

  return parseThemeMode(match.split('=').slice(1).join('='));
}

export function buildThemeCookie(mode: ThemeMode): string {
  return `${THEME_COOKIE_NAME}=${mode}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

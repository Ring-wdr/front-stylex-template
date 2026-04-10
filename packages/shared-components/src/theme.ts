import type { ThemeMode } from '@repo/utils';
import { darkTheme, lightTheme } from './themeModes.stylex';
import { themeTokens } from './themeTokens.stylex';

export { darkTheme, lightTheme, themeTokens };

export function getThemeStyle(mode: ThemeMode) {
  if (mode === 'light') return lightTheme;
  if (mode === 'dark') return darkTheme;
  return null;
}

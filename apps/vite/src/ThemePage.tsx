import { useEffect, useState } from 'react';
import * as stylex from '@stylexjs/stylex';
import {
  FrameworkShowcase,
  ThemeModeSwitcher,
  getThemeStyle,
} from '@repo/shared-components';
import { THEME_STORAGE_KEY, parseThemeMode, type ThemeMode } from '@repo/utils';

const styles = stylex.create({
  shell: {
    minHeight: '100vh',
  },
});

function getInitialMode(): ThemeMode {
  if (typeof window === 'undefined') return 'system';
  return parseThemeMode(window.localStorage.getItem(THEME_STORAGE_KEY));
}

export function ThemePage() {
  const [mode, setMode] = useState<ThemeMode>(getInitialMode);

  useEffect(() => {
    window.localStorage.setItem(THEME_STORAGE_KEY, mode);
  }, [mode]);

  return (
    <div {...stylex.props(styles.shell, getThemeStyle(mode))}>
      <FrameworkShowcase
        framework="vite"
        toolbar={<ThemeModeSwitcher label="Theme" mode={mode} onChange={setMode} />}
      />
    </div>
  );
}

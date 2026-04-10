import { useEffect, useState } from 'react';
import * as stylex from '@stylexjs/stylex';
import {
  FrameworkShowcase,
  ThemeModeSwitcher,
  getThemeStyle,
} from '@repo/shared-components';
import { buildThemeCookie, type ThemeMode } from '@repo/utils';

const styles = stylex.create({
  shell: {
    minHeight: '100vh',
  },
});

type AstroThemePageProps = {
  initialMode: ThemeMode;
};

export function AstroThemePage({ initialMode }: AstroThemePageProps) {
  const [mode, setMode] = useState<ThemeMode>(initialMode);

  useEffect(() => {
    document.cookie = buildThemeCookie(mode);
  }, [mode]);

  return (
    <div {...stylex.props(styles.shell, getThemeStyle(mode))}>
      <FrameworkShowcase
        framework="astro"
        toolbar={<ThemeModeSwitcher label="Theme" mode={mode} onChange={setMode} />}
      />
    </div>
  );
}

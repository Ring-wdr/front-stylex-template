'use client';

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

type ThemeShowcaseProps = {
  initialMode: ThemeMode;
};

export function ThemeShowcase({ initialMode }: ThemeShowcaseProps) {
  const [mode, setMode] = useState<ThemeMode>(initialMode);

  useEffect(() => {
    document.cookie = buildThemeCookie(mode);
  }, [mode]);

  return (
    <div {...stylex.props(styles.shell, getThemeStyle(mode))}>
      <FrameworkShowcase
        framework="nextjs"
        toolbar={<ThemeModeSwitcher label="Theme" mode={mode} onChange={setMode} />}
      />
    </div>
  );
}

import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import * as stylex from '@stylexjs/stylex';
import { ThemeModeSwitcher, getThemeStyle } from '@repo/shared-components';
import { themeTokens } from '../../../../packages/shared-components/src/themeTokens.stylex';
import { buildThemeCookie, type ThemeMode } from '@repo/utils';
import { localAboutTokens } from './aboutTokens.stylex';

const notes = [
  'This file route renders a local component instead of reusing shared page UI.',
  'The styles come from local StyleX vars combined with the shared theme tokens.',
  'Toggle theme modes to verify the local mint tint composes with the shared surface and copy vars.',
] as const;


const styles = stylex.create({
  page: {
    minHeight: '100vh',
    display: 'grid',
    placeItems: 'center',
    padding: '24px',
    backgroundColor: themeTokens.pageBackgroundBase,
    backgroundImage: `linear-gradient(180deg, ${themeTokens.pageBackgroundStart} 0%, ${themeTokens.pageBackgroundEnd} 100%)`,
    color: themeTokens.textPrimary,
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  card: {
    width: 'min(100%, 760px)',
    padding: '32px',
    borderRadius: '28px',
    backgroundColor: themeTokens.heroSurface,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: themeTokens.borderColor,
    boxShadow: `0 24px 70px ${themeTokens.shadowStrong}`,
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '16px',
    flexWrap: 'wrap',
  },
  eyebrow: {
    margin: '0 0 12px',
    color: themeTokens.accentSolid,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    fontSize: '0.8rem',
  },
  title: {
    margin: 0,
    color: themeTokens.textPrimary,
    fontSize: 'clamp(2rem, 4vw, 3rem)',
  },
  description: {
    margin: '16px 0 0',
    color: themeTokens.textSecondary,
    lineHeight: 1.7,
  },
  noteBox: {
    marginTop: '24px',
    padding: '20px',
    borderRadius: '20px',
    backgroundColor: themeTokens.accentSoft,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: themeTokens.accentSoftHover,
  },
  noteLabel: {
    margin: '0 0 10px',
    color: themeTokens.accentSolid,
    fontSize: '0.85rem',
    fontWeight: 700,
  },
  noteText: {
    margin: 0,
    color: themeTokens.textSecondary,
    lineHeight: 1.6,
  },
  demoCard: {
    marginTop: '24px',
    padding: localAboutTokens.demoInset,
    borderRadius: localAboutTokens.demoRadius,
    backgroundColor: themeTokens.cardSurface,
    backgroundImage: `linear-gradient(135deg, ${localAboutTokens.demoTint} 0%, ${themeTokens.cardSurface} 72%)`,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: themeTokens.borderColor,
    boxShadow: `0 20px 60px ${themeTokens.shadowSoft}`,
  },
  demoHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '12px',
    flexWrap: 'wrap',
  },
  demoEyebrow: {
    margin: 0,
    color: themeTokens.textMuted,
    fontSize: '0.78rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },
  demoBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    minHeight: '32px',
    padding: '0 12px',
    borderRadius: '999px',
    backgroundColor: themeTokens.accentSoft,
    color: themeTokens.accentSolid,
    fontSize: '0.82rem',
    fontWeight: 700,
  },
  demoTitle: {
    margin: '12px 0 8px',
    color: themeTokens.textPrimary,
    fontSize: '1.2rem',
  },
  demoCopy: {
    margin: 0,
    color: themeTokens.textSecondary,
    lineHeight: 1.6,
  },
  tokenRow: {
    marginTop: '16px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  tokenChip: {
    display: 'inline-flex',
    alignItems: 'center',
    minHeight: '34px',
    padding: '0 12px',
    borderRadius: localAboutTokens.demoRadius,
    backgroundColor: localAboutTokens.demoStripe,
    color: themeTokens.textPrimary,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: themeTokens.borderColor,
    fontSize: '0.85rem',
    fontWeight: 700,
  },
  actions: {
    marginTop: '24px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
  },
  actionBase: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '44px',
    padding: '0 16px',
    borderRadius: '999px',
    fontWeight: 700,
    textDecoration: 'none',
  },
  primaryButton: {
    border: 'none',
    backgroundColor: themeTokens.accentSolid,
    color: themeTokens.accentText,
    cursor: 'pointer',
  },
  secondaryLink: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: themeTokens.borderColor,
    backgroundColor: themeTokens.cardSurface,
    color: themeTokens.textPrimary,
  },
});

type TanStackAboutPageProps = {
  initialMode: ThemeMode;
};

export function TanStackAboutPage({ initialMode }: TanStackAboutPageProps) {
  const [mode, setMode] = useState<ThemeMode>(initialMode);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    document.cookie = buildThemeCookie(mode);
  }, [mode]);

  return (
    <main {...stylex.props(styles.page, getThemeStyle(mode))}>
      <section {...stylex.props(styles.card)}>
        <div {...stylex.props(styles.headerRow)}>
          <div>
            <p {...stylex.props(styles.eyebrow)}>TanStack Start app</p>
            <h1 {...stylex.props(styles.title)}>A tiny local about page.</h1>
          </div>
          <ThemeModeSwitcher label="Theme" mode={mode} onChange={setMode} />
        </div>
        <p {...stylex.props(styles.description)}>
          This route now proves a local StyleX token set can sit on top of the shared theme variables without moving anything into shared packages.
        </p>

        <div {...stylex.props(styles.noteBox)}>
          <p {...stylex.props(styles.noteLabel)}>Current note</p>
          <p {...stylex.props(styles.noteText)}>{notes[activeIndex]}</p>
        </div>

        <div data-token-demo="tanstack-start" {...stylex.props(styles.demoCard)}>
          <div {...stylex.props(styles.demoHeader)}>
            <p {...stylex.props(styles.demoEyebrow)}>Token composition demo</p>
            <span {...stylex.props(styles.demoBadge)}>local vars + shared theme</span>
          </div>
          <h2 {...stylex.props(styles.demoTitle)}>Shared theme surface, local TanStack mint.</h2>
          <p {...stylex.props(styles.demoCopy)}>
            Shared theme vars provide the surface, copy, border, and accent values. App-local vars contribute the mint tint, chip fill, spacing, and rounding for this specific page.
          </p>
          <div {...stylex.props(styles.tokenRow)}>
            <span {...stylex.props(styles.tokenChip)}>shared: cardSurface</span>
            <span {...stylex.props(styles.tokenChip)}>shared: shadowSoft</span>
            <span {...stylex.props(styles.tokenChip)}>local: demoStripe</span>
          </div>
        </div>

        <div {...stylex.props(styles.actions)}>
          <button
            {...stylex.props(styles.actionBase, styles.primaryButton)}
            type="button"
            onClick={() => setActiveIndex((current) => (current + 1) % notes.length)}
          >
            Rotate note
          </button>
          <Link {...stylex.props(styles.actionBase, styles.secondaryLink)} to="/">
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}

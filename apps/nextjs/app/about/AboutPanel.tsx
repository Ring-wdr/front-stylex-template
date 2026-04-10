'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import * as stylex from '@stylexjs/stylex';
import { ThemeModeSwitcher, getThemeStyle } from '@repo/shared-components';
import { themeTokens } from '../../../../packages/shared-components/src/themeTokens.stylex';
import { buildThemeCookie, type ThemeMode } from '@repo/utils';
import { localAboutTokens } from './aboutTokens.stylex';

const featureNotes = [
  {
    title: 'Local component',
    description: 'This page is rendered by a Next.js-only client component inside the app router.',
  },
  {
    title: 'Local StyleX tokens',
    description: 'The demo card blends local About-page vars with the shared theme tokens exported by the monorepo.',
  },
  {
    title: 'Theme-aware proof',
    description: 'Use the shared theme switcher to confirm the local card reacts to the shared theme variables.',
  },
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
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    color: themeTokens.textPrimary,
  },
  description: {
    margin: '16px 0 0',
    color: themeTokens.textSecondary,
    lineHeight: 1.7,
  },
  featureBox: {
    marginTop: '24px',
    padding: '20px',
    borderRadius: '20px',
    backgroundColor: themeTokens.accentSoft,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: themeTokens.accentSoftHover,
  },
  featureLabel: {
    margin: 0,
    color: themeTokens.accentSolid,
    fontSize: '0.85rem',
    fontWeight: 700,
  },
  featureTitle: {
    margin: '10px 0 8px',
    color: themeTokens.textPrimary,
    fontSize: '1.4rem',
  },
  featureDescription: {
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
    color: themeTokens.textPrimary,
    backgroundColor: themeTokens.cardSurface,
  },
});

type AboutPanelProps = {
  initialMode: ThemeMode;
};

export function AboutPanel({ initialMode }: AboutPanelProps) {
  const [mode, setMode] = useState<ThemeMode>(initialMode);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeNote = featureNotes[activeIndex];

  useEffect(() => {
    document.cookie = buildThemeCookie(mode);
  }, [mode]);

  return (
    <main {...stylex.props(styles.page, getThemeStyle(mode))}>
      <section {...stylex.props(styles.card)}>
        <div {...stylex.props(styles.headerRow)}>
          <div>
            <p {...stylex.props(styles.eyebrow)}>Next.js app</p>
            <h1 {...stylex.props(styles.title)}>A tiny local about page.</h1>
          </div>
          <ThemeModeSwitcher label="Theme" mode={mode} onChange={setMode} />
        </div>
        <p {...stylex.props(styles.description)}>
          This route keeps the component local, and the new token demo proves local StyleX vars can combine with the shared theme variables.
        </p>

        <div {...stylex.props(styles.featureBox)}>
          <p {...stylex.props(styles.featureLabel)}>Current note</p>
          <h2 {...stylex.props(styles.featureTitle)}>{activeNote.title}</h2>
          <p {...stylex.props(styles.featureDescription)}>{activeNote.description}</p>
        </div>

        <div data-token-demo="nextjs" {...stylex.props(styles.demoCard)}>
          <div {...stylex.props(styles.demoHeader)}>
            <p {...stylex.props(styles.demoEyebrow)}>Token composition demo</p>
            <span {...stylex.props(styles.demoBadge)}>local vars + shared theme</span>
          </div>
          <h2 {...stylex.props(styles.demoTitle)}>Shared theme surface, local About-page tint.</h2>
          <p {...stylex.props(styles.demoCopy)}>
            The panel surface, border, copy, accent badge, and shadow all come from shared theme variables, while the inset, radius, and blue tint come from local StyleX vars.
          </p>
          <div {...stylex.props(styles.tokenRow)}>
            <span {...stylex.props(styles.tokenChip)}>shared: cardSurface</span>
            <span {...stylex.props(styles.tokenChip)}>shared: accentSolid</span>
            <span {...stylex.props(styles.tokenChip)}>local: demoTint</span>
          </div>
        </div>

        <div {...stylex.props(styles.actions)}>
          <button
            {...stylex.props(styles.actionBase, styles.primaryButton)}
            type="button"
            onClick={() => setActiveIndex((current) => (current + 1) % featureNotes.length)}
          >
            Show next note
          </button>
          <Link {...stylex.props(styles.actionBase, styles.secondaryLink)} href="/">
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}

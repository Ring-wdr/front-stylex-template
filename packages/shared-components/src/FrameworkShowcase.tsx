import * as stylex from '@stylexjs/stylex';
import {
  getFrameworkContent,
  workspacePackages,
  type FrameworkId,
} from '@repo/utils';
import { themeTokens } from './themeTokens.stylex';

type FrameworkShowcaseProps = {
  framework: FrameworkId;
  toolbar?: React.ReactNode;
};

const MOBILE = '@media (max-width: 900px)' as const;

export function FrameworkShowcase({ framework, toolbar }: FrameworkShowcaseProps) {
  const content = getFrameworkContent(framework);

  return (
    <main {...stylex.props(styles.page)}>
      <section {...stylex.props(styles.hero)}>
        <div {...stylex.props(styles.heroHeader, toolbar ? null : styles.heroHeaderCompact)}>
          <div {...stylex.props(styles.kickerRow)}>
            <span {...stylex.props(styles.kicker)}>{content.label}</span>
            <span {...stylex.props(styles.kickerMuted)}>monorepo template</span>
          </div>
          {toolbar ? <div {...stylex.props(styles.toolbarSlot)}>{toolbar}</div> : null}
        </div>
        <h1 {...stylex.props(styles.headline)}>{content.headline}</h1>
        <p {...stylex.props(styles.summary)}>{content.summary}</p>
        <ul {...stylex.props(styles.bullets)}>
          {content.bullets.map((item) => (
            <li key={item} {...stylex.props(styles.bulletItem)}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section {...stylex.props(styles.section)}>
        <div {...stylex.props(styles.sectionHeader)}>
          <h2 {...stylex.props(styles.sectionTitle)}>Workspace packages</h2>
          <p {...stylex.props(styles.sectionCopy)}>
            Every app imports from the same shared packages instead of copying components.
          </p>
        </div>
        <div {...stylex.props(styles.cardGrid)}>
          {workspacePackages.map((pkg) => (
            <article key={pkg.name} {...stylex.props(styles.card)}>
              <div {...stylex.props(styles.cardEyebrow)}>package</div>
              <h3 {...stylex.props(styles.cardTitle)}>{pkg.name}</h3>
              <p {...stylex.props(styles.cardCopy)}>{pkg.purpose}</p>
            </article>
          ))}
        </div>
      </section>

      <section {...stylex.props(styles.section)}>
        <div {...stylex.props(styles.sectionHeader)}>
          <h2 {...stylex.props(styles.sectionTitle)}>Reference links</h2>
          <p {...stylex.props(styles.sectionCopy)}>
            These are the upstream examples and docs used to shape the template setup.
          </p>
        </div>
        <div {...stylex.props(styles.cardGrid)}>
          {content.references.map((reference) => (
            <a
              key={reference.href}
              {...stylex.props(styles.card, styles.linkCard)}
              href={reference.href}
              rel="noreferrer"
              target="_blank"
            >
              <div {...stylex.props(styles.cardEyebrow)}>reference</div>
              <h3 {...stylex.props(styles.cardTitle)}>{reference.title}</h3>
              <p {...stylex.props(styles.cardCopy)}>{reference.description}</p>
              <span {...stylex.props(styles.linkArrow)}>Open ↗</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

const styles = stylex.create({
  page: {
    minHeight: '100vh',
    paddingInline: '24px',
    paddingBlock: '32px 56px',
    backgroundColor: themeTokens.pageBackgroundBase,
    backgroundImage: `linear-gradient(180deg, ${themeTokens.pageBackgroundStart} 0%, ${themeTokens.pageBackgroundEnd} 100%)`,
    color: themeTokens.textPrimary,
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  hero: {
    maxWidth: 960,
    marginInline: 'auto',
    padding: '32px',
    borderRadius: 28,
    backgroundColor: themeTokens.heroSurface,
    boxShadow: `0 24px 80px ${themeTokens.shadowStrong}`,
    marginBottom: 32,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: themeTokens.borderColor,
  },
  heroHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 16,
    flexWrap: {
      default: 'wrap',
      [MOBILE]: 'wrap',
    },
    marginBottom: 16,
  },
  heroHeaderCompact: {
    justifyContent: 'flex-start',
  },
  toolbarSlot: {
    marginLeft: 'auto',
  },
  kickerRow: {
    display: 'flex',
    gap: 12,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  kicker: {
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: 999,
    paddingInline: 12,
    paddingBlock: 6,
    backgroundColor: themeTokens.accentSolid,
    color: themeTokens.accentText,
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
  },
  kickerMuted: {
    fontSize: 14,
    color: themeTokens.textMuted,
  },
  headline: {
    fontSize: {
      default: 48,
      [MOBILE]: 34,
    },
    lineHeight: 1.05,
    letterSpacing: '-0.03em',
    margin: 0,
    marginBottom: 16,
    maxWidth: '13ch',
  },
  summary: {
    margin: 0,
    marginBottom: 24,
    fontSize: 18,
    lineHeight: 1.7,
    color: themeTokens.textSecondary,
    maxWidth: '65ch',
  },
  bullets: {
    margin: 0,
    paddingLeft: 20,
    display: 'grid',
    gap: 12,
    color: themeTokens.textPrimary,
  },
  bulletItem: {
    lineHeight: 1.6,
  },
  section: {
    maxWidth: 960,
    marginInline: 'auto',
    marginTop: 24,
  },
  sectionHeader: {
    marginBottom: 16,
  },
  sectionTitle: {
    margin: 0,
    marginBottom: 8,
    fontSize: 24,
    lineHeight: 1.2,
  },
  sectionCopy: {
    margin: 0,
    color: themeTokens.textMuted,
    lineHeight: 1.6,
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: {
      default: 'repeat(2, minmax(0, 1fr))',
      [MOBILE]: '1fr',
    },
    gap: 16,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    padding: 24,
    borderRadius: 24,
    backgroundColor: themeTokens.cardSurface,
    boxShadow: `0 20px 60px ${themeTokens.shadowSoft}`,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: themeTokens.borderColor,
  },
  linkCard: {
    textDecoration: 'none',
    color: 'inherit',
    transitionProperty: 'transform, box-shadow, border-color, background-color',
    transitionDuration: '180ms',
    transform: {
      default: 'translateY(0)',
      ':hover': 'translateY(-2px)',
    },
    backgroundColor: {
      default: themeTokens.cardSurface,
      ':hover': themeTokens.accentSoft,
    },
    borderColor: {
      default: themeTokens.borderColor,
      ':hover': themeTokens.accentSoftHover,
    },
    boxShadow: {
      default: `0 20px 60px ${themeTokens.shadowSoft}`,
      ':hover': `0 24px 80px ${themeTokens.shadowStrong}`,
    },
  },
  cardEyebrow: {
    fontSize: 12,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: themeTokens.textMuted,
    fontWeight: 700,
  },
  cardTitle: {
    margin: 0,
    fontSize: 20,
    lineHeight: 1.3,
  },
  cardCopy: {
    margin: 0,
    color: themeTokens.textMuted,
    lineHeight: 1.6,
    flexGrow: 1,
  },
  linkArrow: {
    fontWeight: 700,
    color: themeTokens.accentSolid,
  },
});

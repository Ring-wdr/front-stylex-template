import * as stylex from '@stylexjs/stylex';
import {
  getFrameworkContent,
  workspacePackages,
  type FrameworkId,
} from '@repo/utils';

type FrameworkShowcaseProps = {
  framework: FrameworkId;
};

const MOBILE = '@media (max-width: 900px)' as const;
const SOFT_BACKGROUND = 'linear-gradient(180deg, #f8fbff 0%, #eef4ff 100%)';

export function FrameworkShowcase({ framework }: FrameworkShowcaseProps) {
  const content = getFrameworkContent(framework);

  return (
    <main {...stylex.props(styles.page)}>
      <section {...stylex.props(styles.hero)}>
        <div {...stylex.props(styles.kickerRow)}>
          <span {...stylex.props(styles.kicker)}>{content.label}</span>
          <span {...stylex.props(styles.kickerMuted)}>monorepo template</span>
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
    backgroundColor: '#eef4ff',
    backgroundImage: SOFT_BACKGROUND,
    color: '#10233d',
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  hero: {
    maxWidth: 960,
    marginInline: 'auto',
    padding: '32px',
    borderRadius: 28,
    backgroundColor: 'rgba(255, 255, 255, 0.88)',
    boxShadow: '0 24px 80px rgba(15, 23, 42, 0.08)',
    marginBottom: 32,
  },
  kickerRow: {
    display: 'flex',
    gap: 12,
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  kicker: {
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: 999,
    paddingInline: 12,
    paddingBlock: 6,
    backgroundColor: '#1d4ed8',
    color: '#ffffff',
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
  },
  kickerMuted: {
    fontSize: 14,
    color: '#48617c',
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
    maxWidth: '12ch',
  },
  summary: {
    margin: 0,
    marginBottom: 24,
    fontSize: 18,
    lineHeight: 1.7,
    color: '#334155',
    maxWidth: '65ch',
  },
  bullets: {
    margin: 0,
    paddingLeft: 20,
    display: 'grid',
    gap: 12,
    color: '#1e293b',
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
    color: '#475569',
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
    backgroundColor: 'rgba(255, 255, 255, 0.94)',
    boxShadow: '0 20px 60px rgba(15, 23, 42, 0.06)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(148, 163, 184, 0.2)',
  },
  linkCard: {
    textDecoration: 'none',
    color: 'inherit',
    transitionProperty: 'transform, box-shadow, border-color',
    transitionDuration: '180ms',
    transform: {
      default: 'translateY(0)',
      ':hover': 'translateY(-2px)',
    },
    borderColor: {
      default: 'rgba(148, 163, 184, 0.2)',
      ':hover': 'rgba(29, 78, 216, 0.45)',
    },
    boxShadow: {
      default: '0 20px 60px rgba(15, 23, 42, 0.06)',
      ':hover': '0 24px 80px rgba(29, 78, 216, 0.14)',
    },
  },
  cardEyebrow: {
    fontSize: 12,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: '#64748b',
    fontWeight: 700,
  },
  cardTitle: {
    margin: 0,
    fontSize: 20,
    lineHeight: 1.3,
  },
  cardCopy: {
    margin: 0,
    color: '#475569',
    lineHeight: 1.6,
    flexGrow: 1,
  },
  linkArrow: {
    fontWeight: 700,
    color: '#1d4ed8',
  },
});

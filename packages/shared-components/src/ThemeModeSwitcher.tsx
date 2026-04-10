import * as stylex from '@stylexjs/stylex';
import { THEME_OPTIONS, type ThemeMode } from '@repo/utils';
import { themeTokens } from './themeTokens.stylex';

type ThemeModeSwitcherProps = {
  label: string;
  mode: ThemeMode;
  onChange: (mode: ThemeMode) => void;
};

export function ThemeModeSwitcher({ label, mode, onChange }: ThemeModeSwitcherProps) {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <span {...stylex.props(styles.label)}>{label}</span>
      <div {...stylex.props(styles.group)} role="group" aria-label={`${label} theme mode`}>
        {THEME_OPTIONS.map((option) => {
          const active = option === mode;

          return (
            <button
              key={option}
              type="button"
              data-theme-mode={option}
              aria-pressed={active}
              onClick={() => onChange(option)}
              {...stylex.props(styles.button, active && styles.buttonActive)}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

const styles = stylex.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    alignItems: 'flex-end',
  },
  label: {
    fontSize: 12,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: themeTokens.textMuted,
    fontWeight: 700,
  },
  group: {
    display: 'inline-flex',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'flex-end',
  },
  button: {
    appearance: 'none',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: themeTokens.borderColor,
    borderRadius: 999,
    paddingInline: 14,
    paddingBlock: 8,
    fontSize: 14,
    fontWeight: 700,
    textTransform: 'capitalize',
    backgroundColor: {
      default: themeTokens.controlSurface,
      ':hover': themeTokens.controlSurfaceHover,
    },
    color: themeTokens.controlText,
    cursor: 'pointer',
    transitionProperty: 'background-color, color, border-color, transform',
    transitionDuration: '180ms',
    transform: {
      default: 'translateY(0)',
      ':hover': 'translateY(-1px)',
    },
  },
  buttonActive: {
    backgroundColor: themeTokens.controlActiveSurface,
    borderColor: themeTokens.controlActiveSurface,
    color: themeTokens.controlActiveText,
  },
});

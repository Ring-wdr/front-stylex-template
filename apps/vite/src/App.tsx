import { useEffect, useState } from 'react';
import * as stylex from '@stylexjs/stylex';
import { ThemePage } from './ThemePage';
import { ViteAboutPage } from './components/ViteAboutPage';

type RouteName = 'home' | 'about';

const styles = stylex.create({
  nav: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: 10,
    display: 'inline-flex',
    gap: '10px',
    padding: '8px',
    borderRadius: '999px',
    backgroundColor: 'rgba(15, 23, 42, 0.72)',
    backdropFilter: 'blur(10px)',
  },
  link: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '36px',
    padding: '0 14px',
    borderRadius: '999px',
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: 700,
    opacity: 0.82,
  },
  linkActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.18)',
    opacity: 1,
  },
});

function getRouteFromHash(): RouteName {
  if (typeof window === 'undefined') return 'home';
  return window.location.hash === '#/about' ? 'about' : 'home';
}

export default function App() {
  const [route, setRoute] = useState<RouteName>(getRouteFromHash);

  useEffect(() => {
    if (!window.location.hash) {
      window.location.hash = '#/';
    }

    const handleHashChange = () => {
      setRoute(getRouteFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
      <nav {...stylex.props(styles.nav)} aria-label="Vite pages">
        <a {...stylex.props(styles.link, route === 'home' && styles.linkActive)} href="#/">
          Home
        </a>
        <a {...stylex.props(styles.link, route === 'about' && styles.linkActive)} href="#/about">
          About
        </a>
      </nav>
      {route === 'about' ? <ViteAboutPage /> : <ThemePage />}
    </>
  );
}

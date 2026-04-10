import { createFileRoute } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/react-start';
import { getRequestHeader } from '@tanstack/react-start/server';
import { readThemeModeFromCookieHeader } from '@repo/utils';
import { TanStackAboutPage } from '../components/TanStackAboutPage';

const getInitialThemeMode = createServerFn({ method: 'GET' }).handler(async () => {
  return readThemeModeFromCookieHeader(getRequestHeader('cookie'));
});

export const Route = createFileRoute('/about')({
  loader: () => getInitialThemeMode(),
  component: AboutPage,
});

function AboutPage() {
  const initialMode = Route.useLoaderData();

  return <TanStackAboutPage initialMode={initialMode} />;
}

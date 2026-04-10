import { createFileRoute } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/react-start';
import { getRequestHeader } from '@tanstack/react-start/server';
import { readThemeModeFromCookieHeader } from '@repo/utils';
import { TanStackThemePage } from '../components/TanStackThemePage';

const getInitialThemeMode = createServerFn({ method: 'GET' }).handler(async () => {
  return readThemeModeFromCookieHeader(getRequestHeader('cookie'));
});

export const Route = createFileRoute('/')({
  loader: () => getInitialThemeMode(),
  component: IndexPage,
});

function IndexPage() {
  const initialMode = Route.useLoaderData();

  return <TanStackThemePage initialMode={initialMode} />;
}

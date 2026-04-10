import { cookies } from 'next/headers';
import { parseThemeMode, THEME_COOKIE_NAME } from '@repo/utils';
import { ThemeShowcase } from './ThemeShowcase';

export default async function Home() {
  const cookieStore = await cookies();
  const initialMode = parseThemeMode(cookieStore.get(THEME_COOKIE_NAME)?.value);

  return <ThemeShowcase initialMode={initialMode} />;
}

import { cookies } from 'next/headers';
import { parseThemeMode, THEME_COOKIE_NAME } from '@repo/utils';
import { AboutPanel } from './AboutPanel';

export default async function AboutPage() {
  const cookieStore = await cookies();
  const initialMode = parseThemeMode(cookieStore.get(THEME_COOKIE_NAME)?.value);

  return <AboutPanel initialMode={initialMode} />;
}

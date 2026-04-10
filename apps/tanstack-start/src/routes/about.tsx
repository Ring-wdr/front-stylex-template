import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: AboutPage,
});

function AboutPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        padding: '24px',
        background: 'linear-gradient(180deg, #f8fbff 0%, #eef4ff 100%)',
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: 720,
          padding: 32,
          borderRadius: 24,
          background: 'rgba(255,255,255,0.92)',
          boxShadow: '0 20px 60px rgba(15, 23, 42, 0.08)',
        }}
      >
        <p style={{ marginTop: 0, color: '#64748b', fontWeight: 700 }}>
          TanStack Start
        </p>
        <h1 style={{ marginTop: 0 }}>Shared packages stay framework-agnostic.</h1>
        <p style={{ lineHeight: 1.7, color: '#475569' }}>
          The home route renders the shared StyleX showcase component from the
          monorepo packages folder. That same package is also used by Next.js,
          Astro, and the plain Vite React app.
        </p>
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            marginTop: 16,
            padding: '10px 16px',
            borderRadius: 999,
            background: '#1d4ed8',
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 700,
          }}
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}

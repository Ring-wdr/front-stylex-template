import { createFileRoute } from '@tanstack/react-router';
import { FrameworkShowcase } from '@repo/shared-components';

export const Route = createFileRoute('/')({
  component: IndexPage,
});

function IndexPage() {
  return <FrameworkShowcase framework="tanstack-start" />;
}

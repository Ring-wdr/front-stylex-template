import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  transpilePackages: ['@repo/shared-components', '@repo/utils'],
};

export default nextConfig;

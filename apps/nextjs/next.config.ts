import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@repo/shared-components', '@repo/utils'],
};

export default nextConfig;

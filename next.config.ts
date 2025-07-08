import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';
import './src/libs/Env';

const baseConfig: NextConfig = {
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

// Enable bundle analyzer only if ANALYZE=true
const finalConfig = process.env.ANALYZE === 'true'
  ? withBundleAnalyzer({ enabled: true })(baseConfig)
  : baseConfig;

export default finalConfig;

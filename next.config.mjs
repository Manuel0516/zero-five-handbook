import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // Self-contained production server in .next/standalone — used by the Dockerfile.
  output: 'standalone',
};

export default withMDX(config);

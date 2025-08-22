/** @type {import('next').NextConfig} */
const isGhActions = process.env.GITHUB_ACTIONS === 'true';
const repoName = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split('/')[1]
  : '';

// If BASE_PATH is undefined -> default to /<repo> (project pages).
// If BASE_PATH is ''       -> no basePath (custom domain root).
// Else                     -> use '/<BASE_PATH>'.
const provided = process.env.BASE_PATH;
const computedBasePath = !isGhActions
  ? ''
  : (provided === undefined
      ? `/${repoName}`
      : (provided === '' ? '' : `/${provided.replace(/^\//, '')}`));

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  basePath: computedBasePath,
  assetPrefix: computedBasePath ? `${computedBasePath}/` : undefined,
  trailingSlash: true,
};

module.exports = nextConfig;

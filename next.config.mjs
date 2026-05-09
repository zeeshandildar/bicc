/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Remote Patterns
   * ---------------
   * This allows the website to display images from specific external websites.
   * If you use a new image host (like Imgur or your own CDN), you must add it here.
   */
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'ui-avatars.com' },
    ],
  },
};

export default nextConfig;

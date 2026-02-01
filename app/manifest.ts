import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Legend Media - Web & App Development Agency',
    short_name: 'Legend Media',
    description:
      'Award-winning web and mobile app development agency specializing in scalable digital solutions',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#10B981',
    icons: [
      {
        src: '/logo/leaf.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/logo/leaf.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo/leaf.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}

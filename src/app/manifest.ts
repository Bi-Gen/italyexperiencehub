import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Italy Experience Hub',
    short_name: 'ItalyHub',
    description: 'Il portale di riferimento per il turismo in Italia con guide complete ed esperienze esclusive',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2d8659',
    orientation: 'portrait',
    scope: '/',
    lang: 'it',
    icons: [
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
    categories: ['travel', 'tourism', 'lifestyle'],
    // screenshots: [
    //   {
    //     src: '/screenshot-wide.png',
    //     sizes: '1280x720',
    //     type: 'image/png',
    //     form_factor: 'wide',
    //   },
    //   {
    //     src: '/screenshot-narrow.png',
    //     sizes: '750x1334',
    //     type: 'image/png',
    //     form_factor: 'narrow',
    //   },
    // ],
  }
}
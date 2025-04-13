import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Configuración para manejo de imágenes externas
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/media/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        port: '',
        pathname: '/api/**',
      },
      // Add patterns for the remaining domains
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '/api/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    // Esta configuración evita advertencias con params en componentes cliente
    // pero lo hacemos de forma compatible con tipos de TS
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  // Este ajuste permite a Next.js manejar correctamente los subdominios
  async rewrites() {
    return [
      // Rewrite: comunidad.adriaestevez.com/* → /comunidad/*
      {
        source: '/:path*',
        destination: '/comunidad/:path*',
        has: [
          {
            type: 'host',
            value: 'comunidad.adriaestevez.com',
          },
        ],
      },
      // Redirect: comunidad.adriaestevez.com/comunidad* → /
      {
        source: '/comunidad',
        has: [
          {
            type: 'host',
            value: 'comunidad.adriaestevez.com',
          },
        ],
        destination: '/',
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
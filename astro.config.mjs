// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://unterm-schloss.de',
  integrations: [sitemap(), react()],
  
  // Performance-Optimierungen
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto', // Inline kritische CSS
    assetsPrefix: '/assets/', // CDN-ready
  },
  
  // Vite-Optimierungen für bessere Performance
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            // Vendor-Chunks für bessere Caching
            'vendor-react': ['react', 'react-dom'],
            'vendor-framer': ['framer-motion'],
            'vendor-lucide': ['lucide-react'],
          }
        }
      },
      // Chunk-Size-Warnings erhöhen
      chunkSizeWarningLimit: 1000,
      // Minification optimieren
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true, // Console.logs in Production entfernen
          drop_debugger: true,
        },
      },
    },
    // CSS-Optimierung
    css: {
      devSourcemap: false, // Sourcemaps nur in Development
    },
    // Dependency-Optimierung
    optimizeDeps: {
      include: ['react', 'react-dom', 'framer-motion'],
    },
  },
  
  // Image-Optimierung (Astro 5 hat Sharp integriert)
  image: {
    // WebP/AVIF Konvertierung aktivieren
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false, // Große Bilder erlauben
      }
    },
    // Responsive Bildgrößen
    domains: ['unterm-schloss.de'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unterm-schloss.de',
      }
    ],
  },
  
  // Compression und Caching
  compressHTML: true,
  
  // Experimental Features für bessere Performance (nur unterstützte Features)
  experimental: {
    // Nur Features verwenden, die in Astro 5 unterstützt werden
  },
  
  // Dev-Server Optimierungen
  devToolbar: {
    enabled: true,
  },
  
  // Output-Konfiguration
  output: 'static', // Static Generation für beste Performance
  
  // Security Headers
  security: {
    checkOrigin: true,
  },
});

/**
 * Bild-Optimierungs-Utilities für maximale Performance
 * Dieter Rams + Steve Jobs Prinzipien: Jedes Pixel zählt
 */

// Responsive Bildgrößen nach mathematischen Prinzipien
export const RESPONSIVE_SIZES = {
  // Mobile First (375px+)
  mobile: {
    width: 375,
    height: 250,
    quality: 85,
  },
  // Tablet (768px+)
  tablet: {
    width: 768,
    height: 512,
    quality: 90,
  },
  // Desktop (1024px+)
  desktop: {
    width: 1024,
    height: 683,
    quality: 95,
  },
  // Large Desktop (1920px+)
  large: {
    width: 1920,
    height: 1280,
    quality: 95,
  },
} as const;

// Hero-Bild spezielle Optimierung
export const HERO_OPTIMIZATION = {
  // Hero-Bild braucht höchste Qualität
  quality: 95,
  format: 'webp' as const,
  // Lazy Loading für Hero deaktiviert (Above-the-fold)
  loading: 'eager' as const,
  fetchPriority: 'high' as const,
  // Responsive Sizes für Hero
  sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw',
  // Alt-Text für SEO
  alt: 'Ferienwohnung Unterm Schloss - Außenansicht in der historischen Schloßstraße Hambach',
} as const;

// Gallery-Bilder Optimierung
export const GALLERY_OPTIMIZATION = {
  // Gallery-Bilder können komprimierter sein
  quality: 85,
  format: 'webp' as const,
  // Lazy Loading für Gallery aktiviert
  loading: 'lazy' as const,
  fetchPriority: 'low' as const,
  // Responsive Sizes für Gallery
  sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
} as const;

// Thumbnail-Optimierung
export const THUMBNAIL_OPTIMIZATION = {
  // Thumbnails sehr komprimiert
  quality: 75,
  format: 'webp' as const,
  width: 300,
  height: 200,
  loading: 'lazy' as const,
  fetchPriority: 'low' as const,
} as const;

/**
 * Generiert optimierte Bild-URLs mit WebP/AVIF Support
 */
export function getOptimizedImageUrl(
  src: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'avif' | 'jpg';
    loading?: 'lazy' | 'eager';
    fetchPriority?: 'high' | 'low' | 'auto';
  } = {}
): string {
  const {
    width = 1024,
    height = 683,
    quality = 90,
    format = 'webp',
    loading = 'lazy',
    fetchPriority = 'auto',
  } = options;

  // Astro Image Service URL generieren
  const baseUrl = src.startsWith('/') ? src : `/${src}`;
  const params = new URLSearchParams({
    w: width.toString(),
    h: height.toString(),
    q: quality.toString(),
    f: format,
  });

  return `${baseUrl}?${params.toString()}`;
}

/**
 * Generiert responsive srcSet für optimale Performance
 */
export function getResponsiveSrcSet(src: string): string {
  const sizes = [
    { width: 375, quality: 85 },
    { width: 768, quality: 90 },
    { width: 1024, quality: 95 },
    { width: 1920, quality: 95 },
  ];

  return sizes
    .map(({ width, quality }) => {
      const url = getOptimizedImageUrl(src, { width, quality, format: 'webp' });
      return `${url} ${width}w`;
    })
    .join(', ');
}

/**
 * Generiert AVIF srcSet für moderne Browser
 */
export function getAvifSrcSet(src: string): string {
  const sizes = [
    { width: 375, quality: 85 },
    { width: 768, quality: 90 },
    { width: 1024, quality: 95 },
    { width: 1920, quality: 95 },
  ];

  return sizes
    .map(({ width, quality }) => {
      const url = getOptimizedImageUrl(src, { width, quality, format: 'avif' });
      return `${url} ${width}w`;
    })
    .join(', ');
}

/**
 * Bild-Optimierung für Hero-Section
 */
export function getHeroImageProps(src: string) {
  return {
    src: getOptimizedImageUrl(src, HERO_OPTIMIZATION),
    srcSet: getResponsiveSrcSet(src),
    sizes: HERO_OPTIMIZATION.sizes,
    loading: HERO_OPTIMIZATION.loading,
    fetchPriority: HERO_OPTIMIZATION.fetchPriority,
    alt: HERO_OPTIMIZATION.alt,
    width: 1920,
    height: 1280,
  };
}

/**
 * Bild-Optimierung für Gallery
 */
export function getGalleryImageProps(src: string, alt: string) {
  return {
    src: getOptimizedImageUrl(src, GALLERY_OPTIMIZATION),
    srcSet: getResponsiveSrcSet(src),
    sizes: GALLERY_OPTIMIZATION.sizes,
    loading: GALLERY_OPTIMIZATION.loading,
    fetchPriority: GALLERY_OPTIMIZATION.fetchPriority,
    alt,
    width: 1024,
    height: 683,
  };
}

/**
 * Bild-Optimierung für Thumbnails
 */
export function getThumbnailImageProps(src: string, alt: string) {
  return {
    src: getOptimizedImageUrl(src, THUMBNAIL_OPTIMIZATION),
    loading: THUMBNAIL_OPTIMIZATION.loading,
    fetchPriority: THUMBNAIL_OPTIMIZATION.fetchPriority,
    alt,
    width: THUMBNAIL_OPTIMIZATION.width,
    height: THUMBNAIL_OPTIMIZATION.height,
  };
}

/**
 * Performance-Metriken für Bilder
 */
export const IMAGE_PERFORMANCE_METRICS = {
  // Ziel-Metriken nach Rams + Jobs Prinzipien
  targetLCP: 1.5, // Largest Contentful Paint < 1.5s
  targetCLS: 0.1, // Cumulative Layout Shift < 0.1
  targetFID: 100, // First Input Delay < 100ms
  
  // Bild-spezifische Metriken
  maxImageSize: 200, // KB
  maxHeroSize: 500, // KB für Hero-Bilder
  maxThumbnailSize: 50, // KB für Thumbnails
  
  // Format-Prioritäten
  formatPriority: ['avif', 'webp', 'jpg'] as const,
  
  // Lazy Loading Threshold
  lazyThreshold: 0.1, // 10% viewport
} as const;

/**
 * Performance-Monitoring für Astro-Website
 * Dieter Rams + Steve Jobs Prinzipien: Jedes Pixel zählt
 */

// Performance-Metriken nach Web Vitals
export interface PerformanceMetrics {
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  fcp: number; // First Contentful Paint
  ttfb: number; // Time to First Byte
}

// Ziel-Metriken nach Rams + Jobs Prinzipien
export const TARGET_METRICS: PerformanceMetrics = {
  lcp: 1.5, // < 1.5s für perfekte UX
  fid: 100, // < 100ms für responsive Interaktion
  cls: 0.1, // < 0.1 für stabile Layouts
  fcp: 1.0, // < 1.0s für schnelle Wahrnehmung
  ttfb: 200, // < 200ms für schnelle Server-Response
};

// Performance-Klassen
export const PERFORMANCE_CLASSES = {
  EXCELLENT: 'excellent',
  GOOD: 'good',
  NEEDS_IMPROVEMENT: 'needs-improvement',
  POOR: 'poor',
} as const;

/**
 * Bewertet Performance-Metriken nach Rams + Jobs Standards
 */
export function evaluatePerformance(metrics: PerformanceMetrics): {
  score: number;
  grade: string;
  recommendations: string[];
} {
  let score = 0;
  const recommendations: string[] = [];

  // LCP Bewertung (40% Gewichtung)
  if (metrics.lcp <= 1.5) {
    score += 40;
  } else if (metrics.lcp <= 2.5) {
    score += 30;
    recommendations.push('LCP optimieren: Bilder komprimieren, WebP/AVIF verwenden');
  } else {
    score += 10;
    recommendations.push('LCP kritisch: Hero-Bild optimieren, Lazy-Loading implementieren');
  }

  // FID Bewertung (20% Gewichtung)
  if (metrics.fid <= 100) {
    score += 20;
  } else if (metrics.fid <= 300) {
    score += 15;
    recommendations.push('FID optimieren: JavaScript-Bundle reduzieren');
  } else {
    score += 5;
    recommendations.push('FID kritisch: Drittanbieter-Scripts optimieren');
  }

  // CLS Bewertung (20% Gewichtung)
  if (metrics.cls <= 0.1) {
    score += 20;
  } else if (metrics.cls <= 0.25) {
    score += 15;
    recommendations.push('CLS optimieren: Font-Loading verbessern');
  } else {
    score += 5;
    recommendations.push('CLS kritisch: Layout-Shifts eliminieren');
  }

  // FCP Bewertung (10% Gewichtung)
  if (metrics.fcp <= 1.0) {
    score += 10;
  } else if (metrics.fcp <= 1.8) {
    score += 8;
    recommendations.push('FCP optimieren: Kritische CSS inlinen');
  } else {
    score += 3;
    recommendations.push('FCP kritisch: Render-Blocking-Ressourcen reduzieren');
  }

  // TTFB Bewertung (10% Gewichtung)
  if (metrics.ttfb <= 200) {
    score += 10;
  } else if (metrics.ttfb <= 500) {
    score += 8;
    recommendations.push('TTFB optimieren: Server-Response verbessern');
  } else {
    score += 3;
    recommendations.push('TTFB kritisch: CDN oder Server-Optimierung');
  }

  // Grade bestimmen
  let grade: string;
  if (score >= 90) {
    grade = PERFORMANCE_CLASSES.EXCELLENT;
  } else if (score >= 70) {
    grade = PERFORMANCE_CLASSES.GOOD;
  } else if (score >= 50) {
    grade = PERFORMANCE_CLASSES.NEEDS_IMPROVEMENT;
  } else {
    grade = PERFORMANCE_CLASSES.POOR;
  }

  return { score, grade, recommendations };
}

/**
 * Bild-Performance-Analyse
 */
export function analyzeImagePerformance(images: {
  src: string;
  size: number;
  format: string;
  loading: 'lazy' | 'eager';
}[]): {
  totalSize: number;
  optimizedSize: number;
  savings: number;
  recommendations: string[];
} {
  const totalSize = images.reduce((sum, img) => sum + img.size, 0);
  const recommendations: string[] = [];
  
  // WebP/AVIF Einsparungen berechnen
  const webpSavings = totalSize * 0.25; // 25% Einsparung mit WebP
  const avifSavings = totalSize * 0.35; // 35% Einsparung mit AVIF
  
  const optimizedSize = totalSize - avifSavings;
  const savings = avifSavings;

  // Empfehlungen generieren
  if (totalSize > 1000) { // > 1MB
    recommendations.push('Bild-Gesamtgröße kritisch: Bilder komprimieren');
  }
  
  const unoptimizedImages = images.filter(img => img.format === 'jpg');
  if (unoptimizedImages.length > 0) {
    recommendations.push(`${unoptimizedImages.length} Bilder zu WebP/AVIF konvertieren`);
  }
  
  const nonLazyImages = images.filter(img => img.loading === 'eager' && !img.src.includes('hero'));
  if (nonLazyImages.length > 0) {
    recommendations.push(`${nonLazyImages.length} Bilder auf Lazy-Loading umstellen`);
  }

  return {
    totalSize,
    optimizedSize,
    savings,
    recommendations,
  };
}

/**
 * Bundle-Performance-Analyse
 */
export function analyzeBundlePerformance(bundles: {
  name: string;
  size: number;
  gzipSize: number;
}[]): {
  totalSize: number;
  totalGzipSize: number;
  largestBundle: string;
  recommendations: string[];
} {
  const totalSize = bundles.reduce((sum, bundle) => sum + bundle.size, 0);
  const totalGzipSize = bundles.reduce((sum, bundle) => sum + bundle.gzipSize, 0);
  const largestBundle = bundles.reduce((largest, bundle) => 
    bundle.size > largest.size ? bundle : largest
  );
  
  const recommendations: string[] = [];

  // Bundle-Größe bewerten
  if (totalSize > 500000) { // > 500KB
    recommendations.push('Bundle-Größe kritisch: Code-Splitting implementieren');
  }
  
  if (largestBundle.size > 200000) { // > 200KB
    recommendations.push(`Größtes Bundle "${largestBundle.name}" aufteilen`);
  }
  
  // Gzip-Effizienz bewerten
  const gzipRatio = totalGzipSize / totalSize;
  if (gzipRatio > 0.4) {
    recommendations.push('Gzip-Kompression optimieren: Wiederholte Strings reduzieren');
  }

  return {
    totalSize,
    totalGzipSize,
    largestBundle: largestBundle.name,
    recommendations,
  };
}

/**
 * Font-Performance-Analyse
 */
export function analyzeFontPerformance(fonts: {
  family: string;
  weight: string;
  size: number;
  loading: 'blocking' | 'swap' | 'optional';
}[]): {
  totalSize: number;
  blockingFonts: number;
  recommendations: string[];
} {
  const totalSize = fonts.reduce((sum, font) => sum + font.size, 0);
  const blockingFonts = fonts.filter(font => font.loading === 'blocking').length;
  
  const recommendations: string[] = [];

  if (blockingFonts > 0) {
    recommendations.push(`${blockingFonts} Fonts auf display=swap umstellen`);
  }
  
  if (totalSize > 100000) { // > 100KB
    recommendations.push('Font-Größe optimieren: Unnötige Font-Weights entfernen');
  }
  
  const duplicateFonts = fonts.filter((font, index) => 
    fonts.findIndex(f => f.family === font.family && f.weight === font.weight) !== index
  );
  
  if (duplicateFonts.length > 0) {
    recommendations.push(`${duplicateFonts.length} doppelte Fonts entfernen`);
  }

  return {
    totalSize,
    blockingFonts,
    recommendations,
  };
}

/**
 * Generiert Performance-Report
 */
export function generatePerformanceReport(data: {
  metrics: PerformanceMetrics;
  images: Array<{ src: string; size: number; format: string; loading: string }>;
  bundles: Array<{ name: string; size: number; gzipSize: number }>;
  fonts: Array<{ family: string; weight: string; size: number; loading: string }>;
}): {
  overallScore: number;
  overallGrade: string;
  criticalIssues: string[];
  recommendations: string[];
  impact: 'high' | 'medium' | 'low';
} {
  const { metrics, images, bundles, fonts } = data;
  
  // Performance bewerten
  const performance = evaluatePerformance(metrics);
  const imageAnalysis = analyzeImagePerformance(images);
  const bundleAnalysis = analyzeBundlePerformance(bundles);
  const fontAnalysis = analyzeFontPerformance(fonts);
  
  // Kritische Issues identifizieren
  const criticalIssues: string[] = [];
  
  if (metrics.lcp > 2.5) {
    criticalIssues.push('LCP kritisch: Hero-Bild sofort optimieren');
  }
  
  if (imageAnalysis.totalSize > 2000000) { // > 2MB
    criticalIssues.push('Bild-Gesamtgröße kritisch: Alle Bilder komprimieren');
  }
  
  if (bundleAnalysis.totalSize > 1000000) { // > 1MB
    criticalIssues.push('Bundle-Größe kritisch: JavaScript reduzieren');
  }
  
  // Impact bewerten
  let impact: 'high' | 'medium' | 'low' = 'low';
  if (criticalIssues.length > 0 || performance.score < 50) {
    impact = 'high';
  } else if (performance.score < 70) {
    impact = 'medium';
  }
  
  // Alle Empfehlungen sammeln
  const allRecommendations = [
    ...performance.recommendations,
    ...imageAnalysis.recommendations,
    ...bundleAnalysis.recommendations,
    ...fontAnalysis.recommendations,
  ];

  return {
    overallScore: performance.score,
    overallGrade: performance.grade,
    criticalIssues,
    recommendations: allRecommendations,
    impact,
  };
}

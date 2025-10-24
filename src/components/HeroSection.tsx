'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// TypeScript Interfaces für perfekte Typisierung
interface HeroSectionProps {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  ctaText: string;
  ctaHref: string;
  hasRealReviews?: boolean;
  reviewCount?: number;
  reviewRating?: number;
}

// Animation-Varianten für natürlichen Flow
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Ken Burns Effect - subtil und ehrlich
const kenBurnsVariants = {
  initial: { scale: 1 },
  animate: { 
    scale: 1.05,
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
};

// Scroll Indicator Animation
const scrollIndicatorVariants = {
  animate: {
    y: [0, 12, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
};

const scrollDotVariants = {
  animate: {
    opacity: [1, 0.3, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
};

export default function HeroSection({
  title,
  subtitle,
  image,
  imageAlt,
  ctaText,
  ctaHref,
  hasRealReviews = false,
  reviewCount = 0,
  reviewRating = 0
}: HeroSectionProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Accessibility: Reduced Motion respektieren
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <section 
      className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Background Image Layer - GPU-optimiert */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
          variants={prefersReducedMotion ? {} : kenBurnsVariants}
          initial="initial"
          animate="animate"
          style={{ willChange: 'transform' }}
          loading="eager"
          fetchPriority="high"
        />
        {/* Ehrliches Overlay - nur für Lesbarkeit */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Content Layer - Perfekte Zentrierung */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* 1. HEADLINE - Maximum Impact */}
          <motion.h1 
            variants={fadeInUp}
            className="font-playfair text-white mb-6
                       text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                       leading-[1.1] tracking-tight
                       drop-shadow-2xl
                       font-normal
                       letter-spacing-[-0.02em]"
            style={{ 
              textShadow: '0 4px 20px rgba(0,0,0,0.5)',
              willChange: 'transform, opacity'
            }}
          >
            {title}
          </motion.h1>

          {/* 2. SUBHEADLINE - Fibonacci Spacing */}
          <motion.p 
            variants={fadeInUp}
            className="text-white/95 mb-10
                       text-lg sm:text-xl md:text-2xl
                       font-light tracking-wide leading-relaxed
                       max-w-3xl mx-auto
                       drop-shadow-lg
                       letter-spacing-[0.02em]"
            style={{ willChange: 'transform, opacity' }}
          >
            {subtitle}
          </motion.p>

          {/* 3. TRUST-SIGNAL - Nur bei echten Bewertungen */}
          {hasRealReviews && reviewCount > 0 && (
            <motion.div 
              variants={fadeInUp}
              className="flex items-center justify-center gap-2 mb-12
                         text-white/90 text-base
                         drop-shadow-md"
            >
              <span className="flex items-center gap-1.5">
                <span className="text-yellow-400 text-lg">★★★★★</span>
                <span className="font-medium">{reviewRating}</span>
                <span className="text-white/70">·</span>
                <span className="text-white/80">{reviewCount} Bewertungen</span>
              </span>
            </motion.div>
          )}

          {/* 4. CTA-BUTTON - Pixel-perfect */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center gap-4"
          >
            {/* Primary CTA - Rams-Prinzip: Klar und funktional */}
            <motion.button 
              className="group relative
                         bg-brown-700 hover:bg-brown-800
                         text-white font-medium
                         px-10 py-4
                         rounded-full
                         text-lg
                         transition-all duration-300
                         shadow-2xl hover:shadow-3xl
                         hover:scale-105
                         active:scale-100
                         focus:outline-none focus:ring-4 focus:ring-brown-500/50
                         min-h-[44px] min-w-[44px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.0 }}
              style={{ willChange: 'transform' }}
              aria-label={`${ctaText} - Öffnet Buchungsanfrage`}
              onClick={() => window.location.href = ctaHref}
            >
              <span className="relative z-10 letter-spacing-[0.01em]">
                {ctaText}
              </span>
              
              {/* Subtle hover glow - Jobs-Prinzip: Details matter */}
              <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
            </motion.button>

            {/* Badge unter Button - 16px Abstand (Fibonacci) */}
            <motion.p 
              className="text-white/85 text-sm font-light tracking-wide
                         flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <span className="text-green-400 text-base">✓</span>
              Antwort innerhalb von 24 Stunden
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Jobs-Prinzip: Perfekte Animation */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        variants={prefersReducedMotion ? {} : scrollIndicatorVariants}
        initial="initial"
        animate="animate"
        aria-label="Scroll nach unten"
      >
        <div className="w-7 h-11 border-2 border-white/70 rounded-full flex items-start justify-center pt-2">
          <motion.div 
            className="w-1.5 h-1.5 bg-white rounded-full"
            variants={prefersReducedMotion ? {} : scrollDotVariants}
            initial="initial"
            animate="animate"
          />
        </div>
      </motion.div>
    </section>
  );
}

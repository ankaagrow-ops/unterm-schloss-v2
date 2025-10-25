# PROJECT BRIEF - Ferienwohnung Hambach

> **Purpose:** Client-specific context for Ferienwohnung Hambach website  
> **Works with:** CURSOR_GLOBAL.md (universal standards)  
> **Status:** Active  
> **Last Updated:** 2025-01-27

---

## 🎯 QUICK REFERENCE

```
┌─────────────────────────────────────────────────────────┐
│ PROJECT ESSENTIALS                                      │
├─────────────────────────────────────────────────────────┤
│ Client:        Eva Dirion                               │
│ Website:       unterm-schloss.de (target)              │
│ Industry:      Vacation Rental / Hospitality           │
│ Launch Date:   Q1 2025                                 │
│ Primary Goal:  Generate 20+ qualified bookings/month   │
├─────────────────────────────────────────────────────────┤
│ Tech Stack:    Astro 5, React, Tailwind CSS           │
│ Hosting:       Vercel                                   │
│ CMS:           None (Static Site)                      │
│ Repository:    GitHub (private)                         │
└─────────────────────────────────────────────────────────┘
```

---

## 🏢 PART 1: BUSINESS CONTEXT

### Company Overview

```
Company Name: Unterm Schloss - Ferienwohnung Hambach
Trading Name: Unterm Schloss
Founded: 2024
Location: Hambach an der Weinstraße, Rheinland-Pfalz, Deutschland

Business Type:
[ ] E-Commerce
[ ] Service Provider
[ ] SaaS
[ ] Portfolio/Agency
[ ] Blog/Content Site
[x] Vacation Rental
[ ] Restaurant/Hospitality
[ ] Other: [Specify]

Business Model:
[ ] B2C (Business to Consumer) ✓
[ ] B2B (Business to Business)
[ ] B2B2C (Business to Business to Consumer)
[ ] Marketplace
[ ] Subscription
[ ] Other: [Specify]

Company Size:
[x] Solo Entrepreneur
[ ] 2-10 employees
[ ] 11-50 employees
[ ] 51-200 employees
[ ] 200+ employees
```

---

### Business Goals

```
PRIMARY GOAL (the #1 thing this website must achieve):
"Generate 20+ qualified booking inquiries per month"

SECONDARY GOALS (ranked by priority):
1. Establish premium positioning in Pfalz vacation rental market
2. Showcase authentic Pfälzer Weinkultur experience
3. Build direct booking relationships (avoid platform fees)
4. Create memorable brand experience for guests

SUCCESS METRICS:
- Conversion rate: 3%+ (visitors to inquiries)
- Avg. session duration: 2+ minutes
- Bounce rate: <40%
- Mobile traffic: 65%+
- Direct bookings: 80%+ (vs. Booking.com)

TIMELINE:
- Launch: Q1 2025
- First Review: 30 days after launch
- Optimization Phase: Q2 2025
```

---

### Target Audience

```
PRIMARY AUDIENCE:
Demographics:
- Age: 35-65 Jahre
- Gender: 60% Female, 40% Male
- Income: €50k-100k/year
- Location: Deutschland (besonders Rheinland-Pfalz, Hessen, Baden-Württemberg)
- Education: University degree
- Occupation: Professionals, managers, retirees

Psychographics:
- Values: Authentizität, Qualität, Nachhaltigkeit, Regionalität
- Interests: Weintourismus, Wandern, Kultur, Geschichte, Entspannung
- Pain Points: Schwierigkeit authentische lokale Erlebnisse zu finden
- Motivations: Entspannung, Flucht aus dem Stadtleben, kulturelle Bereicherung

Tech Savviness:
[ ] Low (needs very simple, obvious UI)
[x] Medium (comfortable with standard web interactions)
[ ] High (expects modern, sophisticated UX)

Device Usage:
- Mobile: 65%
- Desktop: 30%
- Tablet: 5%

SECONDARY AUDIENCE:
- Internationale Weintouristen (Frankreich, Belgien, Niederlande)
- Paare für romantische Wochenenden
- Familien mit Kindern (Schulferien)
```

---

### Unique Selling Propositions (USPs)

```
What makes this business/product/service unique?

USP #1: Historisches Fachwerkhaus direkt am Hambacher Schloss
Why it matters: Authentische Geschichtserfahrung in der Wiege der Demokratie
Proof point: 18. Jahrhundert Bauwerk, 5 Min. Fußweg zum Schloss

USP #2: Persönliche Betreuung durch Eva Dirion
Why it matters: Individuelle Empfehlungen, lokale Insider-Tipps
Proof point: Direkter Kontakt, persönliche Begrüßung, lokale Expertise

USP #3: Authentische Pfälzer Weinkultur erleben
Why it matters: Echte Weingüter-Besuche, keine touristischen Fallen
Proof point: Direkte Weingüter-Kontakte, private Verkostungen

Competitive Advantages:
- Einzige Ferienwohnung direkt am Hambacher Schloss
- Persönliche Gastgeberin mit lokaler Expertise
- Historisches Ambiente mit modernem Komfort
- Direkte Weingüter-Kontakte ohne Vermittler
```

---

## 🎨 PART 2: DESIGN SYSTEM

### Brand Identity

```
BRAND PERSONALITY:
- Authentisch (nicht künstlich)
- Warm (einladend, gemütlich)
- Historisch (traditionell, kulturell)
- Persönlich (individuell, menschlich)

BRAND VALUES:
- Authentizität über Perfektion
- Nachhaltigkeit über Schnelligkeit
- Qualität über Quantität
- Persönlichkeit über Standardisierung

TONE OF VOICE:
- Warm und einladend
- Persönlich und authentisch
- Informativ aber nicht belehrend
- Vertrauensvoll und professionell
```

---

### Color Palette

```
PRIMARY COLORS:
- Wine Red: #8b1538 (Hauptfarbe - Pfälzer Wein)
- Warm Brown: #3d2817 (Historisches Holz)
- Accent Gold: #d4af37 (Luxus, Premium)

SECONDARY COLORS:
- Light Gray: #fafaf9 (Hintergrund)
- Dark Gray: #1c1917 (Text)
- Warm Beige: #8b7355 (Akzente)

USAGE:
- Wine Red: CTAs, Headlines, wichtige Elemente
- Warm Brown: Text, Navigation, sekundäre Elemente
- Accent Gold: Highlights, Premium-Features
- Light Gray: Hintergründe, Cards
```

---

### Typography

```
HEADING FONT:
- Family: Playfair Display
- Weights: 400 (Regular)
- Source: @fontsource/playfair-display
- Fallback: "Times New Roman", serif

BODY FONT:
- Family: DM Sans
- Weights: 300 (Light), 400 (Regular), 500 (Medium)
- Source: @fontsource/dm-sans
- Fallback: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Typography Scale:
- H1: 40px mobile → 64px desktop
- H2: 32px mobile → 48px desktop
- H3: 24px mobile → 32px desktop
- H4: 20px mobile → 24px desktop
- Body: 16px mobile → 18px desktop
- Small: 14px all devices

Line Heights:
- Headings: 1.2 (tight)
- Body: 1.6 (comfortable)
- Small: 1.5

Letter Spacing:
- Headings: -0.02em (tighter)
- Body: normal
- Buttons/CTAs: 0.02em (wider)
```

---

### Spacing System

```
Base Unit: 8px
Scale: 8, 16, 24, 32, 48, 64, 96, 128

Section Spacing:
- Mobile: 48px vertical
- Tablet: 64px vertical
- Desktop: 80-128px vertical

Container:
- Max Width: 1200px
- Padding: 16px mobile, 32px desktop
```

---

### Imagery Style

```
Photography Style:
- Natural light, warm tones, lifestyle-focused
- Authentic, not overly staged
- Show people enjoying the experience
- Historic architecture with modern comfort
- Local wine culture and activities

Photography Don'ts:
- No stock photos with watermarks
- No generic vacation imagery
- No overly filtered/edited photos
- No corporate-style photography

Image Requirements:
- High resolution (minimum 1920px width)
- WebP format for performance
- Alt tags in German
- Responsive sizes: 320w, 640w, 1024w, 1920w
```

---

## 🏠 PART 3: CONTENT STRATEGY

### Key Messages

```
PRIMARY MESSAGE:
"Historisches Wohnen in der Wiege der Demokratie"

SECONDARY MESSAGES:
1. "Authentische Pfälzer Weinkultur erleben"
2. "Persönliche Betreuung durch lokale Gastgeberin"
3. "Moderner Komfort in historischem Ambiente"

EMOTIONAL BENEFITS:
- Entspannung und Erholung
- Kulturelle Bereicherung
- Authentische lokale Erfahrungen
- Persönliche Aufmerksamkeit
```

---

### Content Sections

```
1. HERO SECTION
   - Headline: "Historisches Wohnen in der Wiege der Demokratie"
   - Subline: "Charmante Ferienwohnung in Hambach – Wo Geschichte auf Gemütlichkeit trifft"
   - CTA: "Jetzt anfragen"

2. STORY SECTION
   - Geschichte des Hauses
   - Persönliche Note von Eva
   - Authentizität und Tradition

3. FEATURES SECTION
   - Ausstattung (Fußbodenheizung, Holzofen, etc.)
   - Moderne Technik (WLAN, Smart TV)
   - Historische Details

4. LOCATION SECTION
   - Hambacher Schloss (5 Min. Fußweg)
   - Weingüter in der Nähe
   - Wandermöglichkeiten

5. ACTIVITIES SECTION
   - Weintourismus
   - Wandern im Pfälzer Wald
   - Kulturelle Sehenswürdigkeiten

6. TESTIMONIALS SECTION
   - Gästebewertungen
   - Persönliche Empfehlungen
   - Authentische Erfahrungen

7. CONTACT SECTION
   - Direkter Kontakt zu Eva
   - Buchungsanfrage
   - Persönliche Beratung
```

---

## 🎯 PART 4: CONVERSION STRATEGY

### Primary Conversion Path

```
1. LANDING (Hero Section)
   - Emotional Hook: "Historisches Wohnen"
   - Clear Value Prop: "Direkt am Hambacher Schloss"
   - Primary CTA: "Jetzt anfragen"

2. INTEREST (Story + Features)
   - Build Trust: Persönliche Geschichte
   - Show Value: Ausstattung und Lage
   - Social Proof: Testimonials

3. CONSIDERATION (Location + Activities)
   - Local Expertise: Weingüter, Wandern
   - Unique Experience: Authentische Pfalz
   - Scarcity: "Nur 1 Ferienwohnung verfügbar"

4. CONVERSION (Contact Form)
   - Simple Form: Name, Email, Daten, Nachricht
   - Trust Signals: "Antwort innerhalb 24h"
   - Clear Next Steps: "Eva meldet sich persönlich"
```

---

### Trust Signals

```
SOCIAL PROOF:
- Gästebewertungen (falls vorhanden)
- Persönliche Empfehlungen
- Lokale Expertise von Eva

AUTHORITY:
- Direkte Lage am Hambacher Schloss
- Historisches Fachwerkhaus (18. Jh.)
- Persönliche Gastgeberin

SCARCITY:
- Nur 1 Ferienwohnung verfügbar
- Begrenzte Verfügbarkeit
- Exklusive Lage

GUARANTEES:
- Persönliche Antwort innerhalb 24h
- Direkter Kontakt zu Eva
- Lokale Insider-Tipps inklusive
```

---

## 📱 PART 5: TECHNICAL REQUIREMENTS

### Performance Targets

```
CORE WEB VITALS:
- LCP (Largest Contentful Paint): <2.5s Mobile, <1.5s Desktop
- CLS (Cumulative Layout Shift): <0.1
- INP (Interaction to Next Paint): <200ms
- FCP (First Contentful Paint): <1.8s

BUNDLE SIZES:
- JavaScript: <150KB (gzipped)
- CSS: <120KB (gzipped)
- Images: <350KB Hero, <200KB Content

LIGHTHOUSE SCORES:
- Performance: ≥90
- Accessibility: ≥95
- Best Practices: ≥95
- SEO: ≥95
```

---

### SEO Strategy

```
PRIMARY KEYWORDS:
- "Ferienwohnung Hambach"
- "Ferienwohnung Pfalz"
- "Hambacher Schloss Unterkunft"
- "Weinstraße Ferienwohnung"

SECONDARY KEYWORDS:
- "Pfalz Urlaub"
- "Weintourismus Pfalz"
- "Hambach an der Weinstraße"
- "Historische Ferienwohnung"

LOCAL SEO:
- Google My Business Optimierung
- Lokale Verzeichnisse
- Schema.org Markup (LodgingBusiness)
- Lokale Backlinks
```

---

### Accessibility Requirements

```
WCAG 2.1 AA COMPLIANCE:
- Color Contrast: ≥4.5:1 (Text), ≥3:1 (UI)
- Keyboard Navigation: Vollständig funktional
- Screen Reader: Optimiert für NVDA/VoiceOver
- Focus States: Sichtbar und konsistent
- Alt Tags: Für alle Bilder
- Semantic HTML: Korrekte Struktur

TESTING:
- Browser: Chrome, Safari, Firefox
- Devices: iPhone, Android, iPad
- Screen Readers: VoiceOver, NVDA
- Keyboard-only Navigation
```

---

## 🚀 PART 6: SUCCESS METRICS

### Launch Metrics (First 30 Days)

```
TRAFFIC:
- Unique Visitors: 500+
- Page Views: 1,500+
- Avg. Session Duration: 2+ minutes
- Bounce Rate: <40%

CONVERSIONS:
- Contact Form Submissions: 20+
- Conversion Rate: 3%+
- Direct Bookings: 80%+

TECHNICAL:
- Lighthouse Score: ≥90 all metrics
- Core Web Vitals: All green
- Mobile Performance: <2.5s LCP
- Accessibility: WCAG 2.1 AA compliant
```

---

### Long-term Goals (6 Months)

```
BUSINESS:
- Monthly Bookings: 20+ qualified inquiries
- Revenue Growth: 30%+ vs. previous year
- Customer Satisfaction: 4.8+ stars
- Repeat Bookings: 40%+

TECHNICAL:
- Search Rankings: Top 3 for primary keywords
- Organic Traffic: 70%+ of total traffic
- Mobile Traffic: 65%+
- Page Speed: <2s average load time
```

---

## 📋 PART 7: PROJECT CHECKLIST

### Pre-Development

```
[ ] Project Brief completed and approved
[ ] Design System defined
[ ] Content Strategy planned
[ ] Technical requirements documented
[ ] Success metrics defined
[ ] Timeline established
```

### Development Phase

```
[ ] Astro 5 setup with TypeScript
[ ] Tailwind CSS configuration
[ ] Component architecture planned
[ ] Image optimization system
[ ] Font loading optimization
[ ] Performance monitoring
```

### Pre-Launch

```
[ ] All pages built and tested
[ ] Performance audit completed
[ ] Accessibility testing done
[ ] SEO optimization implemented
[ ] Content review completed
[ ] Mobile responsiveness verified
```

### Post-Launch

```
[ ] Analytics tracking verified
[ ] Search Console setup
[ ] Google My Business optimized
[ ] Social media integration
[ ] Monitoring systems active
[ ] Success metrics tracking
```

---

## 🎯 CONCLUSION

This Project Brief provides the complete context for building the Ferienwohnung Hambach website. Combined with CURSOR_GLOBAL.md, it ensures:

- **Clear Business Goals**: 20+ bookings/month
- **Defined Target Audience**: 35-65 year old wine enthusiasts
- **Strong USPs**: Historic location, personal service, authentic experience
- **Performance Standards**: <2.5s LCP, ≥90 Lighthouse scores
- **Conversion Strategy**: Emotional journey from interest to booking

**Next Steps:**
1. Review and approve this Project Brief
2. Begin development with CURSOR_GLOBAL.md standards
3. Implement performance-first approach
4. Focus on authentic, personal user experience

---

**Fill this out completely before starting development. Share with Cursor alongside CURSOR_GLOBAL.md for optimal AI-assisted development.**

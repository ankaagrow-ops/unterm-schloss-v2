# Cursor Instructions V2 - Unified Workflow System

> **Letzte Aktualisierung:** 2025-10-25  
> **Projekt:** Unterm Schloss - Premium Vacation Rental Website  
> **Mission:** 100% Potenzial ausschöpfen durch einheitlichen, zero-waste Workflow

---

## 📌 EXECUTIVE SUMMARY (30-Sekunden-Überblick)

```
┌─────────────────────────────────────────────────────────────┐
│ PROJEKT: Unterm Schloss Ferienwohnung Website              │
├─────────────────────────────────────────────────────────────┤
│ Stack:    Astro 5 + React Islands + Tailwind 4             │
│ Repo:     /Users/jkwak/Cursor Work 2/unterm-schloss-clean  │
│ Hosting:  Vercel (geplant)                                  │
│ Status:   Development / Pre-Launch                          │
├─────────────────────────────────────────────────────────────┤
│ Design:   Dieter Rams × Steve Jobs + Framer-Inspiration    │
│ Tone:     Quiet Luxury, warm, vertrauensvoll               │
│ Target:   Direct bookings für Ferienwohnung Hambach        │
├─────────────────────────────────────────────────────────────┤
│ Performance Budget:                                         │
│ • LCP:  <2.5s      • JS:  <150KB    • CSS: <120KB         │
│ • Hero: ≤350KB     • Lighthouse: ≥90 (all metrics)         │
├─────────────────────────────────────────────────────────────┤
│ SEO Focus:                                                  │
│ • Primary:    "Ferienwohnung Hambach"                      │
│ • Secondary:  "Ferienwohnung Pfalz"                        │
│ • Location:   Schloßstraße 18, 67434 Hambach              │
│ • Phone:      +49 172 804 9269                             │
│ • Geo:        49.321505, 8.115035                          │
└─────────────────────────────────────────────────────────────┘
```

### Quick-Links (innerhalb dieser Datei)
- 🔄 **Workflow starten?** → [TEIL 2: Unified Workflow](#teil-2-unified-workflow)
- 🤔 **Entscheidung treffen?** → [TEIL 3: Decision Trees](#teil-3-decision-trees)
- 📋 **Code kopieren?** → [TEIL 4: Pattern Library](#teil-4-pattern-library)
- ✅ **Quality Check?** → [TEIL 5: Quality Gates](#teil-5-quality-gates)
- 🔧 **Problem lösen?** → [TEIL 6: Troubleshooting](#teil-6-troubleshooting)

---

## 🎯 TEIL 2: UNIFIED WORKFLOW

**Das Herzstück:** Jeder Task folgt diesem exakten Pattern. Zero Waste. Maximum Efficiency.

### 🔄 Der Standard-Prozess (für JEDEN Task)

```
┌──────────────────────────────────────────────────────────────┐
│ PHASE 1: CLAUDE (Planning & Design) - 5-10 Min             │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│ INPUT:  "Ich will [Feature/Section/Fix]"                    │
│                                                               │
│ CLAUDE ANALYSIERT:                                           │
│ • Ist es Astro oder React Component?                        │
│ • Welche Files müssen angelegt/geändert werden?            │
│ • Performance-Implications?                                  │
│ • SEO-Requirements?                                          │
│ • Design-Constraints (Rams/Jobs)?                           │
│                                                               │
│ CLAUDE LIEFERT:                                              │
│ ✅ Design-Entscheidungen (Farben, Spacing, Typography)      │
│ ✅ File-Struktur (welche Komponenten/Pages?)               │
│ ✅ Code-Template (copy-paste-ready)                         │
│ ✅ Cursor-Prompt (optimiert, battle-tested)                │
│ ✅ Acceptance-Criteria (was muss funktionieren?)           │
│                                                               │
│ OUTPUT: Cursor-Ready Package                                 │
│                                                               │
└──────────────────────────────────────────────────────────────┘
              ↓
┌──────────────────────────────────────────────────────────────┐
│ PHASE 2: CURSOR (Implementation) - 10-30 Min                │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│ SCHRITT 1: Cursor Composer öffnen                           │
│ • CMD+I (Mac) oder CTRL+I (Windows)                         │
│                                                               │
│ SCHRITT 2: Paste Claude's Prompt                            │
│ • Komplett reinkopieren                                      │
│ • Enter drücken                                              │
│ • Cursor generiert Code                                      │
│                                                               │
│ SCHRITT 3: Live-Preview checken                             │
│ • Terminal: npm run dev                                      │
│ • Browser: http://localhost:4321                            │
│ • Visual-Check: Layout, Farben, Spacing                     │
│                                                               │
│ SCHRITT 4: Mini-Iterations (falls nötig)                    │
│ • CMD+K auf relevanter Datei                                │
│ • "Change button color to #8b7355"                          │
│ • "Increase padding to 48px"                                │
│ • "Make heading responsive"                                  │
│                                                               │
│ SCHRITT 5: Terminal-Check                                   │
│ • Keine Errors? ✅                                           │
│ • TypeScript happy? ✅                                       │
│ • Build erfolgreich? npm run build ✅                       │
│                                                               │
│ OUTPUT: Funktionierende Implementation                       │
│                                                               │
└──────────────────────────────────────────────────────────────┘
              ↓
┌──────────────────────────────────────────────────────────────┐
│ PHASE 3: CLAUDE (Review & Quality Gate) - 5 Min            │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│ INPUT:  Screenshot + optional Code                          │
│                                                               │
│ CLAUDE PRÜFT (Rams/Jobs-Prinzipien):                        │
│                                                               │
│ 🎨 DESIGN:                                                   │
│ • Typografie-Hierarchie korrekt?                            │
│ • Spacing konsistent (4px-Raster)?                          │
│ • Farben aus Brand-Palette?                                 │
│ • Whitespace großzügig genug?                               │
│                                                               │
│ ⚡ PERFORMANCE:                                              │
│ • Bilder optimiert (<350KB Hero)?                           │
│ • Lazy-Loading korrekt?                                     │
│ • Keine unnötigen Re-Renders?                               │
│ • Budgets eingehalten?                                       │
│                                                               │
│ ♿ ACCESSIBILITY:                                            │
│ • Kontrast >4.5:1?                                          │
│ • Alt-Texte vorhanden?                                       │
│ • Semantisches HTML?                                         │
│ • Focus-States sichtbar?                                     │
│                                                               │
│ 🔍 SEO:                                                      │
│ • Keywords platziert?                                        │
│ • Meta-Tags korrekt?                                         │
│ • Schema Markup (falls relevant)?                           │
│ • Internal Links gesetzt?                                    │
│                                                               │
│ 📱 RESPONSIVE:                                               │
│ • Mobile (375px) ✅                                          │
│ • Tablet (768px) ✅                                          │
│ • Desktop (1440px) ✅                                        │
│                                                               │
│ ERGEBNIS:                                                    │
│ • ✅ APPROVED → Phase 4 (Finalize)                          │
│ • ⚠️ ITERATE → Zurück zu Cursor mit Fix-Prompt             │
│ • ❌ REDESIGN → Zurück zu Claude Phase 1                   │
│                                                               │
└──────────────────────────────────────────────────────────────┘
              ↓
┌──────────────────────────────────────────────────────────────┐
│ PHASE 4: FINALIZE (nur wenn ✅ approved) - 2 Min           │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│ SCHRITT 1: Git Commit                                       │
│ git add .                                                    │
│ git commit -m "feat: [clear description]"                   │
│                                                               │
│ Beispiele:                                                   │
│ • "feat: add hero section with optimized images"           │
│ • "fix: improve mobile spacing in features grid"           │
│ • "perf: lazy-load gallery images"                          │
│ • "seo: add schema markup for lodging business"            │
│                                                               │
│ SCHRITT 2: Production Build Test                            │
│ npm run build                                                │
│ npm run preview                                              │
│ → Final visual check                                         │
│                                                               │
│ SCHRITT 3: Documentation (optional)                         │
│ • Update CHANGELOG.md                                        │
│ • Screenshot in /docs/ (bei großen Features)               │
│ • Performance-Metrics notieren                              │
│                                                               │
│ SCHRITT 4: Mark Task Complete                               │
│ • Trello/Notion/GitHub Issue → Done                         │
│ • Nächster Task? → Zurück zu Phase 1                       │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

---

### 🎯 Workflow-Varianten (für verschiedene Task-Types)

#### 1️⃣ NEUE SECTION ERSTELLEN

```
DU → CLAUDE:
"Ich will eine neue Section 'Guest Reviews' erstellen mit:
- Carousel mit 3 Reviews
- 5-Sterne-Rating
- Gast-Fotos
- CTA zu Booking.com"

CLAUDE → DU:
[Liefert Design-System, Component-Struktur, Cursor-Prompt]

DU → CURSOR:
[Paste Prompt, generieren lassen]

DU → CLAUDE:
[Screenshot schicken]

CLAUDE → DU:
"✅ Perfect! Aber: Review-Card border radius von 8px auf 12px"

DU → CURSOR:
"Change review card border radius to 12px"

✅ DONE → Git Commit
```

**Durchschnittliche Zeit:** 25-35 Minuten

---

#### 2️⃣ BUG FIXEN

```
DU → CLAUDE:
"Problem: Mobile Navigation schließt nicht nach Click"
[Screenshot + Error aus Console]

CLAUDE → DU:
"Diagnose: useState-Hook fehlt für Toggle-State.
Fix-Prompt für Cursor: [...]"

DU → CURSOR:
[Paste Fix-Prompt in relevanter Datei mit CMD+K]

DU → Test:
Mobile öffnen, klicken, schließt sich? ✅

✅ DONE → Git Commit "fix: mobile navigation toggle state"
```

**Durchschnittliche Zeit:** 10-15 Minuten

---

#### 3️⃣ DESIGN VERBESSERN

```
DU → CLAUDE:
"Fühlt sich nicht 'premium' genug an"
[Screenshot von Section]

CLAUDE → DU:
"Analyse (Rams/Jobs):
❌ Whitespace zu gering (24px → 64px)
❌ Heading zu klein (32px → 48px)
❌ Shadow zu stark (0-4-12 → 0-2-8)
✅ Farben gut
Cursor-Prompts: [...]"

DU → CURSOR:
[Paste Änderungen, Schritt für Schritt]

DU → CLAUDE:
[Neuer Screenshot]

CLAUDE → DU:
"🔥 PERFECT! Genau richtig jetzt."

✅ DONE → Git Commit "design: improve premium feel in hero"
```

**Durchschnittliche Zeit:** 20-30 Minuten

---

#### 4️⃣ PERFORMANCE OPTIMIEREN

```
DU → CLAUDE:
"Lighthouse Score nur 72"
[Screenshot von Lighthouse Report]

CLAUDE → DU:
"Bottlenecks (priorisiert):
1. 🔴 Hero-Bild 580KB (Ziel: 350KB) → -0.8s LCP
2. 🟡 Fonts blocking → -0.3s FCP
3. 🟢 Missing lazy-load → -0.2s

Fix-Prompts (Reihenfolge): [...]"

DU → CURSOR:
[Issue #1 fixen]
[Build, Lighthouse erneut]
[Falls nötig: Issue #2, etc.]

DU → CLAUDE:
"Jetzt 89 Score!"

CLAUDE → DU:
"🎯 Excellent! Remaining +6 Punkte wären Micro-Optimizations.
ROI nicht mehr lohnend. Ship it!"

✅ DONE → Git Commit "perf: optimize hero image and fonts"
```

**Durchschnittliche Zeit:** 30-45 Minuten

---

### 🚨 WICHTIGE WORKFLOW-REGELN

```
┌─────────────────────────────────────────────────────────┐
│ GOLDENE REGELN (IMMER BEFOLGEN)                        │
├─────────────────────────────────────────────────────────┤
│                                                          │
│ 1. NIEMALS Code ohne Claude-Review committen           │
│    → Verhindert Design-Drift und Tech-Debt             │
│                                                          │
│ 2. IMMER npm run build vor git commit                  │
│    → Verhindert Production-Breaks                       │
│                                                          │
│ 3. SCREENSHOTS bei jedem Review                        │
│    → Claude sieht, du sparst Erklärungen               │
│                                                          │
│ 4. EINE Sache pro Commit                               │
│    → Git-History bleibt clean und debuggable           │
│                                                          │
│ 5. CURSE-PROMPTS speichern wenn battle-tested         │
│    → Pattern Library unten erweitern                    │
│                                                          │
│ 6. PERFORMANCE-Budget VORHER checken                   │
│    → Nicht nachträglich optimieren müssen              │
│                                                          │
│ 7. RESPONSIVE von Anfang an testen                     │
│    → Nicht erst am Ende merken dass's bricht           │
│                                                          │
│ 8. DECISION TREES nutzen bei Unsicherheit             │
│    → Verhindert falsche Architektur-Entscheidungen     │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## 🤔 TEIL 3: DECISION TREES

**Nutze diese, wenn du unsicher bist welchen Weg du gehen sollst.**

### 🌲 TREE 1: Astro vs. React Component?

```
❓ NEUE COMPONENT ERSTELLEN?
│
├─❓ Braucht sie CLIENT-SIDE Interaktivität?
│  ├─ Forms mit Validation → React
│  ├─ Dropdown/Toggle/Tabs → React  
│  ├─ Animations mit State → React
│  ├─ API-Calls im Client → React
│  └─ Nur Darstellung → Astro
│
├─❓ Braucht sie CLIENT-SIDE State?
│  ├─ useState/useEffect nötig → React
│  ├─ Nur Props von Parent → Astro
│  └─ Stateless Component → Astro
│
├─❓ Ist sie PERFORMANCE-kritisch?
│  ├─ Above-the-fold (Hero, Nav) → Astro (0KB JS!)
│  ├─ Below-the-fold → Flexible
│  └─ Nicht im Viewport → Egal
│
└─ ERGEBNIS:
   • Wenn 2+ "React" Kriterien → React Component (.tsx)
   • Sonst → Astro Component (.astro)
   • Wenn unsicher → Frag Claude!
```

**Beispiele:**
- ✅ Hero Section → **Astro** (statisch, performance-kritisch)
- ✅ Navigation → **React** (Toggle-State für Mobile)
- ✅ Gallery → **React** (Carousel mit Navigation)
- ✅ Contact Form → **React** (Validation, State)
- ✅ Features Grid → **Astro** (statisch, nur Darstellung)

---

### 🌲 TREE 2: Neue Page vs. Section in bestehender Page?

```
❓ NEUEN CONTENT HINZUFÜGEN?
│
├─❓ Hat eigene URL? (z.B. /aktivitaeten)
│  ├─ JA → Neue Page in src/pages/
│  └─ NEIN → Section in bestehender Page
│
├─❓ Mehr als 500 Wörter Content?
│  ├─ JA → Eigene Page (SEO-Benefit)
│  └─ NEIN → Section
│
├─❓ Eigenes SEO-Keyword-Target?
│  ├─ JA → Eigene Page
│  └─ NEIN → Section
│
├─❓ Navigation-Link nötig?
│  ├─ JA → Eigene Page
│  └─ NEIN → Section
│
└─ ERGEBNIS:
   • Wenn 2+ "Eigene Page" → src/pages/[name].astro
   • Sonst → Section in bestehender Page
```

**Beispiele:**
- ✅ "Aktivitäten" mit Wandern/Wein/Kultur → **Eigene Page** (/aktivitaeten)
- ✅ "Buchungs-Formular" → **Eigene Page** (/booking)
- ✅ "Ausstattungs-Details" → **Section** auf /apartment Page
- ✅ "Gast-Bewertungen" → **Section** auf Homepage

---

### 🌲 TREE 3: Image Optimization Strategy?

```
❓ NEUES BILD HINZUFÜGEN?
│
├─❓ Wo wird es angezeigt?
│  ├─ Above-the-fold (Hero) → fetchpriority="high"
│  ├─ Below-the-fold → loading="lazy"
│  └─ Gallery/Carousel → loading="lazy"
│
├─❓ Wie groß ist Original?
│  ├─ >500KB → MUSS optimiert werden!
│  ├─ 300-500KB → Optimieren empfohlen
│  └─ <300KB → Optional
│
├─❓ Welches Format?
│  ├─ Original JPG → WebP konvertieren
│  ├─ Original PNG → WebP oder AVIF
│  └─ SVG → Inline oder als File
│
└─ TOOL-WAHL:
   • Hero/Critical → OptimizedImage Component
   • Gallery → OptimizedImage mit srcset
   • Icons → lucide-react (nicht als Image!)
   • Logos → SVG inline
```

**Performance-Targets:**
- 🎯 Hero-Bild: ≤350KB (WebP, 1920px width)
- 🎯 Content-Bilder: ≤200KB (WebP, 1200px width)
- 🎯 Thumbnails: ≤80KB (WebP, 600px width)
- 🎯 Icons: Immer lucide-react, KEINE PNGs!

---

### 🌲 TREE 4: Styling Approach?

```
❓ WIE STYLEN?
│
├─❓ Einmalig genutzt?
│  ├─ JA → Inline Tailwind Classes
│  └─ NEIN → Custom CSS Class
│
├─❓ Komplexe Animation?
│  ├─ JA → Framer Motion (React)
│  ├─ Simple → CSS Transition
│  └─ Sehr komplex → Frag Claude
│
├─❓ Responsive Behaviour?
│  ├─ Standard → Tailwind Breakpoints (sm/md/lg)
│  ├─ Custom → CSS Media Queries
│  └─ Sehr custom → CSS + JavaScript
│
└─ FILE-LOCATION:
   • Global Styles → src/styles/global.css
   • Component-Specific → <style> in .astro
   • Design Tokens → src/styles/tokens.css
   • Utilities → Tailwind Config
```

---

### 🌲 TREE 5: Performance vs. Feature Trade-off?

```
❓ FEATURE HINZUFÜGEN - Aber Performance-Impact?
│
├─❓ Wie viel JS wird hinzugefügt?
│  ├─ <20KB → Akzeptabel
│  ├─ 20-50KB → Muss kritisch hinterfragt werden
│  └─ >50KB → NUR wenn absolut nötig
│
├─❓ Ist es Above-the-fold?
│  ├─ JA → Extra kritisch prüfen (LCP Impact!)
│  └─ NEIN → Mehr Spielraum
│
├─❓ Gibt's eine leichtere Alternative?
│  ├─ Große Library → Kann man es vanilla machen?
│  ├─ Framer Motion → Reicht CSS Transition?
│  └─ React → Geht es mit Astro?
│
└─ DECISION FRAMEWORK:
   • Performance-Budget gesprengt? → Feature ablehnen
   • Conversion-kritisch? → Kompromiss suchen
   • Nice-to-have? → Verschieben auf v2
   • Must-have? → Code-Splitting nutzen
```

**Budget-Übersicht:**
```
AKTUELL VERBRAUCHT:          LIMIT:
JS:  ~85KB / 150KB          [=========         ] 57%
CSS: ~95KB / 120KB          [===============   ] 79%
Hero: 280KB / 350KB         [===============   ] 80%

✅ Noch Luft für Features!
```

---

## 📋 TEIL 4: PATTERN LIBRARY

**Copy-Paste-Ready Code Snippets. Battle-Tested. Rams/Jobs-Approved.**

### 🎯 Cursor Prompts (Top 10)

#### #1: Neue Astro Section

```
Create a new Astro section component with these specs:

Name: [SectionName].astro
Location: src/components/

Design Requirements:
- Follow Dieter Rams principles (less but better)
- Color palette: #3d2817, #8b7355, #fafaf9, #f4f1eb
- Typography: Playfair Display for headings, DM Sans for body
- Spacing: 4px grid system, sections min 80px vertical (48px mobile)
- Max-width: 1200px centered

Structure:
1. Container with proper padding
2. Heading (H2, semantic)
3. Intro paragraph
4. [Content specific to section]
5. CTA button (primary style)

Technical:
- Fully responsive (375px, 768px, 1440px)
- Semantic HTML5
- Alt texts for all images (German)
- Loading="lazy" for below-fold images

Accessibility:
- WCAG 2.1 AA compliant
- Contrast >4.5:1
- Focus states visible
- Keyboard navigable

Include inline <style> with scoped CSS if needed.
```

---

#### #2: React Component mit State

```
Create a React component with client-side interactivity:

Name: [ComponentName].tsx
Location: src/components/

Props:
- [prop1]: string
- [prop2]?: number (optional)

State:
- [Describe needed state]

Functionality:
- [Describe behavior]

Design:
- Match existing design system (Rams/Jobs)
- Colors from brand palette
- Smooth transitions (300ms ease-in-out)

Technical:
- TypeScript with strict types
- Proper cleanup (useEffect return)
- Performance-optimized (useMemo/useCallback wenn nötig)
- Mobile-first responsive

Add "client:load" directive when importing in Astro.
```

---

#### #3: Image Optimization

```
Optimize all images in [specific section/page]:

Tasks:
1. Convert to WebP format
2. Generate responsive sizes (320w, 640w, 1024w, 1920w)
3. Add proper width/height attributes (prevent CLS)
4. Set loading="lazy" for below-fold
5. Set loading="eager" + fetchpriority="high" for hero only
6. Add descriptive German alt texts
7. Ensure max file sizes:
   - Hero: 350KB
   - Content: 200KB
   - Thumbnails: 80KB

Use OptimizedImage component from src/components/OptimizedImage.astro

Test with Lighthouse to verify LCP improvement.
```

---

#### #4: SEO Meta Tags

```
Add comprehensive SEO meta tags to [page name]:

Requirements:
- Title: 50-60 characters, include "Ferienwohnung Hambach"
- Description: 140-160 characters, include USP + CTA
- Keywords: Focus on "Ferienwohnung Hambach", "Ferienwohnung Pfalz"
- Canonical URL: [specify]
- Open Graph tags (og:title, og:description, og:image)
- Twitter Card tags
- Schema.org JSON-LD: LodgingBusiness type
  - Name: "Unterm Schloss"
  - Address: Schloßstraße 18, 67434 Hambach
  - Geo: 49.321505, 8.115035
  - Telephone: +49 172 804 9269
  - Image: Hero image URL

Add in <head> of Layout.astro or page-specific.
```

---

#### #5: Performance Audit & Fix

```
Run comprehensive performance audit and optimize:

Process:
1. Run Lighthouse (Mobile + Desktop)
2. Identify bottlenecks in order of impact:
   - LCP (Largest Contentful Paint)
   - CLS (Cumulative Layout Shift)
   - INP (Interaction to Next Paint)
   - FCP (First Contentful Paint)
   - TTFB (Time to First Byte)

3. For each issue, provide fix-prompt in priority order
4. Re-test after each fix
5. Stop when all metrics >90 OR ROI diminishes

Target scores:
- Performance: >90
- Accessibility: >95
- Best Practices: >95
- SEO: >95

Document improvements in [metric]: before → after format.
```

---

#### #6: Responsive Debugging

```
Fix responsive layout issues on [component/page]:

Breakpoints to test:
- Mobile: 375px width
- Tablet: 768px width  
- Desktop: 1440px width

Common issues to check:
- Text overflow / line breaks
- Image scaling
- Button sizing
- Spacing adjustments
- Navigation behavior
- Grid/flex wrapping

Use Tailwind responsive prefixes:
- sm: (min-width: 640px)
- md: (min-width: 768px)
- lg: (min-width: 1024px)

Ensure touch targets ≥44px on mobile.
```

---

#### #7: Accessibility Audit

```
Audit and fix accessibility issues in [component/page]:

Checklist:
1. Color contrast ≥4.5:1 (text), ≥3:1 (UI)
2. All images have descriptive alt text
3. Semantic HTML (proper heading hierarchy)
4. Keyboard navigation works (tab order logical)
5. Focus states visible (not just :hover)
6. ARIA labels where needed (icons, buttons)
7. Form labels properly associated
8. Error messages clear and helpful

Tools:
- Browser DevTools Accessibility panel
- axe DevTools extension
- Keyboard-only navigation test

Fix all WCAG 2.1 Level A and AA violations.
```

---

#### #8: Code Refactoring

```
Refactor [component/file] for better maintainability:

Goals:
- DRY: Extract repeated code into reusable functions
- Readability: Add comments for complex logic
- Performance: Remove unnecessary re-renders
- TypeScript: Add proper types where missing
- Standards: Follow Astro/React best practices

Specific:
- Break down components >200 lines
- Extract magic numbers into constants
- Use semantic variable names
- Remove unused imports/variables
- Add JSDoc comments for public functions

Ensure: No functional changes, only code quality improvements.
```

---

#### #9: Animation Implementation

```
Add subtle animation to [element/section]:

Requirements:
- Design: Follow Rams "less but better" principle
- Performance: GPU-accelerated (transform/opacity only)
- Accessibility: Respect prefers-reduced-motion
- Timing: 300-600ms duration, ease-in-out
- Trigger: [scroll/hover/click/load]

Approach:
- For simple: CSS transitions
- For complex: Framer Motion (React component)
- For scroll: IntersectionObserver

Examples:
- Fade in: opacity 0→1 + translateY 20px→0
- Hover scale: scale 1→1.05
- Stagger: Delay children by 100ms

Test on low-end devices (throttle CPU in DevTools).
```

---

#### #10: Form Implementation

```
Create contact/booking form with validation:

Fields:
- [List required fields]

Validation:
- Required field indicators
- Real-time validation (blur event)
- Clear error messages (German)
- Success feedback after submit

Technical:
- React component with useState
- Email regex validation
- Phone number formatting
- GDPR consent checkbox (required)
- Honeypot field (spam prevention)

Integration:
- Submit to [endpoint/service]
- Loading state during submission
- Error handling (network issues)

Design:
- Match brand design system
- Mobile-friendly (large touch targets)
- Accessible (proper labels, ARIA)
```

---

### 🏗️ Code Snippets (Top 10)

#### #1: OptimizedImage Component

```astro
---
// src/components/OptimizedImage.astro
import { Image } from 'astro:assets';

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  fetchpriority?: 'high' | 'low' | 'auto';
  class?: string;
}

const { 
  src, 
  alt, 
  width = 1920, 
  height = 1080,
  loading = 'lazy',
  fetchpriority = 'auto',
  class: className = ''
} = Astro.props;

// Import image dynamically from public folder
const images = import.meta.glob('/public/images/**/*.{jpg,jpeg,png,webp}', { eager: true });
const imagePath = `/public${src}`;
const imageModule = images[imagePath];
---

<Image
  src={imageModule?.default || src}
  alt={alt}
  width={width}
  height={height}
  format="webp"
  quality={90}
  loading={loading}
  fetchpriority={fetchpriority}
  class={className}
  decoding="async"
/>
```

**Usage:**
```astro
<OptimizedImage 
  src="/images/hero.jpg"
  alt="Ferienwohnung Unterm Schloss Außenansicht"
  width={1920}
  height={1080}
  loading="eager"
  fetchpriority="high"
  class="w-full h-auto"
/>
```

---

#### #2: Section Container

```astro
---
// src/components/SectionContainer.astro
interface Props {
  variant?: 'light' | 'dark';
  id?: string;
  class?: string;
}

const { 
  variant = 'light', 
  id,
  class: className = ''
} = Astro.props;

const bgColor = variant === 'dark' ? 'bg-[#1c120b]' : 'bg-[#fafaf9]';
const textColor = variant === 'dark' ? 'text-[#fafaf9]' : 'text-[#1c120b]';
---

<section 
  id={id}
  class={`${bgColor} ${textColor} py-20 md:py-32 ${className}`}
>
  <div class="container mx-auto px-4 md:px-8 max-w-7xl">
    <slot />
  </div>
</section>
```

**Usage:**
```astro
<SectionContainer variant="dark" id="features">
  <h2>Features Content</h2>
</SectionContainer>
```

---

#### #3: Primary CTA Button

```astro
---
// src/components/Button.astro
interface Props {
  href?: string;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  class?: string;
}

const { 
  href,
  type = 'button',
  variant = 'primary',
  size = 'md',
  class: className = ''
} = Astro.props;

const baseStyles = 'font-dm-sans font-medium transition-all duration-300 rounded-full inline-flex items-center justify-center gap-2';

const variants = {
  primary: 'bg-[#8b7355] text-white hover:bg-[#7b6345] shadow-lg hover:shadow-xl',
  secondary: 'bg-transparent text-[#8b7355] border-2 border-[#8b7355] hover:bg-[#8b7355] hover:text-white',
  ghost: 'bg-transparent text-[#8b7355] hover:underline'
};

const sizes = {
  sm: 'px-6 py-2 text-sm',
  md: 'px-8 py-3 text-base',
  lg: 'px-10 py-4 text-lg'
};

const Component = href ? 'a' : 'button';
---

<Component
  href={href}
  type={!href ? type : undefined}
  class={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
>
  <slot />
</Component>
```

**Usage:**
```astro
<Button href="/booking" variant="primary" size="lg">
  Verfügbarkeit anfragen
</Button>
```

---

#### #4: Schema.org LodgingBusiness

```astro
---
// In <head> of Layout.astro or specific page
const schemaData = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Ferienwohnung Unterm Schloss",
  "description": "Liebevoll restaurierte Ferienwohnung in Hambachs historischer Schloßstraße",
  "image": "https://unterm-schloss.de/images/hero.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Schloßstraße 18",
    "addressLocality": "Hambach",
    "postalCode": "67434",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 49.321505,
    "longitude": 8.115035
  },
  "url": "https://unterm-schloss.de",
  "telephone": "+49-172-804-9269",
  "priceRange": "€€",
  "numberOfRooms": 2,
  "petsAllowed": false,
  "starRating": {
    "@type": "Rating",
    "ratingValue": "5"
  }
};
---

<script type="application/ld+json" set:html={JSON.stringify(schemaData)} />
```

---

#### #5: Intersection Observer (Scroll Reveal)

```typescript
// src/scripts/scrollReveal.ts

export function initScrollReveal() {
  const elements = document.querySelectorAll('[data-reveal]');
  
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  elements.forEach((el) => observer.observe(el));
}

// In Layout.astro <script>:
// <script>
//   import { initScrollReveal } from '@/scripts/scrollReveal';
//   document.addEventListener('DOMContentLoaded', initScrollReveal);
// </script>
```

**CSS:**
```css
[data-reveal] {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

[data-reveal].revealed {
  opacity: 1;
  transform: translateY(0);
}
```

**Usage:**
```html
<div data-reveal>Content fades in on scroll</div>
```

---

#### #6: Mobile Navigation Toggle (React)

```tsx
// src/components/Navigation.tsx
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/apartment', label: 'Wohnung' },
    { href: '/activities', label: 'Aktivitäten' },
    { href: '/booking', label: 'Buchen' },
    { href: '/contact', label: 'Kontakt' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/85 backdrop-blur-md z-50 border-b border-[#e8ded1]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="font-playfair text-2xl text-[#3d2817]">
            Unterm Schloss
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href}
                  className="font-dm-sans text-[#3d2817] hover:text-[#8b7355] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden pb-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href}
                  className="block font-dm-sans text-[#3d2817] hover:text-[#8b7355]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
```

**Import in Layout:**
```astro
<Navigation client:load />
```

---

#### #7: Contact Form (React)

```tsx
// src/components/ContactForm.tsx
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Replace with actual endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '', consent: false });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
      <div>
        <label htmlFor="name" className="block font-dm-sans text-sm font-medium mb-2">
          Name *
        </label>
        <input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 border border-[#e8ded1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b7355]"
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-dm-sans text-sm font-medium mb-2">
          E-Mail *
        </label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-[#e8ded1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b7355]"
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-dm-sans text-sm font-medium mb-2">
          Nachricht *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 border border-[#e8ded1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b7355]"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          required
          checked={formData.consent}
          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
          className="mt-1"
        />
        <label htmlFor="consent" className="text-sm text-[#3d2817]">
          Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu. *
        </label>
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-[#8b7355] text-white px-8 py-3 rounded-full font-dm-sans font-medium hover:bg-[#7b6345] transition-all disabled:opacity-50"
      >
        {status === 'loading' ? 'Wird gesendet...' : 'Nachricht senden'}
      </button>

      {status === 'success' && (
        <p className="text-green-600 text-center">Nachricht erfolgreich gesendet!</p>
      )}

      {status === 'error' && (
        <p className="text-red-600 text-center">Fehler beim Senden. Bitte erneut versuchen.</p>
      )}
    </form>
  );
}
```

---

#### #8: Lazy Load Script

```typescript
// src/scripts/lazyLoad.ts

export function initLazyLoad() {
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          
          // Add fade-in class when image is about to load
          img.classList.add('lazy-loading');
          
          // When image fully loaded
          img.addEventListener('load', () => {
            img.classList.remove('lazy-loading');
            img.classList.add('lazy-loaded');
          });
          
          imageObserver.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px' // Start loading 50px before entering viewport
    });

    images.forEach((img) => imageObserver.observe(img));
  }
}

// Add to Layout.astro:
// <script>
//   import { initLazyLoad } from '@/scripts/lazyLoad';
//   document.addEventListener('DOMContentLoaded', initLazyLoad);
// </script>
```

**CSS:**
```css
img[loading="lazy"] {
  opacity: 0;
  transition: opacity 0.3s ease;
}

img.lazy-loading {
  opacity: 0.5;
}

img.lazy-loaded {
  opacity: 1;
}
```

---

#### #9: Responsive Grid

```astro
---
// src/components/Grid.astro
interface Props {
  cols?: 1 | 2 | 3 | 4;
  gap?: 4 | 6 | 8 | 12;
  class?: string;
}

const { 
  cols = 3, 
  gap = 8,
  class: className = ''
} = Astro.props;

const gridCols = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
};

const gridGap = {
  4: 'gap-4',
  6: 'gap-6',
  8: 'gap-8',
  12: 'gap-12'
};
---

<div class={`grid ${gridCols[cols]} ${gridGap[gap]} ${className}`}>
  <slot />
</div>
```

**Usage:**
```astro
<Grid cols={3} gap={8}>
  <Card title="Feature 1" />
  <Card title="Feature 2" />
  <Card title="Feature 3" />
</Grid>
```

---

#### #10: Feature Card

```astro
---
// src/components/FeatureCard.astro
import { type LucideIcon } from 'lucide-react';

interface Props {
  icon: string; // lucide icon name
  title: string;
  description: string;
  class?: string;
}

const { icon, title, description, class: className = '' } = Astro.props;
---

<div 
  class={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow ${className}`}
  data-reveal
>
  <div class="w-12 h-12 rounded-full bg-[#f4f1eb] flex items-center justify-center mb-4">
    <svg class="w-6 h-6 text-[#8b7355]">
      <!-- Icon wird dynamisch geladen via lucide-react -->
    </svg>
  </div>
  
  <h3 class="font-playfair text-2xl text-[#3d2817] mb-3">
    {title}
  </h3>
  
  <p class="font-dm-sans text-[#3d2817]/80 leading-relaxed">
    {description}
  </p>
</div>
```

**Usage:**
```astro
<FeatureCard 
  icon="home"
  title="85 m² Wohnfläche"
  description="Großzügig geschnitten mit offener Wohnküche und separatem Schlafzimmer."
/>
```

---

## ✅ TEIL 5: QUALITY GATES

**Checklisten für Pre-Code und Post-Code Validation.**

### 🚦 Pre-Code Checklist (BEVOR du Cursor startest)

```
┌─────────────────────────────────────────────────────────┐
│ ✅ PRE-CODE CHECKLIST - Ausfüllen BEVOR Implementation │
├─────────────────────────────────────────────────────────┤
│                                                          │
│ [ ] KLARHEIT: Ich weiß genau was ich bauen will        │
│     → Wenn NEIN: Erst Claude fragen für Planung        │
│                                                          │
│ [ ] DESIGN: Design-Entscheidungen geklärt?             │
│     → Farben, Spacing, Typography definiert?           │
│                                                          │
│ [ ] ARCHITEKTUR: Astro oder React Component?           │
│     → Decision Tree konsultiert?                        │
│                                                          │
│ [ ] PERFORMANCE: Performance-Budget geprüft?           │
│     → JS <150KB? CSS <120KB? Bilder <350KB?            │
│                                                          │
│ [ ] FILES: Weiß ich welche Files ich anlege/ändere?   │
│     → Klare File-Struktur im Kopf?                     │
│                                                          │
│ [ ] DEPENDENCIES: Brauche ich neue npm Packages?       │
│     → Wenn JA: Welche und warum?                       │
│                                                          │
│ [ ] SEO: Ist es SEO-relevant?                          │
│     → Keywords klar? Meta-Tags geplant?                │
│                                                          │
│ [ ] RESPONSIVE: Mobile-first gedacht?                  │
│     → Breakpoints bedacht?                              │
│                                                          │
│ [ ] ACCESSIBILITY: A11y-Anforderungen klar?           │
│     → Kontrast, Alt-Texte, Semantik?                   │
│                                                          │
│ [ ] TIME-BOX: Realistische Zeit-Einschätzung?         │
│     → <30 Min = Go! >1h = Vielleicht splitten?        │
│                                                          │
└─────────────────────────────────────────────────────────┘

WENN ALLE ✅ → Cursor Prompt ready to paste!
WENN 3+ ❌ → Zurück zu Claude für bessere Planung
```

---

### 🎯 Post-Code Checklist (NACH Implementation, VOR Commit)

```
┌─────────────────────────────────────────────────────────┐
│ ✅ POST-CODE CHECKLIST - Ausfüllen VOR git commit      │
├─────────────────────────────────────────────────────────┤
│                                                          │
│ 🎨 DESIGN (Rams/Jobs-Prinzipien)                       │
│ [ ] Typografie-Hierarchie korrekt (H1>H2>H3>P)?       │
│ [ ] Spacing konsistent (4px-Raster eingehalten)?      │
│ [ ] Farben aus Brand-Palette (#3d2817, #8b7355)?      │
│ [ ] Whitespace großzügig genug?                        │
│ [ ] Buttons max. 2 pro Section?                        │
│ [ ] Design wirkt "quiet luxury"?                       │
│                                                          │
│ ⚡ PERFORMANCE                                          │
│ [ ] npm run build erfolgreich?                         │
│ [ ] Keine Console-Errors?                              │
│ [ ] Bilder optimiert (<350KB Hero, <200KB Content)?   │
│ [ ] Lazy-Loading korrekt gesetzt?                     │
│ [ ] Performance-Budget eingehalten?                    │
│     JS: ___KB / 150KB                                  │
│     CSS: ___KB / 120KB                                 │
│                                                          │
│ 📱 RESPONSIVE                                           │
│ [ ] Mobile (375px) getestet?                           │
│ [ ] Tablet (768px) getestet?                           │
│ [ ] Desktop (1440px) getestet?                         │
│ [ ] Touch-Targets ≥44px auf Mobile?                    │
│ [ ] Text lesbar ohne Zoomen?                           │
│                                                          │
│ ♿ ACCESSIBILITY                                        │
│ [ ] Kontrast >4.5:1 (Text), >3:1 (UI)?                │
│ [ ] Alle Bilder haben Alt-Texte (German)?             │
│ [ ] Semantisches HTML (section, nav, main)?           │
│ [ ] Keyboard-Navigation funktioniert?                  │
│ [ ] Focus-States sichtbar?                             │
│ [ ] ARIA-Labels wo nötig?                              │
│                                                          │
│ 🔍 SEO (falls SEO-relevante Page/Section)             │
│ [ ] Keywords im Content (natürlich)?                   │
│ [ ] Meta-Tags korrekt (Title, Description)?           │
│ [ ] Alt-Texte beschreibend + Keyword?                  │
│ [ ] Internal Links gesetzt?                            │
│ [ ] Schema Markup (falls nötig)?                       │
│ [ ] Adresse erwähnt (Schloßstraße 18)?                │
│                                                          │
│ 🔧 CODE QUALITY                                         │
│ [ ] Keine doppelten/ungenutzten Imports?              │
│ [ ] TypeScript-Errors behoben?                         │
│ [ ] Kommentare für komplexe Logik?                    │
│ [ ] Naming conventions befolgt?                        │
│ [ ] DRY-Prinzip eingehalten?                           │
│                                                          │
│ 📸 DOCUMENTATION                                        │
│ [ ] Screenshot gemacht (bei großen Features)?         │
│ [ ] Claude Review erhalten? ✅ / ⚠️ / ❌              │
│ [ ] Commit-Message klar formuliert?                   │
│     Format: "type: description"                        │
│     Types: feat/fix/perf/seo/design/refactor         │
│                                                          │
└─────────────────────────────────────────────────────────┘

WENN ALLE ✅ → git commit erlaubt!
WENN 3+ ❌ → Zurück zu Cursor für Fixes
WENN Design ❌ → Screenshot zu Claude für Review
```

---

### 📊 Performance Benchmarks

**Nach größeren Änderungen: Lighthouse-Test durchführen.**

```bash
# Terminal
npm run build
npm run preview

# Chrome DevTools → Lighthouse → Generate Report
```

**Target-Scores:**
```
┌───────────────────┬─────────┬──────────┬─────────┐
│ Metric            │ Mobile  │ Desktop  │ Status  │
├───────────────────┼─────────┼──────────┼─────────┤
│ Performance       │  ≥90    │  ≥95     │         │
│ Accessibility     │  ≥95    │  ≥95     │         │
│ Best Practices    │  ≥95    │  ≥95     │         │
│ SEO               │  ≥95    │  ≥95     │         │
├───────────────────┼─────────┼──────────┼─────────┤
│ LCP               │  <2.5s  │  <1.5s   │         │
│ CLS               │  <0.1   │  <0.05   │         │
│ INP               │  <200ms │  <100ms  │         │
└───────────────────┴─────────┴──────────┴─────────┘
```

**Falls Scores <90:**
1. Screenshot zu Claude schicken
2. Claude priorisiert Issues
3. Fixes implementieren
4. Re-test
5. Repeat bis ≥90

---

## 🔧 TEIL 6: TROUBLESHOOTING

**Häufige Probleme und ihre Lösungen.**

### ❌ Problem 1: Build schlägt fehl

**Symptom:**
```bash
npm run build
# Error: ...
```

**Diagnose-Schritte:**
1. **TypeScript-Error?**
   ```bash
   npm run astro check
   ```
   → Fix Type-Issues in gemeldeten Files

2. **Import-Error?**
   → Check alle `import` Statements
   → Sind Paths korrekt? (`@/components/...`)

3. **Image-Error?**
   → Existieren alle referenzierten Bilder?
   → Check `/public/images/` Ordner

**Lösung (Cursor Prompt):**
```
Debug build error in Astro project:

Error message:
[paste error message]

Diagnose and fix:
1. Check TypeScript types
2. Verify all imports
3. Check image paths
4. Check for syntax errors

Provide specific fix for this error.
```

---

### ❌ Problem 2: Layout bricht auf Mobile

**Symptom:**
- Text overflows
- Buttons zu groß
- Spacing falsch

**Diagnose:**
```
Chrome DevTools:
1. Toggle Device Toolbar (CMD+SHIFT+M)
2. Wähle: iPhone SE (375px)
3. Inspect Element
4. Check Computed Styles
```

**Lösung (Cursor Prompt):**
```
Fix responsive layout issues on mobile (375px width):

Component: [name]
Issue: [describe: overflow/spacing/size]

Requirements:
- Use Tailwind responsive prefixes (sm:, md:, lg:)
- Ensure touch targets ≥44px
- Text must be readable without zooming
- Maintain 4px spacing system

Test on 375px, 768px, 1440px.
```

---

### ❌ Problem 3: Lighthouse Score niedrig

**Symptom:**
```
Performance: 65/100
LCP: 4.2s (red)
CLS: 0.25 (red)
```

**Diagnose:**
1. **LCP hoch?** → Bilder zu groß oder nicht optimiert
2. **CLS hoch?** → Fehlende width/height auf Images
3. **INP hoch?** → Zu viel JavaScript

**Lösung (Cursor Prompt):**
```
Optimize Lighthouse performance score:

Current scores:
- Performance: 65/100
- LCP: 4.2s (target: <2.5s)
- CLS: 0.25 (target: <0.1)

Tasks in priority order:
1. Optimize hero image (<350KB WebP)
2. Add width/height to all images
3. Implement lazy-loading for below-fold images
4. Preload critical fonts
5. Remove unused JavaScript

Provide fix-prompts step-by-step.
```

---

### ❌ Problem 4: Bilder laden nicht

**Symptom:**
- Broken image icons
- Alt-Text angezeigt statt Bild

**Diagnose:**
```
1. Check Browser Console für 404 Errors
2. Verify Image Path:
   - Korrekt: /images/hero.jpg
   - Falsch: /public/images/hero.jpg
3. Check ob File existiert in /public/images/
```

**Lösung:**
```
Bilder müssen in /public/images/ liegen!

Richtig:
/public/images/hero.jpg
→ Referenziert als: /images/hero.jpg

Falsch:
/src/images/hero.jpg
→ Funktioniert NICHT!

In Astro: <img src="/images/hero.jpg" />
```

---

### ❌ Problem 5: React Component rendert nicht

**Symptom:**
- Component erscheint nicht
- Keine Console-Errors

**Diagnose:**
```
1. Check Import in Astro File:
   import Component from '@/components/Component';

2. Check Client Directive:
   <Component client:load />
   
3. Check Browser Console für Hydration-Errors
```

**Lösung:**
```
React Components in Astro brauchen Client Directive!

Richtig:
<Navigation client:load />

Falsch:
<Navigation />

Optionen:
- client:load → Sofort laden
- client:idle → Nach main thread idle
- client:visible → Wenn im Viewport
- client:media → Bei Media Query

Standard: client:load für wichtige Components
```

---

### ❌ Problem 6: Tailwind-Classes funktionieren nicht

**Symptom:**
- Styles werden nicht angewendet
- Trotz korrekter Classes

**Diagnose:**
```
1. Check tailwind.config.mjs:
   content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}']

2. Check ob Tailwind CSS importiert:
   In Layout.astro: import '@/styles/global.css'

3. Restart Dev Server:
   CTRL+C → npm run dev
```

**Lösung (Cursor Prompt):**
```
Tailwind CSS not working in Astro project.

Tasks:
1. Verify tailwind.config.mjs content paths
2. Check global.css imports Tailwind
3. Ensure Tailwind directives present:
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

4. Restart dev server
```

---

### ❌ Problem 7: Fonts laden nicht

**Symptom:**
- Fallback-Font wird angezeigt
- Fonts sehen falsch aus

**Diagnose:**
```
1. Check @fontsource Installation:
   npm list @fontsource/playfair-display
   npm list @fontsource/dm-sans

2. Check Import in Layout.astro:
   import '@fontsource/playfair-display/400.css';
   import '@fontsource/dm-sans/300.css';
   import '@fontsource/dm-sans/400.css';

3. Check CSS:
   font-family: 'Playfair Display', serif;
```

**Lösung:**
```
Fonts müssen installiert UND importiert werden!

1. Install:
npm install @fontsource/playfair-display @fontsource/dm-sans

2. Import in Layout.astro:
---
import '@fontsource/playfair-display/400.css';
import '@fontsource/dm-sans/400.css';
---

3. Use in CSS/Tailwind:
font-playfair → Playfair Display
font-dm-sans → DM Sans
```

---

### ❌ Problem 8: Git Merge Conflict

**Symptom:**
```
<<<<<<< HEAD
Code Version A
=======
Code Version B
>>>>>>> branch-name
```

**Lösung:**
```
1. Öffne File in VS Code/Cursor
2. Wähle welche Version behalten:
   - "Accept Current Change" (HEAD)
   - "Accept Incoming Change" (branch)
   - "Accept Both Changes"
   - Manuell mergen

3. Lösche Conflict-Marker (<<<<, ====, >>>>)

4. Teste ob Code funktioniert

5. Stage und commit:
   git add [file]
   git commit -m "fix: resolve merge conflict in [file]"
```

---

### ❌ Problem 9: Vercel Deployment schlägt fehl

**Symptom:**
```
Build failed on Vercel
```

**Diagnose:**
```
1. Check Vercel Build Log für Error-Message
2. Funktioniert npm run build lokal?
3. Sind alle Dependencies in package.json?
4. .env Variables in Vercel gesetzt?
```

**Lösung (Cursor Prompt):**
```
Debug Vercel deployment failure:

Error from Vercel:
[paste error message]

Tasks:
1. Ensure npm run build works locally
2. Check all imports are valid
3. Verify environment variables
4. Check Node version compatibility
5. Review Vercel build settings

Provide specific fix.
```

---

### ❌ Problem 10: Performance plötzlich schlecht

**Symptom:**
- Vorher gut, jetzt schlecht
- Lighthouse Score gesunken

**Diagnose:**
```
1. Was wurde zuletzt geändert?
   git log --oneline -5

2. Neue Dependencies?
   git diff package.json

3. Neue Bilder?
   git diff public/images/

4. Lighthouse vergleichen: Vorher vs. Nachher
```

**Lösung:**
```
Systematisches Debugging:

1. Revert letzten Commit:
   git revert HEAD
   → Lighthouse Test
   → Score besser? → Problem gefunden!

2. Cherry-pick gute Änderungen:
   git cherry-pick [commit-hash]

3. Identifiziere Culprit:
   - Zu große Bilder?
   - Neue Library?
   - Ineffizienter Code?

4. Fix implementieren ohne Performance-Impact
```

---

## 🎯 TEIL 7: QUICK-REFERENCE CARDS

**Print-worthy Cheatsheets für tägliche Arbeit.**

### 📇 Card 1: Daily Commands

```
┌───────────────────────────────────────────────────┐
│ DAILY DEV COMMANDS                                │
├───────────────────────────────────────────────────┤
│                                                    │
│ Start Dev Server:                                 │
│   npm run dev                                     │
│   → http://localhost:4321                         │
│                                                    │
│ Build Production:                                 │
│   npm run build                                   │
│   → Output: /dist/                                │
│                                                    │
│ Preview Production:                               │
│   npm run preview                                 │
│   → Test vor Deploy                               │
│                                                    │
│ TypeScript Check:                                 │
│   npm run astro check                             │
│   → Fix Types                                     │
│                                                    │
│ Git Workflow:                                     │
│   git add .                                       │
│   git commit -m "type: description"              │
│   git push origin main                            │
│                                                    │
│ Cursor Shortcuts:                                 │
│   CMD+I → Composer (new features)                │
│   CMD+K → Quick edit (existing files)            │
│   CMD+L → Chat with Claude                       │
│                                                    │
└───────────────────────────────────────────────────┘
```

---

### 📇 Card 2: Color Palette

```
┌───────────────────────────────────────────────────┐
│ BRAND COLOR PALETTE                               │
├───────────────────────────────────────────────────┤
│                                                    │
│ Primary:                                          │
│   #3d2817 ███ Rich Brown (Headlines, Body)       │
│   #8b7355 ███ Warm Brown (CTAs, Links)           │
│                                                    │
│ Neutrals:                                         │
│   #fafaf9 ███ Warm White (Light Background)      │
│   #f4f1eb ███ Cream (Subtle Background)          │
│   #e8ded1 ███ Beige (Borders, Dividers)          │
│                                                    │
│ Dark Mode:                                        │
│   #1c120b ███ Warm Black (Dark Background)       │
│   #2a1c12 ███ Deep Brown (Dark Sections)         │
│                                                    │
│ Accents:                                          │
│   #BFA980 ███ Gold (Highlights)                  │
│   #7B3F42 ███ Wine Red (Special CTAs)            │
│                                                    │
│ Usage:                                            │
│   bg-[#fafaf9] text-[#3d2817]                    │
│   bg-[#8b7355] text-white                        │
│                                                    │
│ Contrast:                                         │
│   Always >4.5:1 for text                         │
│   Always >3:1 for UI elements                    │
│                                                    │
└───────────────────────────────────────────────────┘
```

---

### 📇 Card 3: Typography Scale

```
┌───────────────────────────────────────────────────┐
│ TYPOGRAPHY SYSTEM                                 │
├───────────────────────────────────────────────────┤
│                                                    │
│ Fonts:                                            │
│   Headlines: Playfair Display (400)              │
│   Body: DM Sans (300, 400, 500)                  │
│                                                    │
│ Scale (Desktop → Mobile):                         │
│   H1: 64px → 40px (font-playfair)                │
│   H2: 48px → 32px (font-playfair)                │
│   H3: 32px → 24px (font-playfair)                │
│   Body: 18px → 16px (font-dm-sans)               │
│   Small: 14px → 14px (font-dm-sans)              │
│                                                    │
│ Line Height:                                      │
│   Headlines: 1.2 (tight)                          │
│   Body: 1.6 (comfortable)                         │
│                                                    │
│ Letter Spacing:                                   │
│   Headlines: -0.02em (tighter)                    │
│   Body: normal                                    │
│   Buttons: 0.02em (wider)                         │
│                                                    │
│ Weights:                                          │
│   Headlines: 400 (regular)                        │
│   Body: 300 (light), 400 (regular)               │
│   CTA: 500 (medium)                               │
│                                                    │
│ Tailwind Classes:                                 │
│   text-4xl md:text-6xl → H1                      │
│   text-3xl md:text-5xl → H2                      │
│   text-2xl md:text-4xl → H3                      │
│   text-base md:text-lg → Body                    │
│                                                    │
└───────────────────────────────────────────────────┘
```

---

### 📇 Card 4: Spacing System

```
┌───────────────────────────────────────────────────┐
│ SPACING SYSTEM (4px Base Grid)                   │
├───────────────────────────────────────────────────┤
│                                                    │
│ Tailwind Units:                                   │
│   1 = 4px    |  8 = 32px   |  16 = 64px          │
│   2 = 8px    |  10 = 40px  |  20 = 80px          │
│   3 = 12px   |  12 = 48px  |  24 = 96px          │
│   4 = 16px   |  14 = 56px  |  32 = 128px         │
│   6 = 24px   |                                    │
│                                                    │
│ Component Internal:                               │
│   XS: p-4 (16px) → Card padding small            │
│   SM: p-6 (24px) → Card padding standard         │
│   MD: p-8 (32px) → Section padding               │
│   LG: p-12 (48px) → Hero padding                 │
│                                                    │
│ Between Elements:                                 │
│   Tight: gap-2 (8px) → List items                │
│   Normal: gap-4 (16px) → Paragraph to paragraph  │
│   Loose: gap-8 (32px) → Section elements         │
│   Very Loose: gap-12 (48px) → Major sections     │
│                                                    │
│ Sections Vertical:                                │
│   Mobile: py-12 (48px min)                        │
│   Tablet: py-16 (64px)                            │
│   Desktop: py-20 md:py-32 (80-128px)             │
│                                                    │
│ Container Horizontal:                             │
│   Mobile: px-4 (16px)                             │
│   Tablet: px-6 md:px-8 (24-32px)                 │
│   Desktop: max-w-7xl mx-auto (1280px max)        │
│                                                    │
└───────────────────────────────────────────────────┘
```

---

### 📇 Card 5: Breakpoints

```
┌───────────────────────────────────────────────────┐
│ RESPONSIVE BREAKPOINTS                            │
├───────────────────────────────────────────────────┤
│                                                    │
│ Tailwind Breakpoints:                             │
│   sm: 640px   → Small tablets                     │
│   md: 768px   → Tablets                           │
│   lg: 1024px  → Small desktops                    │
│   xl: 1280px  → Desktops                          │
│   2xl: 1536px → Large desktops                    │
│                                                    │
│ Testing Viewports:                                │
│   📱 Mobile: 375px (iPhone SE)                    │
│   📱 Mobile: 390px (iPhone 14)                    │
│   📱 Tablet: 768px (iPad)                         │
│   💻 Desktop: 1440px (Standard)                   │
│   💻 Desktop: 1920px (Full HD)                    │
│                                                    │
│ Usage Pattern:                                    │
│   text-base md:text-lg lg:text-xl                │
│   ↑ Mobile  ↑ Tablet   ↑ Desktop                 │
│                                                    │
│ Grid Columns:                                     │
│   Mobile: grid-cols-1                             │
│   Tablet: md:grid-cols-2                          │
│   Desktop: lg:grid-cols-3                         │
│                                                    │
│ Touch Targets:                                    │
│   Mobile: min 44px × 44px (Apple HIG)            │
│   Desktop: min 32px × 32px                        │
│                                                    │
│ Dev Tools:                                        │
│   Chrome: CMD+SHIFT+M (Device Toolbar)           │
│   Toggle between devices                          │
│   Throttle network/CPU                            │
│                                                    │
└───────────────────────────────────────────────────┘
```

---

## 🎓 TEIL 8: LEARNING RESOURCES

**Für Deep-Dives wenn nötig.**

### 📚 Official Docs

```
Astro:
→ https://docs.astro.build/

React:
→ https://react.dev/

Tailwind CSS:
→ https://tailwindcss.com/docs

Framer Motion:
→ https://www.framer.com/motion/

Lighthouse:
→ https://developer.chrome.com/docs/lighthouse/

Web Vitals:
→ https://web.dev/vitals/
```

---

### 🎯 Rams/Jobs Design Principles

**Dieter Rams' 10 Principles:**
1. Good design is innovative
2. Good design makes a product useful
3. Good design is aesthetic
4. Good design makes a product understandable
5. Good design is unobtrusive
6. Good design is honest
7. Good design is long-lasting
8. Good design is thorough down to the last detail
9. Good design is environmentally friendly
10. Good design is as little design as possible → **"LESS BUT BETTER"**

**Steve Jobs Approach:**
- Obsessive attention to detail
- Simplicity as sophistication
- Integration of form and function
- User experience above all
- "It just works"

**Apply to Web:**
- Less features, more polish
- Every pixel intentional
- Performance = design
- User journey frictionless
- Details matter (micro-interactions, transitions, spacing)

---

## 📄 CHANGELOG

```
VERSION 2.0 (2025-10-25)
─────────────────────────
Major restructure for unified workflow.

ADDED:
+ Unified Workflow (Phase 1-4 Standard-Prozess)
+ Decision Trees (5 kritische Entscheidungen)
+ Pattern Library (10 Cursor Prompts + 10 Code Snippets)
+ Quality Gates (Pre/Post-Code Checklisten)
+ Troubleshooting (10 häufigste Probleme + Fixes)
+ Quick-Reference Cards (5 Print-Ready Cheatsheets)

IMPROVED:
* Executive Summary (30-Sekunden-Überblick)
* Workflow-Klarheit (+200% Detail-Level)
* Copy-Paste-Readiness (alle Prompts sofort nutzbar)
* Consistency (jeder Task folgt gleichem Pattern)

REMOVED:
- Abstrakte Sections ohne konkreten Action-Plan
- Redundante Content-Blöcke
- Unklare "Best Practices" ohne Beispiele

VERSION 1.0 (Original)
─────────────────────────
Initial version with basic structure.
```

---

## 🚀 MIGRATION GUIDE (V1 → V2)

**Wenn du von alter Instructions-Datei kommst:**

### Was hat sich geändert?

**ALT (V1):**
```
"Folge Rams/Jobs-Prinzipien"
"Optimiere Performance"
"Nutze Astro Components"
```
→ Abstrakt, keine konkreten Steps

**NEU (V2):**
```
1. Frag Claude: "Plan [Feature]"
2. Paste Cursor-Prompt von Claude
3. Implementiere in Cursor
4. Screenshot zu Claude
5. Approval? → Git commit
```
→ Konkreter, repeatbarer Workflow

### Neue Habits zu lernen:

1. **Immer Workflow befolgen** (Phase 1-4)
2. **Decision Trees nutzen** bei Unsicherheit
3. **Pre/Post-Checklisten** ausfüllen
4. **Pattern Library** für Copy-Paste
5. **Troubleshooting** bei Problemen

### Migration-Steps:

```
1. Lies Executive Summary (oben) → 30 Sekunden
2. Bookmark diese Datei → Daily Reference
3. Nächster Task? → Gehe zu TEIL 2 (Unified Workflow)
4. Unsicher? → TEIL 3 (Decision Trees)
5. Fehler? → TEIL 6 (Troubleshooting)
```

**Du bist ready! 🎯**

---

## ✅ FINAL CHECKLIST (für diese Datei selbst)

```
[ ] Executive Summary klar?
[ ] Workflow konkret genug?
[ ] Decision Trees hilfreich?
[ ] Prompts copy-pasteable?
[ ] Snippets funktionieren?
[ ] Checklisten vollständig?
[ ] Troubleshooting abdeckt häufige Probleme?
[ ] Quick-Reference druckbar?
[ ] Keine Typos?
[ ] Keine broken Markdown?
```

---

**VERSION:** 2.0  
**DATUM:** 2025-10-25  
**STATUS:** Production-Ready ✅  
**NEXT REVIEW:** Nach 50 Commits oder bei Major-Changes

---

## 🎯 HOW TO USE THIS FILE

**Täglich:**
→ Öffne bei jedem neuen Task
→ Gehe zu TEIL 2 (Unified Workflow)
→ Befolge Phase 1-4

**Bei Problemen:**
→ TEIL 6 (Troubleshooting) konsultieren

**Bei Unsicherheit:**
→ TEIL 3 (Decision Trees) nutzen

**Für Code:**
→ TEIL 4 (Pattern Library) copy-pasten

**Quick-Check:**
→ TEIL 5 (Quality Gates) vor Commit

**Remember:**
> "Less but better." - Dieter Rams
> 
> Jeder Task folgt dem GLEICHEN Workflow.
> Zero Waste. Maximum Efficiency.

---

**READY TO BUILD! 🚀**
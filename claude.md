# Teppichhaus am Dornbusch - Technische Systemdokumentation

## Projektübersicht

**Website für:** Teppichhaus am Dornbusch, Frankfurt am Main
**Domain:** teppich-frankfurt.de
**Geschäftsfelder:** Verkauf, Ankauf, Reinigung und Reparatur von Orientteppichen und Perserteppichen

### Technologie-Stack
- **Framework:** Next.js 15.5.4 (App Router)
- **Runtime:** React 19.2.0
- **Styling:** Tailwind CSS 4.1.14
- **Sprache:** TypeScript 5.9.3
- **Email:** Nodemailer 7.0.6
- **Deployment:** Caprover (via GitHub)
- **Repository:** https://github.com/airbussard/Teppichf

---

## Architektur

### Next.js App Router Struktur

```
teppichf/
├── public/                      # Statische Assets
│   └── img/
│       ├── store/              # Geschäftsfotos
│       │   ├── aussen_sehrgut.jpg
│       │   ├── innen.jpg
│       │   ├── teppich2innen_gut.jpg
│       │   ├── teppich3innen_schoen.jpg
│       │   └── teppichinnen_schoen.jpg
│       ├── BILD1.jpeg          # Kundenfoto (Roland Klimas)
│       ├── Geschaeftvonaussen.jpeg
│       ├── Teppichreperatur.jpeg
│       ├── Teppichreperaturnachher.jpeg
│       └── teppichwaesche.jpeg
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root Layout (Navigation + Footer)
│   │   ├── page.tsx           # Homepage
│   │   ├── globals.css        # Globale Styles + Animationen
│   │   ├── verkauf/page.tsx   # Service-Seite: Verkauf
│   │   ├── ankauf/page.tsx    # Service-Seite: Ankauf
│   │   ├── waesche/page.tsx   # Service-Seite: Teppichwäsche
│   │   ├── reparatur/page.tsx # Service-Seite: Reparatur
│   │   ├── kontakt/page.tsx   # Kontaktformular + Google Maps
│   │   ├── impressum/page.tsx # Impressum
│   │   ├── datenschutz/page.tsx # Datenschutzerklärung
│   │   ├── agb/page.tsx       # AGB
│   │   └── api/
│   │       └── contact/route.ts # API Route für E-Mail-Versand
│   └── components/            # Wiederverwendbare Komponenten
│       ├── Navigation.tsx     # Header mit Logo + Navigation
│       ├── Footer.tsx         # Footer mit Links + Credits
│       ├── HeroSlider.tsx     # Auto-rotating Image Slider
│       ├── ImageCompare.tsx   # Before/After Slider (Reparatur)
│       ├── Reviews.tsx        # Google Bewertungen + Lightbox
│       └── CookieConsent.tsx  # DSGVO Cookie Banner
├── next.config.js             # Next.js Konfiguration
├── tailwind.config.ts         # Tailwind CSS Konfiguration
├── tsconfig.json              # TypeScript Konfiguration
└── package.json               # Dependencies

```

---

## Tech Stack Details

### Core Dependencies

| Package | Version | Verwendung |
|---------|---------|------------|
| `next` | 15.5.4 | React Framework mit App Router, SSR, Image Optimization |
| `react` | 19.2.0 | UI Library |
| `tailwindcss` | 4.1.14 | Utility-First CSS Framework |
| `@tailwindcss/postcss` | 4.1.14 | PostCSS Plugin für Tailwind v4 |
| `typescript` | 5.9.3 | Type Safety |
| `nodemailer` | 7.0.6 | SMTP Email-Versand für Kontaktformular |

### Next.js Konfiguration

**`next.config.js`:**
```javascript
const nextConfig = {
  output: 'standalone',  // Docker/Caprover Deployment
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}
```

- **`output: 'standalone'`**: Erstellt eigenständiges Build für Caprover
- **Image Optimization**: Automatische Konvertierung zu AVIF/WebP

---

## Seiten & Routing

### Hauptseiten

| Route | Datei | Beschreibung |
|-------|-------|--------------|
| `/` | `app/page.tsx` | Homepage mit Hero Slider, Services, Über Uns, Reviews |
| `/verkauf` | `app/verkauf/page.tsx` | Teppichverkauf-Seite mit Galerie |
| `/ankauf` | `app/ankauf/page.tsx` | Teppichankauf-Service |
| `/waesche` | `app/waesche/page.tsx` | Teppichwäsche mit kostenlosem Hol-/Bringservice |
| `/reparatur` | `app/reparatur/page.tsx` | Reparatur mit Before/After Slider |
| `/kontakt` | `app/kontakt/page.tsx` | Kontaktformular + Google Maps |

### Rechtliche Seiten

| Route | Datei | Beschreibung |
|-------|-------|--------------|
| `/impressum` | `app/impressum/page.tsx` | Impressum mit Unternehmensdaten |
| `/datenschutz` | `app/datenschutz/page.tsx` | DSGVO-konforme Datenschutzerklärung |
| `/agb` | `app/agb/page.tsx` | Allgemeine Geschäftsbedingungen |

### API Routes

| Route | Datei | Methode | Beschreibung |
|-------|-------|---------|--------------|
| `/api/contact` | `app/api/contact/route.ts` | POST | Sendet Kontaktformular-Daten per E-Mail |

---

## Komponenten

### 1. Navigation (`components/Navigation.tsx`)

**Beschreibung:** Responsive Header mit Logo und Navigationsmenü

**Features:**
- Zweiliges Logo: "Teppichhaus" + "am Dornbusch"
- Mobile Hamburger-Menü
- Links zu allen Service-Seiten
- Kontakt-Button (hervorgehoben)

**Responsive Breakpoints:**
- `sm`: Tablets (640px+)
- `md`: Desktop (768px+)
- `lg`: Large Desktop (1024px+)

---

### 2. Footer (`components/Footer.tsx`)

**Beschreibung:** Footer mit Spalten-Layout

**Struktur:**
- Spalte 1: Unternehmensinformationen
- Spalte 2: Schnelllinks (Services)
- Spalte 3: Kontaktinformationen
- Spalte 4: Rechtliches (Impressum, Datenschutz, AGB)
- Copyright-Zeile mit dev.tech Credits

---

### 3. HeroSlider (`components/HeroSlider.tsx`)

**Client Component** (`'use client'`)

**Beschreibung:** Auto-rotierender Image Slider für Homepage

**Features:**
- 3 Slides mit Geschäftsfotos
- Auto-Rotation alle 5 Sekunden
- Manuelle Navigation: Pfeiltasten + Dots
- Smooth Fade-Transitions (1s)
- Gradient Overlay für Text-Lesbarkeit
- CTA Buttons: "Teppiche ansehen" + "Kontakt aufnehmen"

**Animationen:**
- `animate-fade-in`: Titel
- `animate-fade-in-delay`: Untertitel (0.2s delay)
- `animate-fade-in-delay-2`: Buttons (0.4s delay)

**Slides:**
```typescript
const slides = [
  {
    image: '/img/store/aussen_sehrgut.jpg',
    title: 'Ihr Spezialist für Orientteppiche in Frankfurt',
    subtitle: 'Verkauf, Ankauf, Reinigung und professionelle Reparatur...'
  },
  // ... 2 weitere Slides
]
```

---

### 4. ImageCompare (`components/ImageCompare.tsx`)

**Client Component** (`'use client'`)

**Beschreibung:** Before/After Image Comparison Slider

**Verwendung:** Reparatur-Seite (`/reparatur`)

**Features:**
- Drag-Slider zum Vergleich zweier Bilder
- Touch & Mouse Support
- Responsive Width (100%)
- Custom "VORHER" / "NACHHER" Labels

**Props:**
```typescript
interface ImageCompareProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
}
```

**Technische Details:**
- Verwendet CSS `clip-path` für Bild-Clipping
- State: `sliderPosition` (0-100%)
- Event Handler: `handleMouseDown`, `handleTouchStart`, `handleMove`

---

### 5. Reviews (`components/Reviews.tsx`)

**Client Component** (`'use client'`)

**Beschreibung:** Google Bewertungen mit Lightbox-Funktion

**Features:**
- 7 Google Bewertungen (Durchschnitt: 4.86/5 Sterne)
- Initialen-Avatare (z.B. "HZ", "WG", "RK")
- Besuchsfotos (z.B. Roland Klimas)
- Lightbox für Foto-Vergrößerung
- Star-Rating Komponente
- Link zu Google Maps Bewertungen

**Lightbox:**
```typescript
const [lightboxImage, setLightboxImage] = useState<string | null>(null)

// ESC-Taste zum Schließen
useEffect(() => {
  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape') setLightboxImage(null)
  }
  window.addEventListener('keydown', handleEsc)
  return () => window.removeEventListener('keydown', handleEsc)
}, [])
```

**Animationen:**
- `animate-fadeIn`: Hintergrund-Overlay (0.3s)
- `animate-zoomIn`: Bild-Zoom von 80% auf 100% (0.3s)

**Review Interface:**
```typescript
interface Review {
  name: string
  text: string
  rating: number
  badge?: string          // z.B. "Local Guide"
  initials: string        // z.B. "HZ"
  visitPhoto?: string     // Optional: Besuchsfoto
}
```

---

### 6. CookieConsent (`components/CookieConsent.tsx`)

**Client Component** (`'use client'`)

**Beschreibung:** DSGVO-konformes Cookie Consent Banner

**Features:**
- Erscheint beim ersten Besuch
- LocalStorage: `cookieConsent=accepted`
- "Akzeptieren" Button
- Link zur Datenschutzerklärung
- Fade-In Animation
- Fixed Position (Bottom)

**LocalStorage Check:**
```typescript
useEffect(() => {
  const consent = localStorage.getItem('cookieConsent')
  if (consent === 'accepted') {
    setShowBanner(false)
  }
}, [])
```

---

## Styling System

### Tailwind CSS v4

**Import-Methode (`globals.css`):**
```css
@import "tailwindcss";
```

**Wichtig:** Tailwind v4 verwendet `@import` statt `@tailwind` Direktiven

### Custom Animations

**`globals.css`:**

```css
/* Hero Slider Animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in { animation: fadeIn 0.8s ease-out; }
.animate-fade-in-delay { animation: fadeIn 0.8s ease-out 0.2s both; }
.animate-fade-in-delay-2 { animation: fadeIn 0.8s ease-out 0.4s both; }

/* Lightbox Animations */
@keyframes zoomIn {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}

.animate-zoomIn { animation: zoomIn 0.3s ease-out; }
.animate-fadeIn { animation: fadeIn 0.3s ease-out; }
```

### Farbschema

| Farbe | Verwendung | Tailwind Class |
|-------|------------|----------------|
| Rot (#B91C1C) | Primary (Logo, Buttons, Akzente) | `bg-red-700`, `text-red-700` |
| Grau | Text, Hintergründe | `text-gray-600`, `bg-gray-50` |
| Weiß | Text auf dunklem Hintergrund | `text-white` |

### Responsive Breakpoints

```css
sm:  640px   /* Tablets */
md:  768px   /* Desktop */
lg:  1024px  /* Large Desktop */
xl:  1280px  /* Extra Large Desktop */
2xl: 1536px  /* 2K+ Displays */
```

**Beispiel:**
```tsx
<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
  Titel
</h1>
```
- Mobile: `text-3xl` (1.875rem)
- Tablet: `text-4xl` (2.25rem)
- Desktop: `text-5xl` (3rem)

---

## Features

### 1. Hero Slider (Homepage)

**Komponente:** `HeroSlider.tsx`
**Location:** Homepage (`/`)

**Funktionsweise:**
1. `useState` für `currentSlide` (0-2)
2. `useEffect` mit `setInterval` (5000ms) für Auto-Rotation
3. Manual Controls: `nextSlide()`, `prevSlide()`, `goToSlide(index)`
4. Conditional Rendering mit `opacity-100` / `opacity-0`

**Performance:**
- Erstes Bild hat `priority={true}` für schnelleres Laden
- Lazy Loading für weitere Slides

---

### 2. Before/After Image Slider (Reparatur)

**Komponente:** `ImageCompare.tsx`
**Location:** `/reparatur`

**Bilder:**
- Before: `/img/Teppichreperatur.jpeg`
- After: `/img/Teppichreperaturnachher.jpeg`

**Technische Implementation:**
```typescript
const handleMove = (clientX: number, bounds: DOMRect) => {
  const x = clientX - bounds.left
  const position = (x / bounds.width) * 100
  setSliderPosition(Math.min(Math.max(position, 0), 100))
}
```

**CSS Trick:**
```tsx
<div style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
  {/* After Image */}
</div>
```

---

### 3. Lightbox für Besuchsfotos

**Komponente:** `Reviews.tsx`
**Location:** Homepage Reviews-Sektion

**Verwendung:**
- Klick auf Besuchsfoto öffnet Fullscreen-Lightbox
- Schließen via: ESC-Taste, Klick auf Hintergrund, X-Button

**State Management:**
```typescript
const [lightboxImage, setLightboxImage] = useState<string | null>(null)
```

**Render Logic:**
```tsx
{lightboxImage && (
  <div className="fixed inset-0 bg-black bg-opacity-90 z-50">
    <Image src={lightboxImage} alt="Vergrößertes Foto" ... />
  </div>
)}
```

---

### 4. Kontaktformular mit E-Mail-Versand

**Frontend:** `app/kontakt/page.tsx`
**Backend:** `app/api/contact/route.ts`
**Email Library:** Nodemailer

**Formular-Felder:**
- Name (required)
- E-Mail (required, type="email")
- Telefon (optional)
- Nachricht (required, textarea)

**API Route (`/api/contact`):**

```typescript
export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json()

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: 'info@knmail.de',
    subject: `Kontaktanfrage von ${name}`,
    text: `Name: ${name}\nE-Mail: ${email}\nTelefon: ${phone}\n\nNachricht:\n${message}`,
  })

  return Response.json({ success: true })
}
```

**Environment Variables (erforderlich):**
```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

---

### 5. Google Maps Integration

**Location:** `/kontakt`

**Embed Code:**
```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2555.4807644989843..."
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
/>
```

**Adresse:** Am Dornbusch 24, 60320 Frankfurt am Main

---

### 6. Cookie Consent (DSGVO)

**Komponente:** `CookieConsent.tsx`
**Verwendung:** In `layout.tsx` eingebunden (erscheint auf allen Seiten)

**DSGVO-Konformität:**
- Opt-In Banner (kein Pre-Checked)
- LocalStorage statt Cookies für Consent-Status
- Link zur Datenschutzerklärung
- Kein Tracking vor Zustimmung

---

## Unternehmensdaten

### S. Koukpari Handelsgesellschaft mbH

**Rechtliche Daten:**
```
Sitz: Am Weissen Berg 5, 61476 Kronberg/Taunus
Lager: Gutleutstr. 320, 60327 Frankfurt
Ladengeschäft: Am Dornbusch 24, 60320 Frankfurt am Main

Vertretungsberechtigter: Sirous Koukpari
Registergericht: Amtsgericht Königstein/Ts. HRB 5350
Umsatzsteuer-ID: DE212103524

Kontakt:
Telefon: 069 - 232 581
E-Mail: info@teppichankauf24.de
```

### Google Bewertungen

**Durchschnitt:** 4.86/5 Sterne (7 Bewertungen)

**Bewertungen:**

1. **Hans Joachim Ziegenhagen** (Local Guide) - ⭐⭐⭐⭐⭐
   > "Top Adresse. Haben einen neuen Teppich erworben, nach Besuch bei und Vergleich mit 3 anderen Anbietern..."

2. **Wiebke Gorny** - ⭐⭐⭐⭐⭐
   > "Habe einen empfindlichen Teppich hier reinigen lassen. Er wurde abgeholt und gebracht..."

3. **Andy "Paul Paule" Brauy** (Local Guide) - ⭐⭐⭐⭐⭐
   > "Habe ein Termin bei meiner verstorbenen Tante in der Wohnung gemacht..."

4. **Annemie Pauli-Binten** - ⭐⭐⭐⭐⭐
   > "Im Teppichhaus am Dornbusch habe ich einen gebrauchten Teppich zu einem fairen Preis erworben..."

5. **Oliver G.** - ⭐⭐⭐⭐⭐
   > "Sehr höfliche und unaufdringliche Beratung. Gekaufte Teppiche werden nach Hause geliefert..."

6. **S. Buth** - ⭐⭐⭐⭐
   > "Nette und kompetente Mitarbeiter, nicht aufdringlich. Leider schwierige Parksituation"

7. **Roland Klimas** (Local Guide, mit Besuchsfoto) - ⭐⭐⭐⭐⭐
   > "Freundlich und Kompetent !"

---

## Deployment

### Caprover Setup

**Server:** Caprover (Docker-basiert)
**Repository:** https://github.com/airbussard/Teppichf

**Build-Prozess:**

1. **GitHub Push:** Code wird zu GitHub gepusht
2. **Caprover Webhook:** Caprover erkennt neuen Commit
3. **Docker Build:**
   - `npm install`
   - `npm run build` (Next.js Standalone Build)
   - `output: 'standalone'` erstellt optimiertes Bundle
4. **Container Start:** Node.js Server startet auf Port 3000
5. **Reverse Proxy:** Caprover leitet Domain auf Container

**Dockerfile (automatisch generiert):**
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

### Environment Variables (Caprover)

**Erforderlich für Kontaktformular:**
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

**Hinweis:** Bei Gmail App-Passwort verwenden (nicht normales Passwort)

---

## Image Management

### Verzeichnisstruktur

**WICHTIG:** Alle statischen Dateien müssen in `public/` (Projekt-Root) liegen!

```
public/
└── img/
    ├── store/                    # Geschäftsfotos für Hero Slider & Galerie
    │   ├── aussen_sehrgut.jpg
    │   ├── innen.jpg
    │   ├── teppich2innen_gut.jpg
    │   ├── teppich3innen_schoen.jpg
    │   └── teppichinnen_schoen.jpg
    ├── BILD1.jpeg                # Kundenfoto (Roland Klimas Review)
    ├── Geschaeftvonaussen.jpeg   # Alternativ-Foto
    ├── Teppichreperatur.jpeg     # Before-Bild
    ├── Teppichreperaturnachher.jpeg  # After-Bild
    └── teppichwaesche.jpeg       # Teppichwäsche-Seite
```

### Next.js Image Component

**Verwendung:**
```tsx
import Image from 'next/image'

// Mit festen Dimensionen (empfohlen)
<Image
  src="/img/store/aussen_sehrgut.jpg"
  alt="Teppichhaus Außenansicht"
  width={600}
  height={400}
  className="rounded-xl"
/>

// Mit fill (für flexible Container)
<Image
  src="/img/hero.jpg"
  alt="Hero"
  fill
  className="object-cover"
  priority  // Für Above-the-Fold Bilder
/>
```

**Optimierungen:**
- Automatische Konvertierung zu AVIF/WebP
- Lazy Loading (außer `priority={true}`)
- Responsive Srcset (basierend auf `deviceSizes`)

### Troubleshooting: Case-Sensitivity

**Problem:** Bilder werden lokal (macOS) angezeigt, aber nicht auf Linux-Server

**Grund:**
- macOS: Case-insensitive Dateisystem (`image.JPG` = `image.jpg`)
- Linux: Case-sensitive Dateisystem (`image.JPG` ≠ `image.jpg`)

**Lösung:**
```bash
# Alle Dateinamen lowercase
mv image.JPG image.jpg
```

**Best Practice:** Immer lowercase Extensions verwenden (`.jpg`, `.jpeg`, `.png`)

---

## Konfigurationsdateien

### next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',          // Für Caprover/Docker
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}

module.exports = nextConfig
```

### tailwind.config.ts

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
}

export default config
```

### postcss.config.js

**WICHTIG für Tailwind v4:**
```javascript
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

**Hinweis:** Tailwind v4 benötigt separates PostCSS Plugin!

### tsconfig.json

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**Path Alias:** `@/` → `./src/`

**Verwendung:**
```typescript
import Navigation from '@/components/Navigation'
```

---

## Wartung & Content-Updates

### Neue Bewertung hinzufügen

**Datei:** `src/components/Reviews.tsx`

```typescript
const reviews: Review[] = [
  // ... bestehende Reviews
  {
    name: 'Max Mustermann',
    text: 'Toller Service...',
    rating: 5,
    badge: 'Local Guide',      // Optional
    initials: 'MM',
    visitPhoto: '/img/max.jpg' // Optional: Besuchsfoto
  }
]
```

**Durchschnitt wird automatisch berechnet:**
```typescript
const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
```

---

### Bilder austauschen

1. **Neues Bild hochladen:**
   ```bash
   # WICHTIG: In public/img/ oder public/img/store/
   cp neues-bild.jpg public/img/store/
   ```

2. **Referenz in Code aktualisieren:**
   ```typescript
   // z.B. in HeroSlider.tsx
   {
     image: '/img/store/neues-bild.jpg',
     title: '...',
     subtitle: '...'
   }
   ```

3. **Build & Deploy:**
   ```bash
   git add public/img/store/neues-bild.jpg
   git add src/components/HeroSlider.tsx
   git commit -m "Update: Neues Hero-Bild hinzugefügt"
   git push origin main
   ```

---

### Kontaktdaten ändern

**Footer:** `src/components/Footer.tsx`
```typescript
<p className="text-gray-600">Am Dornbusch 24</p>
<p className="text-gray-600">60320 Frankfurt am Main</p>
<p className="text-gray-600">Telefon: 069 - 232 581</p>
```

**Impressum:** `src/app/impressum/page.tsx`

**Kontaktseite:** `src/app/kontakt/page.tsx`

**E-Mail-Empfänger:** `src/app/api/contact/route.ts`
```typescript
to: 'info@knmail.de',  // Hier ändern
```

---

### Service-Texte anpassen

**Dateien:**
- `src/app/verkauf/page.tsx`
- `src/app/ankauf/page.tsx`
- `src/app/waesche/page.tsx`
- `src/app/reparatur/page.tsx`

**Struktur jeder Service-Seite:**
1. Hero Section (Titel + Untertitel)
2. Content Section (Text + Features)
3. Gallery (optional)
4. CTA Section (Call-to-Action)

**Beispiel (Teppichwäsche):**
```tsx
<p className="text-lg text-gray-600 mb-4">
  <strong>Kostenloser Hol- und Bringservice:</strong>
  Für Ihren Komfort holen wir Ihren Teppich bei Ihnen zu Hause ab...
</p>
```

---

## Troubleshooting

### Problem: Bilder werden nicht angezeigt

**Symptom:** `The requested resource isn't a valid image ... received null`

**Ursachen & Lösungen:**

1. **Falscher Pfad:**
   ```
   ❌ src/app/public/img/bild.jpg
   ✅ public/img/bild.jpg
   ```

2. **Case-Sensitivity:**
   ```
   ❌ /img/Bild.JPG  (auf Linux-Server)
   ✅ /img/bild.jpg
   ```

3. **Next.js Image `fill` ohne Container-Größe:**
   ```tsx
   ❌ <Image src="..." fill />  // Parent hat keine Höhe

   ✅ <div className="relative h-64">
        <Image src="..." fill />
      </div>
   ```

---

### Problem: Tailwind Styles funktionieren nicht

**Symptom:** Klassen wie `bg-red-700` werden nicht angewendet

**Lösung für Tailwind v4:**

1. **Prüfen: PostCSS Config**
   ```javascript
   // postcss.config.js
   module.exports = {
     plugins: {
       '@tailwindcss/postcss': {},  // NICHT 'tailwindcss'
     },
   }
   ```

2. **Prüfen: globals.css**
   ```css
   @import "tailwindcss";  /* NICHT @tailwind base; etc. */
   ```

3. **Rebuild:**
   ```bash
   rm -rf .next
   npm run build
   ```

---

### Problem: E-Mails werden nicht versendet

**Symptom:** Formular sendet, aber keine E-Mail kommt an

**Debugging:**

1. **Environment Variables prüfen:**
   ```bash
   echo $SMTP_HOST
   echo $SMTP_USER
   # Müssen gesetzt sein!
   ```

2. **Gmail App-Passwort:**
   - Normale Gmail-Passwörter funktionieren nicht
   - App-Passwort erstellen: https://myaccount.google.com/apppasswords

3. **Server-Logs prüfen:**
   ```bash
   # Caprover Logs
   docker logs -f captain-teppichf
   ```

4. **Test API Route direkt:**
   ```bash
   curl -X POST https://teppich-frankfurt.de/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@test.de","message":"Test"}'
   ```

---

## Development

### Lokale Entwicklung

```bash
# Installation
npm install

# Dev Server starten (Hot Reload)
npm run dev
# → http://localhost:3000

# Production Build testen
npm run build
npm run start
# → http://localhost:3000

# Linting
npm run lint
```

### Build-Optimierung

**Standalone Output:**
```javascript
// next.config.js
output: 'standalone'
```

**Vorteile:**
- Kleineres Bundle (nur Dependencies, die tatsächlich verwendet werden)
- Schnellere Container-Starts
- Optimiert für Docker/Caprover

**Build-Größe prüfen:**
```bash
npm run build
# .next/standalone/  ~50MB (statt ~200MB)
```

---

## Sicherheit

### DSGVO-Konformität

✅ **Cookie Consent Banner**
✅ **Datenschutzerklärung**
✅ **Impressum**
✅ **Opt-In (kein Pre-Tracking)**
✅ **LocalStorage statt Third-Party Cookies**

### E-Mail-Formular

✅ **Server-Side Processing** (API Route)
✅ **Kein direktes mailto:** (verhindert Spam)
✅ **Input Validation** (required fields)
✅ **Environment Variables** für Credentials

### Best Practices

1. **Keine Secrets im Code:**
   ```typescript
   ❌ const password = 'mypassword123'
   ✅ const password = process.env.SMTP_PASS
   ```

2. **Type Safety:**
   ```typescript
   // TypeScript verhindert Runtime-Fehler
   interface Review {
     name: string
     rating: number  // KEIN string!
   }
   ```

3. **ESLint:**
   ```bash
   npm run lint
   # Prüft auf häufige Fehler
   ```

---

## Performance

### Lighthouse Score (Ziel)

- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 100

### Optimierungen

1. **Image Optimization:**
   - AVIF/WebP Format
   - Lazy Loading
   - Responsive Sizes

2. **Code Splitting:**
   - Automatisch durch Next.js App Router
   - Client Components nur wo nötig

3. **Caching:**
   - Static Assets (1 Jahr)
   - Dynamic Content (Stale-While-Revalidate)

---

## Credits

**Entwickelt von:** [dev.tech](https://dev.tech)
**Framework:** Next.js 15
**Styling:** Tailwind CSS v4
**Deployment:** Caprover

---

## Version History

### v1.0.0 (2025-10-04)

**Features:**
- ✅ Homepage mit Hero Slider
- ✅ 4 Service-Seiten (Verkauf, Ankauf, Wäsche, Reparatur)
- ✅ Before/After Image Slider (Reparatur)
- ✅ Google Bewertungen mit Lightbox
- ✅ Kontaktformular mit E-Mail-Versand
- ✅ Google Maps Integration
- ✅ Cookie Consent (DSGVO)
- ✅ Rechtliche Seiten (Impressum, Datenschutz, AGB)
- ✅ Responsive Design (Mobile-First)
- ✅ Caprover Deployment

**Fixes:**
- 🐛 Image Path Case-Sensitivity (JPG → jpg)
- 🐛 Public Directory Structure (src/app/public → public)
- 🐛 Tailwind v4 PostCSS Plugin
- 🐛 Review Photo Lightbox statt Profilbild

---

**Letzte Aktualisierung:** 2025-10-04
**Dokumentation erstellt von:** Claude Code

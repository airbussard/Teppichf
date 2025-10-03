# Teppich Frankfurt Website

NextJS Website für das Teppichgeschäft in Frankfurt am Main.

## Features

- 🏠 Homepage mit Hero-Section
- 🛍️ Service-Seiten (Verkauf, Ankauf, Wäsche, Reparatur)
- 🔄 Vorher/Nachher-Slider für Reparaturbilder
- 📧 Kontaktformular mit E-Mail-Integration
- 🗺️ Google Maps Integration
- 🍪 DSGVO-konformes Cookie-Consent-Tool
- ⚖️ Rechtliche Seiten (Impressum, Datenschutz, AGB)

## Setup

1. Abhängigkeiten installieren:
```bash
npm install
```

2. Umgebungsvariablen konfigurieren (`.env.local` erstellen):
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

3. Development Server starten:
```bash
npm run dev
```

4. Build für Produktion:
```bash
npm run build
npm start
```

## Deployment

Das Projekt wird automatisch über GitHub Actions zu Caprover deployed.

### Erforderliche GitHub Secrets:

- `CAPROVER_SERVER` - Caprover Server URL
- `CAPROVER_APP_NAME` - Name der App in Caprover
- `CAPROVER_APP_TOKEN` - Caprover App Token
- `SMTP_HOST` - SMTP Server Host
- `SMTP_PORT` - SMTP Server Port
- `SMTP_USER` - SMTP Benutzername
- `SMTP_PASS` - SMTP Passwort

## Tech Stack

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Email:** Nodemailer
- **Deployment:** Caprover via GitHub Actions

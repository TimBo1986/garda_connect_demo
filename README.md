# Garda Connect - Demo

> **Ein See. Ein Erlebnis. Eine App.**

Eine funktionsfähige Demo-Anwendung für die Garda Connect Plattform - die digitale Zukunft des Gardasee-Tourismus.

## 🎯 Überblick

Garda Connect ist eine innovative Plattform, die den Gardasee-Tourismus revolutioniert durch:

- **KI-gestützte Reiseplanung** - Personalisierte Empfehlungen basierend auf Nutzerpräferenzen
- **Intelligente Besucherlenkung** - Echtzeit-Auslastung und smarte Alternativvorschläge
- **Zentraler Mobility Hub** - Alle Transportmittel (Fähren, Busse, E-Bikes) an einem Ort
- **Lokaler Marktplatz** - Authentische Erlebnisse mit einheimischen Anbietern

## 🚀 Features

### 1. KI-Reise-Co-Pilot (`/copilot`)
- Interaktives Chat-Interface mit KI-Assistent
- Personalisiertes Profil-Setup (Interessen, Budget, Reisetempo)
- Intelligente Empfehlungen für Wein, Kulinarik, Wandern, Familie
- Natürlichsprachliche Interaktion auf Deutsch

### 2. Intelligente Besucherlenkung (`/besucherlenkung`)
- Interaktive Karte des Gardasees
- Echtzeit-Auslastungsanzeige für beliebte Orte
- Farbcodierung: Grün (Entspannt), Gelb (Gut besucht), Rot (Sehr voll)
- Proaktive Alternativvorschläge bei Überfüllung
- Trend-Anzeige (steigend/fallend/stabil)

### 3. Mobility Hub (`/mobility`)
- Navigarda Fähren mit Fahrplänen
- ATV Busnetz-Integration
- E-Bike und Vespa Verleih
- Smarte Auto-Navigation mit Stau-Umfahrung
- Detaillierte Preis- und Zeitinformationen

### 4. Erlebnis-Marktplatz (`/marktplatz`)
- Kuratierte lokale Anbieter (Wein, Olivenöl, Kulinarik)
- Buchbare Mikrotouren mit Local Guides
- Kategoriefilter (Wein, Kulinarik, Abenteuer, Kultur)
- Bewertungssystem und Detailansichten
- Direkte Buchungsfunktion

### 5. Startseite (`/`)
- Hero-Section mit klarem Wertversprechen
- Feature-Übersicht mit Verlinkungen
- Statistiken und Social Proof
- "Wie es funktioniert"-Sektion
- Vorteile und Call-to-Action

## 🛠️ Technologie-Stack

- **Framework:** Next.js 14 (App Router)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment-ready:** Vercel, Netlify, etc.

## 📦 Installation

### Voraussetzungen
- Node.js 18+
- npm oder yarn

### Schritte

1. **Repository klonen:**
```bash
git clone <repository-url>
cd garda_connect_demo
```

2. **Abhängigkeiten installieren:**
```bash
npm install
# oder
yarn install
```

3. **Entwicklungsserver starten:**
```bash
npm run dev
# oder
yarn dev
```

4. **App im Browser öffnen:**
```
http://localhost:3000
```

## 📁 Projektstruktur

```
garda_connect_demo/
├── app/
│   ├── layout.tsx              # Root-Layout mit Navigation
│   ├── page.tsx                # Startseite
│   ├── globals.css             # Globale Styles
│   ├── copilot/
│   │   └── page.tsx           # KI-Co-Pilot Feature
│   ├── besucherlenkung/
│   │   └── page.tsx           # Besucherlenkung mit Karte
│   ├── mobility/
│   │   └── page.tsx           # Mobility Hub
│   └── marktplatz/
│       └── page.tsx           # Lokale Erlebnisse
├── components/
│   └── Navigation.tsx          # Hauptnavigation
├── public/                     # Statische Assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## 🎨 Design-System

### Farben

**Primary (Blau):**
- 50-900: Verschiedene Schattierungen von Hellblau bis Dunkelblau
- Hauptfarbe: `primary-600` (#0087ff)

**Accent (Gelb):**
- Highlight-Farbe für besondere Elemente

### Komponenten-Muster

- **Cards:** Weiß mit Shadow, Hover-Effekte
- **Buttons:** Primary-600 mit Hover-States
- **Modals:** Full-Screen Overlay mit Backdrop
- **Navigation:** Sticky Header mit responsivem Mobile-Menü

## 🔧 Anpassungen

### Demo-Daten ändern

Alle Demo-Daten sind direkt in den Page-Komponenten definiert:

- **Besucherlenkung:** `app/besucherlenkung/page.tsx` - Array `locations`
- **Mobility:** `app/mobility/page.tsx` - Array `transportOptions`
- **Marktplatz:** `app/marktplatz/page.tsx` - Array `experiences`

### Styling anpassen

Tailwind-Konfiguration in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: { /* Ihre Farben */ },
      accent: { /* Ihre Farben */ }
    }
  }
}
```

## 🌐 Deployment

### Vercel (empfohlen)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Dann den /out Ordner hochladen
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🧪 Features der Demo

### Interaktive Elemente

✅ Voll funktionales Chat-Interface
✅ Klickbare Karte mit Locations
✅ Modal-Dialoge für Details
✅ Responsive Navigation
✅ Filter-Funktionen
✅ Hover-States und Animationen

### Simulierte Backend-Logik

- KI-Antworten basierend auf Keywords
- Dynamische Auslastungsberechnung
- Kategoriefilterung
- Bewertungssystem

## 📱 Responsive Design

Die App ist vollständig responsive und optimiert für:

- **Mobile:** 320px - 768px
- **Tablet:** 768px - 1024px
- **Desktop:** 1024px+

## 🎯 Nächste Schritte für Production

Für eine produktionsreife Version sollten folgende Punkte umgesetzt werden:

1. **Backend-Integration:**
   - REST API oder GraphQL
   - Authentifizierung (NextAuth.js)
   - Datenbankanbindung (PostgreSQL, MongoDB)

2. **Echte KI-Integration:**
   - OpenAI API oder Claude API
   - Embeddings für Empfehlungen
   - Kontext-Management

3. **Payment-Integration:**
   - Stripe oder PayPal
   - Buchungsverwaltung
   - E-Mail-Bestätigungen

4. **Echtzeit-Daten:**
   - WebSocket-Verbindung für Live-Auslastung
   - Maps API (Google Maps, Mapbox)
   - Wetter-API Integration

5. **Analytics & Tracking:**
   - Google Analytics
   - User-Verhalten analysieren
   - A/B Testing

6. **SEO & Performance:**
   - Metadata-Optimierung
   - Image-Optimierung
   - Server-Side Rendering
   - Caching-Strategie

## 📄 Lizenz

Diese Demo ist ein Proof-of-Concept für die Garda Connect Plattform.

## 👥 Kontakt

Für Fragen zur Garda Connect Vision und Geschäftsplan:
- **Projekt:** Garda Connect - Die digitale Zukunft des Gardasee-Tourismus
- **Tagline:** Ein See. Ein Erlebnis. Eine App.

---

**Hinweis:** Dies ist eine Demo-Anwendung zur Demonstration der Kernfunktionen. Für eine produktionsreife Version kontaktieren Sie bitte das Entwicklungsteam.

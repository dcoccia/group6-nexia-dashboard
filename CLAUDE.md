# CLAUDE.md — Istruzioni per Claude Code
 
## Contesto del progetto
 
Questo è un MVP di una **dashboard di dynamic pricing per le polizze vita** di Nexia Group, un gruppo bancassicurativo europeo. Il progetto è un prototipo da presentare al board di Nexia per dimostrare le capacità di GFT.
 
La dashboard è destinata al **team pricing interno di Nexia Insurance** e deve mostrare: KPI del portafoglio vita, distribuzione per segmento, quotazioni recenti, e simulazione dell'impatto di un programma wellness sul pricing e sulla retention.
 
Il progetto parte da una **pagina vuota**. Il team chiederà di costruire la dashboard passo dopo passo. Usa la style guide Nexia configurata in Tailwind e i mock data in `/src/data/`.
 
## Stack tecnologico
 
- **React 18** con TypeScript
- **Vite** come bundler
- **Tailwind CSS** per lo styling — i colori e la style guide Nexia sono già configurati in `tailwind.config.js`
- **Recharts** per i grafici
- **Lucide React** per le icone
- **Mock data** in `/src/data/` — nessun backend, nessuna API
## Comandi
 
- `npm run dev` — avvia il dev server e apre la preview nel browser
- `npm run build` — build di produzione
## Struttura del progetto
 
```
src/
  data/             # Mock data JSON (già popolati)
    portfolio.json  # KPI portafoglio vita + serie storica 12 mesi
    requests.json   # Ultime 50 quotazioni polizza vita
    segments.json   # Distribuzione per 5 profili di rischio (età)
    simulation.json # Parametri per simulatore impatto wellness
  App.tsx           # Entry point — pagina vuota, da costruire
  main.tsx          # Bootstrap React + Tailwind
tailwind.config.js  # Style guide Nexia (colori, font, spaziature)
```
 
Il team costruirà componenti e pagine a partire da `App.tsx`. Claude Code può creare nuovi file e cartelle secondo necessità.
 
## Mock data disponibili
 
- **portfolio.json** — KPI del portafoglio vita (polizze attive, raccolta premi, premio medio, lapse rate, NPS, engagement wellness) con valore attuale e periodo precedente. Serie storica mensile: polizze, new business, lapses, premi, claims ratio, tempo medio underwriting.
- **requests.json** — Ultime 50 quotazioni: prodotto (TCM/Vita Intera/Unit-Linked/Income Protection), età, fumatore, capitale assicurato, premio proposto, classe di rischio, canale, stato underwriting, tempo di lavorazione.
- **segments.json** — 5 segmenti per fascia d'età: polizze, premio medio, lapse rate, claims ratio, mix canale, propensione al wellness.
- **simulation.json** — Parametri baseline e coefficienti di impatto del programma wellness su lapse rate, sinistrosità, new business, ricavi. Include anche impatto dell'underwriting automatico sui tempi.
## Linee guida di design
 
### Colori Nexia
- Primary: `nexia-primary` (#1B3A5C) — header, sidebar, titoli
- Accent: `nexia-accent` (#4A90D9) — link, bottoni, highlight
- Success: `nexia-success` (#27AE60) — trend positivi
- Warning: `nexia-warning` (#F39C12) — alert, soglie
- Danger: `nexia-danger` (#E74C3C) — trend negativi, errori
- Background: `nexia-bg` (#F8FAFC) — sfondo pagina
- Card: `nexia-card` (#FFFFFF) — sfondo card e pannelli
- Text: `nexia-text` (#1E293B) — testo principale
- Muted: `nexia-muted` (#64748B) — testo secondario
### Stile visivo
- **Pulito e professionale** — è una dashboard assicurativa, non un'app consumer
- **Densità informativa alta** — i dirigenti vogliono vedere molti dati in poco spazio
- **Tipografia chiara** — numeri ben formattati con separatori delle migliaia
- Bordi arrotondati (rounded-lg), ombre leggere (shadow-sm), spaziatura generosa
### Formattazione numeri
- Importi: `€12.500` con separatore migliaia (formato italiano)
- Percentuali: `12,0%` con virgola decimale (formato italiano)
- Premi: mostrare sempre i centesimi per valori piccoli (€620,00)
- Variazioni: con freccia su/giù e colore (verde = miglioramento, rosso = peggioramento). Nota: per il lapse rate, una diminuzione è positiva (verde).
## Cosa NON fare
 
- Non creare un backend o API — usa solo i mock data in `/src/data/`
- Non installare nuove dipendenze senza che il team lo chieda
- Non cambiare lo stack tecnologico
- Non modificare `tailwind.config.js` — la style guide Nexia è già configurata
- Non creare un'applicazione troppo complessa — meglio poche componenti fatte bene che molte incomplete
---
 
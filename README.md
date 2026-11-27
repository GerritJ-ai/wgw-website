# Website der Wählergemeinschaft Witzwort (WGW)

Statische Website auf Basis von [Astro](https://astro.build). Kein Server, keine Datenbank, keine Cookies –
gebaut und kostenlos ausgeliefert über GitHub Pages.

## Lokal ansehen

```
npm install
npm run dev
```

Danach im Browser `http://localhost:4321` öffnen. `npm run build` erzeugt die fertige Seite in `dist/`.

## Inhalte pflegen

| Was | Wo |
| --- | --- |
| Kontaktdaten, Impressums-Anschrift, Instagram-Link | `src/lib/site.ts` |
| Team (Personen, Ämter, Fotos) | `src/data/team.ts`, Fotos in `src/assets/team/` |
| Programm | `src/pages/programm.astro` |
| Berichte im Archiv | je eine Markdown-Datei in `src/content/berichte/` |
| Beitrittserklärung (PDF) | `public/downloads/beitrittserklaerung-wgw.pdf` |
| Farben und Schriften | `src/styles/global.css`, Regeln in `DESIGN.md` |
| Karte von Witzwort und markierte Orte | `scripts/karte.mjs` (erzeugt `public/karte/witzwort.svg` aus OpenStreetMap), Orte in `src/components/Kartenblatt.astro` |

Ein neuer Bericht ist eine Datei `JJJJ-MM-TT-titel.md` mit diesem Kopf:

```
---
title: "Titel des Berichts"
date: 2026-12-13
bereich: verein        # oder: fraktion
cover: "../../assets/archiv/bild.webp"   # optional
teaser: "Ein bis zwei Sätze für die Übersicht."
---
Text in Markdown …
```

Aktuelle Neuigkeiten kommen aber in der Regel einfach über Instagram – dafür muss an der Website nichts geändert werden.

## Gestaltung

Die Seite ist als Kartenblatt der Marsch gestaltet („Die Marschkarte“). Produktbeschreibung und Gestaltungsregeln stehen in
`PRODUCT.md` und `DESIGN.md`; sie werden vom Design-Skill [Impeccable](https://impeccable.style) gelesen, der unter
`.claude/skills/impeccable` liegt. Die Karte neu erzeugen: `node scripts/karte.mjs --laden`.

## Instagram-Feed

Die Seite zeigt die letzten sechs Beiträge von [@wgw.witzwort](https://www.instagram.com/wgw.witzwort/).
`scripts/fetch-instagram.mjs` holt sie bei jedem Build über einen kostenlosen JSON-Feed von [Behold](https://behold.so)
und speichert Bilder und Texte als Kopie in der Seite. Besucher bauen dadurch keine Verbindung zu Instagram auf
(kein Cookie-Banner nötig). GitHub baut die Seite einmal täglich neu.

Einmalige Einrichtung:

1. Das Instagram-Konto muss ein (kostenloses) Business- oder Creator-Konto sein.
2. Bei behold.so ein kostenloses Konto anlegen, Instagram verbinden und einen Feed vom Typ **JSON** erstellen.
3. Die Feed-Adresse (`https://feeds.behold.so/…`) im GitHub-Repository unter
   *Settings → Secrets and variables → Actions* als Secret `BEHOLD_FEED_URL` speichern.
4. Unter *Actions* den Workflow „Website bauen und veröffentlichen“ einmal von Hand starten.

Ohne Feed-Adresse zeigt die Seite stattdessen einen Hinweis mit Link zum Instagram-Kanal.
Zum lokalen Testen die Adresse in eine Datei `.env` schreiben: `BEHOLD_FEED_URL=https://feeds.behold.so/…`

## Veröffentlichung

`.github/workflows/deploy.yml` baut die Seite bei jedem Push auf `main` und einmal täglich und veröffentlicht sie
auf GitHub Pages (*Settings → Pages → Source: GitHub Actions*). Für die eigene Domain dort unter *Custom domain*
`www.waehlergemeinschaft-witzwort.de` eintragen und beim Domain-Anbieter einen CNAME-Eintrag für `www` auf
`<github-benutzer>.github.io` setzen.

Die alten Jimdo-Adressen (z. B. `/unser-verein/`) leiten automatisch auf die neuen Seiten weiter (`astro.config.mjs`).

# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Einwohnerinnen und Einwohner von Witzwort (Eiderstedt, Nordfriesland, rund 1.000 Einwohner) aller Altersgruppen. Sie kennen die handelnden Personen meist persönlich und kommen über das Handy, oft von Instagram oder einer Suchanfrage. Drei gleichberechtigte Anliegen (vom Auftraggeber am 27.11.2026 bestätigt: „alles gleich wichtig“):

- sehen, was im Dorf los ist und was die WGW gerade macht;
- überlegen, ob sie im Verein mitmachen wollen;
- wissen wollen, wer im Gemeinderat sitzt, wofür die Fraktion steht und wen sie ansprechen können.

## Product Purpose

Website der Wählergemeinschaft Witzwort (WGW), gegründet 1978. Sie stellt Verein und Fraktion als zwei Bereiche einer Gemeinschaft vor, zeigt Aktuelles, nennt Ansprechpartner und erklärt den Vereinsbeitritt. Erfolg heißt: Wer aus dem Dorf die Seite öffnet, findet in Sekunden das Aktuelle, das richtige Gesicht und den Weg zum Mitmachen.

## Positioning

Eine parteiunabhängige Wählergemeinschaft, die seit ihrer Gründung ohne Unterbrechung die Mehrheit im Gemeinderat und den Bürgermeister stellt, und zugleich ein Dorfverein, dessen Aktionen (Weihnachtsmarkt mit Tannenbaumverkauf, Tolk-Schau-Ausflug, Dorfgrillen) allen offenstehen, ob Mitglied oder nicht. Arbeitet ohne Fraktionszwang und ist keiner Ideologie verpflichtet.

## Operating Context

- Neuigkeiten entstehen auf Instagram (@wgw.witzwort); die Website zeigt die letzten sechs Beiträge als lokale Kopie (täglicher Build), ohne Verbindung der Besucher zu Instagram.
- Der Beitritt läuft auf Papier: Beitrittserklärung als PDF herunterladen, ausdrucken, beim Vereinsvorsitzenden abgeben. Jahresbeitrag 12 €.
- Kontakt läuft über Telefon und E-Mail einzelner Personen, nicht über Formulare.
- Gepflegt wird die Seite ehrenamtlich und selten; Inhalte liegen als Dateien im Repository.

## Capabilities and Constraints

- Statische Astro-Seite auf GitHub Pages, kostenlos. Kein Server, keine Formulare, keine Cookies, keine Analyse, keine Inhalte von Dritten im Browser der Besucher. Schriften werden selbst gehostet.
- Seiten: Start, Aktuelles (Instagram + Archiv mit 40 Berichten 2017–2023), Verein, Fraktion, Programm, Team, Ehrenbürgermeister, Mitglied werden, Satzung, Impressum, Datenschutz.
- Ansprache gemischt (bestätigt): Verein per Du, Fraktion und Politik per Sie.
- Inhalte sind Stand 2023 und werden vom Vorstand noch aktualisiert; Texte nicht inhaltlich umschreiben.
- Offen: Postanschrift fürs Impressum.

## Brand Commitments

- Das runde Logo „Die WGW Aktiv – Wir gemeinsam für Witzwort!“ bleibt (bestätigt). Vorhanden nur in geringer Auflösung (ca. 190 px), `src/assets/logo.png`.
- Rot bleibt die erkennbare Vereinsfarbe (bestätigt).
- Leitsatz: „Für unsere Gemeinde machen wir uns stark.“ Begrüßung: „Moin moin“.
- Soll nicht wirken wie eine Agentur-/Start-up-Seite (städtisch, kühl) und nicht altbacken wie eine Vereins-Homepage von früher (bestätigt).

## Evidence on Hand

- Portraitfotos von neun Teammitgliedern und des Ehrenbürgermeisters, alle vor rotem Vorhang bzw. im Freien: `src/assets/team/`.
- Eigene Veranstaltungsfotos (Tolk-Schau, Weihnachtsmarkt, Pflanzaktionen, Gruppenfoto der Kandidaten 2023): `src/assets/archiv/`, `src/assets/bilder/`.
- Wahlergebnis 14.05.2023: 60,8 %, 1.480 Stimmen, 7 von 11 Sitzen, Wahlbeteiligung 59,6 %.
- 66 Mitglieder (Stand 2023), Gründung 1978.
- Symbolbilder von Pixabay (Rapsfeld, Glühbirne, Hände) sind austauschbar und keine eigenen Aufnahmen.
- Nicht vorhanden und nicht zu erfinden: Zitate von Bürgern, aktuelle Termine, Zahlen nach 2023, Fotos vom Ort Witzwort selbst (Kirche, Dörpshuus, Landschaft).

## Product Principles

1. Gesichter vor Institution: Man kennt sich; Personen und Ansprechbarkeit tragen die Seite.
2. Zwei Bereiche, eine Gemeinschaft: Verein und Fraktion sind gleichberechtigt und klar unterscheidbar.
3. Für alle im Dorf: Angebote und Ton schließen niemanden aus, auch Nichtmitglieder und politisch Andersdenkende nicht.
4. Sachlich statt Wahlkampf: Aussagen sind belegbar, keine Parolen.
5. Pflegeleicht: Was Ehrenamtliche nicht aktuell halten können, gehört nicht auf die Seite.

## Accessibility & Inclusion

Publikum reicht von Jugendlichen bis zu Hochbetagten: gut lesbare Schriftgrößen, hohe Kontraste (WCAG AA), volle Tastaturbedienung, Rücksicht auf reduzierte Bewegung. Überwiegend Handynutzung.

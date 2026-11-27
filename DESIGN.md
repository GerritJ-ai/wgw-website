---
name: Wählergemeinschaft Witzwort
description: Die Website als Kartenblatt der Marsch um Witzwort, gezeichnet aus echten OpenStreetMap-Daten.
colors:
  rot: "#c4161c"
  rot-tief: "#9a0e13"
  wasser: "#2f6f9f"
  wasser-tief: "#1f587f"
  tinte: "#1c2321"
  tinte-weich: "#414c3d"
  blatt: "#f8f7f1"
  marsch: "#dfe8cf"
  marsch-hell: "#eef1e0"
  wiese: "#c3d5ab"
  forst: "#1d3324"
  forst-text: "#c5d3b3"
  forst-text-hell: "#dbe5cc"
  forst-etikett: "#9fb58a"
  karte-wald: "#b9cf9f"
  karte-wasserflaeche: "#a9c9dd"
  weiss: "#ffffff"
typography:
  display:
    fontFamily: "'Besley Variable', 'Rockwell', Georgia, serif"
    fontSize: "clamp(2.3rem, 5.4vw, 4.2rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "'Besley Variable', 'Rockwell', Georgia, serif"
    fontSize: "clamp(1.8rem, 3.6vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  title:
    fontFamily: "'Besley Variable', 'Rockwell', Georgia, serif"
    fontSize: "1.32rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.005em"
  ortsname:
    fontFamily: "'Besley Variable', 'Rockwell', Georgia, serif"
    fontSize: "clamp(1.25rem, 2.1vw, 1.9rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "0.34em"
  lead:
    fontFamily: "'Archivo Variable', 'Segoe UI', system-ui, sans-serif"
    fontSize: "clamp(1.12rem, 1.6vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "'Archivo Variable', 'Segoe UI', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.62
  label:
    fontFamily: "'Archivo Variable', 'Segoe UI', system-ui, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 650
    lineHeight: 1.3
    letterSpacing: "0.09em"
    fontVariation: "'wdth' 78"
  button:
    fontFamily: "'Archivo Variable', 'Segoe UI', system-ui, sans-serif"
    fontSize: "1.02rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "0.01em"
    fontVariation: "'wdth' 88"
rounded:
  eckig: "0"
  signatur: "50%"
spacing:
  linie: "1.5px"
  rand: "1.25rem"
  raster: "1.5rem"
  feld: "clamp(1.4rem, 3vw, 2rem)"
  abschnitt: "clamp(3.75rem, 8vw, 6.5rem)"
  breite: "1180px"
  schmal: "46rem"
components:
  button-primary:
    backgroundColor: "{colors.rot}"
    textColor: "{colors.weiss}"
    typography: "{typography.button}"
    rounded: "{rounded.eckig}"
    padding: "0.82em 1.3em"
  button-primary-hover:
    backgroundColor: "{colors.tinte}"
    textColor: "{colors.weiss}"
  button-linie:
    backgroundColor: "transparent"
    textColor: "{colors.tinte}"
    typography: "{typography.button}"
    rounded: "{rounded.eckig}"
    padding: "0.82em 1.3em"
  button-linie-hover:
    backgroundColor: "{colors.tinte}"
    textColor: "{colors.blatt}"
  button-hell:
    backgroundColor: "transparent"
    textColor: "{colors.weiss}"
    typography: "{typography.button}"
    rounded: "{rounded.eckig}"
    padding: "0.82em 1.3em"
  button-hell-hover:
    backgroundColor: "{colors.weiss}"
    textColor: "{colors.forst}"
  feld:
    backgroundColor: "{colors.blatt}"
    textColor: "{colors.tinte}"
    rounded: "{rounded.eckig}"
    padding: "{spacing.feld}"
  sprungmarke:
    backgroundColor: "{colors.blatt}"
    textColor: "{colors.tinte}"
    rounded: "{rounded.eckig}"
    padding: "0.5em 1em"
  sprungmarke-hover:
    backgroundColor: "{colors.tinte}"
    textColor: "{colors.weiss}"
  karte-marke:
    backgroundColor: "{colors.rot}"
    textColor: "{colors.weiss}"
    rounded: "{rounded.eckig}"
    padding: "0.34em 0.62em 0.3em"
  karte-marke-hover:
    backgroundColor: "{colors.tinte}"
    textColor: "{colors.weiss}"
  bericht-karte:
    backgroundColor: "{colors.blatt}"
    textColor: "{colors.tinte}"
    rounded: "{rounded.eckig}"
    padding: "1.15rem 1.3rem 1.4rem"
  person-karte:
    backgroundColor: "{colors.blatt}"
    textColor: "{colors.tinte}"
    rounded: "{rounded.eckig}"
    padding: "1.1rem 1.25rem 1.2rem"
  kopfleiste:
    backgroundColor: "{colors.blatt}"
    textColor: "{colors.tinte}"
    height: "4.4rem"
  fussleiste:
    backgroundColor: "{colors.forst}"
    textColor: "{colors.forst-text}"
---

# Design System: Wählergemeinschaft Witzwort

## Overview

**Creative North Star: "Die Marschkarte"**

Die Seite ist ein Messtischblatt von Eiderstedt. Die WGW ist kein Verband mit Sitz irgendwo, sie ist auf dem Blatt Witzwort eingezeichnet: Die erste Ansicht der Startseite zeigt die Gemeinde aus echten OpenStreetMap-Daten (`public/karte/witzwort.svg`, erzeugt von `scripts/karte.mjs`), mit allen Gräben, Wegen, Höfen und der Bahnlinie. Alle Unterseiten tragen einen Ausschnitt desselben Blatts im Kopf, und der Fuß jeder Seite schließt mit einem Kartenstreifen. Wer die Seite benutzt, bewegt sich durch ein Kartenwerk, nicht durch eine Vereinsbroschüre.

Die Materialien sind die der gedruckten Karte: Marschgrün als Fläche, Grabenblau als Linie, Tintenschwarz für Wege, Häuser, Rahmen und Text, WGW-Rot nur für Markierungen, die Hauptstraße und Handlungen. Alles ist eckig, mit Haarlinien gerahmt, flach gedruckt. Inhalte stehen in Feldern, also eingerahmten Stücken hellen Papiers, die auf der Karte oder der Marschfläche liegen. Die Typografie folgt dem Kartenstich: eine Egyptienne (Besley) für Titel und Ortsnamen, eine schmal laufende Grotesk (Archivo mit Breitenachse) für Etiketten, Angaben und Fließtext.

Die Dichte ist ruhig und gut lesbar für ein Publikum vom Jugendlichen bis zur Hochbetagten am Handy. Verweigert wird das übliche Vereins-Schema aus Stimmungsfoto, Leitsatz und drei gleichen Karten, ebenso der kühle Agentur- oder Start-up-Look und die altbackene Vereins-Homepage.

**Key Characteristics:**
- Echte Karte des eigenen Dorfes als Hauptbild und wiederkehrendes Material (Startseite, Seitenköpfe, Fußstreifen).
- Zeichenerklärung als Navigation: vier Signaturen (Aktuelles, Verein, Fraktion, Programm) ordnen jeden Inhalt.
- Eckige Felder mit 1,5-px-Tintenlinie auf Marschgrün oder Blattpapier; keine Schatten, keine Rundungen an Flächen.
- Rot ist Markierung und Handlung, nie Fläche.
- Egyptienne für Titel, schmale Grotesk in Versalien für Kartenetiketten.

## Colors

Eine gedeckte Kartenpalette aus Grün, Blau und Tinte, in der ein einziges kräftiges Rot die Markierungen setzt.

### Primary
- **Markierungsrot** (`rot`): Die Vereinsfarbe aus dem Logo, als Kartenmarkierung eingesetzt. Füllt Hauptschaltflächen („Mitglied werden“), Ortsmarken auf der Karte, Signaturen der Zeichenerklärung, Listenpunkte, die Hauptstraße im Kartenbild und die Textauswahl. Außerdem `accent-color` für Formularelemente.
- **Tiefrot** (`rot-tief`): Linkfarbe im Fließtext, Hover-Farbe für Titel in Karten und der Zeichenerklärung, Rollenangabe auf Personenkarten. Die lesbare Variante des Rots für Text auf hellem Grund.

### Secondary
- **Grabenblau** (`wasser`): Die Linienfarbe aller Gewässer im Kartenbild (Gräben, Sielzug, Fluss) und der Fokusring der ganzen Seite (3 px, Abstand 3 px).
- **Sielblau** (`wasser-tief`): Gewässernamen auf der Karte, rückwärts geneigt.

### Neutral
- **Kartentinte** (`tinte`): Text, Überschriften, alle Rahmen und Trennlinien, Wege und Häuser im Kartenbild, Hover-Fläche für Schaltflächen und Sprungmarken.
- **Blasse Tinte** (`tinte-weich`): Lead-Absätze, Teaser, Datumsangaben, Nebentexte.
- **Blattpapier** (`blatt`): Seitengrund, Felder, Karten, Kopfleiste, Randzeile.
- **Marschgrün** (`marsch`): Grundfläche des Kartenbilds und der abgesetzten Abschnitte; Theme-Farbe des Browsers. Auch Freistellfarbe hinter Kartenbeschriftungen.
- **Helle Marsch** (`marsch-hell`): Ortsflächen im Kartenbild. Als Custom Property angelegt, in CSS derzeit nicht verwendet.
- **Wiese** (`wiese`): Platzhalterfläche hinter Fotos, solange sie laden.
- **Forstgrün** (`forst`): Der dunkle Schlussabschnitt und der Seitenfuß. Darauf `forst-text` für Fließtext und Leads, `forst-text-hell` für Abschnittstext, `forst-etikett` für Etiketten im Fuß, Weiß für Überschriften und Links.
- **Kartenwald** (`karte-wald`) und **Wasserfläche** (`karte-wasserflaeche`): nur im Kartenbild, für Gehölze und offene Wasserflächen.

### Named Rules
**Die Markierungsregel.** Rot markiert, es füllt keine Flächen. Erlaubt sind Schaltflächen, Ortsmarken, Signaturen, Listenpunkte, Pfeilspitzen und die Hauptstraße; nie ein roter Abschnittshintergrund.

**Die Drei-Gründe-Regel.** Abschnitte wechseln nur zwischen Blattpapier, Marschgrün und Forstgrün. Zwei Blattpapier-Abschnitte hintereinander werden durch eine Tintenlinie getrennt.

## Typography

**Display Font:** Besley Variable (mit Rockwell, Georgia, serif)
**Body Font:** Archivo Variable mit Breitenachse (mit Segoe UI, system-ui, sans-serif)
**Label Font:** Archivo Variable, schmal geschnitten (Breite 78 %)

**Character:** Eine kräftige Egyptienne wie auf alten Kartentiteln, gepaart mit einer nüchternen Grotesk, die für Kartenetiketten schmal gestellt wird. Beide Schriften werden selbst gehostet.

### Hierarchy
- **Display** (800, clamp 2,3–4,2 rem, Zeilenhöhe 1,08): Seitentitel. Im Titelfeld der Startseite etwas kleiner (clamp 2,15–3,7 rem), in Seitenköpfen clamp 2–3,4 rem. Immer mit `text-wrap: balance`.
- **Headline** (700, clamp 1,8–2,75 rem, 1,08): Abschnittsüberschriften, meist in einer Kopfzeile über einer Tintenlinie.
- **Title** (700, 1,32 rem, 1,2): Titel in Berichts- und Personenkarten, Einträge der Zeichenerklärung (1,18 rem). Große Varianten für Themen und Bereiche bis clamp 1,75–2,4 rem.
- **Ortsname** (Besley 800, clamp 1,25–1,9 rem, Laufweite 0,34 em, Versalien): nur der Gemeindename auf der Karte.
- **Lead** (400, clamp 1,12–1,3 rem, 1,5): Einleitungsabsätze in blasser Tinte, höchstens 60 Zeichen breit.
- **Body** (400, 1,0625 rem, 1,62): Fließtext. In Berichten und Rechtstexten 1,1 rem, höchstens 68 Zeichen pro Zeile.
- **Label / Etikett** (650, 0,82 rem, Laufweite 0,09 em, Versalien, Breite 78 %): Angaben wie Bereich, Datum, Gründungsjahr, Maßstab, Spaltentitel im Fuß und die Überschrift „Zeichenerklärung“.

### Named Rules
**Die Kartenstich-Regel.** Titel und Ortsnamen stehen in der Egyptienne, Angaben in der schmalen Grotesk. Eine dritte Schrift gibt es nicht.

**Die Gewässer-Regel.** Gewässernamen stehen in Sielblau (Besley 500, 0,84 rem, Laufweite 0,08 em), rückwärts geschert und dem Lauf folgend gedreht; nur Gewässer werden so beschriftet.

## Layout

Der Inhalt sitzt in einer Spalte von höchstens 1180 px mit 1,25 rem Rand je Seite; Lesetexte in einer schmalen Spalte von 46 rem. Abschnitte haben einen vertikalen Abstand von clamp(3,75 rem, 8 vw, 6,5 rem). Raster nutzen `auto-fill`/`auto-fit` mit Mindestbreiten von 240, 270, 300 oder 320 px und 1,5 rem Abstand, sodass sie ohne Umbruchpunkte auf eine Spalte fallen.

Die Startseite öffnet mit dem Kartenblatt: Die Karte füllt die Höhe clamp(600 px, 100svh − 7,6 rem, 860 px), umrandet von einem doppelten Blattrand (1,5 px außen, 1 px innen, 5 px Abstand) mit Gradangaben in den oberen Ecken. Unten links liegt das Titelfeld (bis 37 rem), unten rechts die Zeichenerklärung (bis 19 rem). Darunter folgt die Randzeile mit Blattname, Gründungsjahr, Mitgliederzahl, Maßstabsleiste und Quellenangabe.

Kopfzeilen über Abschnitten stellen Überschrift und Pfeillink auf eine Grundlinie und schließen mit einer Tintenlinie ab. Zweispaltige Gegenüberstellungen (Verein und Fraktion) werden durch eine senkrechte Tintenlinie geteilt, nicht durch Kästen.

Unter 900 px klappt die Navigation in ein Menü; unter 860 px rückt die Karte nach oben (clamp 300–500 px Höhe), Titelfeld und Zeichenerklärung stapeln sich randlos darunter, die Zeichenerklärung wird zweispaltig. Der Fuß wechselt bei 820 px auf zwei, bei 460 px auf eine Spalte.

## Elevation & Depth

Das System ist vollständig flach, wie ein gedrucktes Blatt. Tiefe entsteht nur durch Überlagerung: Felder aus Blattpapier liegen mit Tintenrahmen auf der Karte oder der Marschfläche, und die Kopfleiste bleibt beim Scrollen mit einer Tintenlinie darunter stehen. Die einzigen `text-shadow`-Angaben sind kartografische Freistellungen: ein harter Rand in Marschgrün um Ortsnamen und Gewässernamen, damit sie über den Gräben lesbar bleiben. Das ist Kartenhandwerk, kein Schatten.

### Named Rules
**Die Druckbogen-Regel.** Keine `box-shadow`, keine Unschärfe, keine Verläufe als Tiefe. Was über etwas anderem liegt, bekommt eine Tintenlinie.

## Shapes

Flächen sind eckig: Schaltflächen, Felder, Karten, Sprungmarken, Bilder und Menüknopf haben keinen Radius. Die Grundlinie ist 1,5 px Tinte (`linie`); innere Trennungen in Listen und Karten sind 1 px. Bilder in Karten werden durch eine Tintenlinie vom Text getrennt, Bilder im Fließtext tragen einen Tintenrahmen.

Kreise und Rauten gibt es nur als Kartensignaturen, und dort sind sie Pflicht: Aktuelles ist ein voller roter Kreis, Verein ein roter Ring, Fraktion ein Tintenquadrat (auf Forstgrün weiß), Programm eine rote Raute. Auf der Karte tragen die Ortspunkte dieselben Formen mit weißem Rand und Tintenkontur; ein Ort, der Verein und Fraktion gehört, zeigt einen roten Kreis mit Tintenkern. Neutrale Kartenpunkte (Kirche, Mühle, Haltepunkt) sind kleine Tintenpunkte. Auch Listenpunkte und die Schrittnummern beim Beitritt sind rote Kreise.

Der Pfeillink endet in einer gezeichneten Pfeilspitze aus zwei Linien, die Maßstabsleiste ist ein schwarz-weiß geteilter Balken.

## Components

### Buttons
Gedruckte Stempel: eckig, gerahmt, ohne Verläufe.
- **Shape:** eckig, mit 1,5-px-Rahmen in der Füllfarbe.
- **Primary:** Markierungsrot mit weißer Schrift, Archivo 700 in Breite 88 %, Innenabstand 0,82 em × 1,3 em. In der Kopfleiste kompakter (0,62 em × 1,05 em).
- **Hover / Focus:** Fläche und Rahmen wechseln in 0,18 s zu Tinte; der Fokus zeigt den blauen Ring der Seite.
- **Linie:** transparent mit Tintenrahmen und Tintenschrift; beim Hover Tintenfläche mit Blattpapierschrift.
- **Hell:** für Forstgrün, transparent mit weißem Rahmen; beim Hover weiße Fläche mit forstgrüner Schrift.
- **Pfeillink:** Text in 650 mit Unterstrich aus 1,5 px, gefolgt von einer gezeichneten Pfeilspitze, die beim Hover 0,3 em nach rechts rückt.

### Chips (Sprungmarken)
- **Style:** Blattpapier, 1,5-px-Tintenrahmen, Tintenschrift 600, eckig. Für Jahresfilter im Archiv, Sprünge im Programm und Portraitlinks der Fraktion.
- **State:** Hover füllt mit Tinte, Schrift wird weiß.

### Cards / Containers
- **Corner Style:** eckig.
- **Background:** Blattpapier; Bildplatzhalter in Wiese.
- **Shadow Strategy:** keine, siehe Elevation & Depth.
- **Border:** 1,5-px-Tintenrahmen außen, 1,5-px-Linie zwischen Bild und Text.
- **Internal Padding:** Feld clamp(1,4–2 rem); Berichtskarte 1,15 × 1,3 rem; Personenkarte 1,1 × 1,25 rem.
- **Berichtskarte:** Bild 16:10, darunter Etikettzeile mit Bereichssignatur, Bereich und Datum, Titel, dreizeiliger Teaser. Beim Hover wächst das Bild um 3,5 % (0,6 s) und der Titel wird tiefrot. Die große Variante füllt im Rückblick zwei Zeilen.
- **Personenkarte:** Portrait 4:5 oben angeschnitten, Name, Rolle in Tiefrot, Etikett „Seit … in der WGW“, aufklappbare Ämterliste mit tabellarischen Ziffern.
- **Instagram-Beitrag:** wie die Berichtskarte im Format 4:5, mit Tintenetikett für Video oder Galerie oben rechts.

### Navigation
- **Kopfleiste:** klebt oben, Blattpapier, Tintenlinie darunter, mindestens 4,4 rem hoch. Links Logo (50 px) und Wortmarke in Besley („Witzwort“ in Rot, 800), rechts Textlinks in Tinte 600 mit 3-px-Unterstrich: transparent, beim Hover Tinte, auf der aktuellen Seite Rot. Am Ende die rote Schaltfläche „Mitglied werden“.
- **Mobil (unter 900 px):** eckiger Menüknopf mit Tintenrahmen, dessen drei Striche sich zum Kreuz drehen. Das Menü klappt randlos unter der Kopfleiste auf; Einträge in Besley 700 mit 1,25 rem, mit Signatur davor und Tintenlinie darunter; die Schaltfläche volle Breite.
- **Fuß:** Kartenstreifen zwischen zwei Tintenlinien, darunter Forstgrün mit vier Spalten (Wortmarke mit Instagram-Schaltfläche, Verein, Fraktion, Seiten), Spaltentitel als Etikett.

### Kartenblatt (Signature Component)
Das Kartenblatt ist die erste Ansicht der Startseite. Die Karte liegt als SVG unter einer zweiten SVG-Ebene mit Leitlinien (1,25 px Tinte, nicht skalierend) von jedem Ortspunkt zu seinem Etikett. Orte der WGW tragen rote Marken mit Tintenrahmen und weißer Schrift (schmale Grotesk 700); sie sind Links und werden beim Hover tintenschwarz. Neutrale Orte tragen Etiketten auf Marschgrün. Die Zeichenerklärung im Feld unten rechts ist die Hauptnavigation: Zeigt man auf Verein, Fraktion oder Programm, treten alle anderen Orte auf 22 % Deckkraft zurück. Beim Laden wird das Blatt aufgenommen (siehe Bewegung), nur wenn keine reduzierte Bewegung gewünscht ist.

### Seitenkopf
Jede Unterseite beginnt mit einem Ausschnitt des Kartenblatts (2100 px breit, Ausschnitt pro Seite wählbar) auf Marschgrün, darauf ein Feld bis 46 rem mit Titel, optionaler Bereichssignatur und Lead.

### Bewegung
Eine Kurve für Ankünfte: `cubic-bezier(0.16, 1, 0.3, 1)`. Zustandswechsel 0,18 bis 0,25 s, Bildzoom 0,6 s. Bewegung zeichnet, setzt oder legt auf; nichts hüpft.

- **Aufnahme des Blatts (Startseite, einmal beim Laden, rund 2 s):** Die Karte liegt in vier Ebenen (`public/karte/grund|wasser|wege|haeuser.svg`). Der Grund steht sofort; Gräben, Wege und Häuser werden nacheinander als wachsender Kreis vom Dorfkern aus freigelegt (`clip-path: circle`, 1,5 / 1,3 / 1 s, Start 0,1 / 0,5 / 0,95 s). Danach erscheint der Ortsname, die Leitlinien werden gezogen, die Punkte gestempelt (Maßstab 0 auf 1), die Etiketten von der Linie weg aufgedeckt, die Maßstabsleiste misst sich aus.
- **Zeichenerklärung:** Der Eintrag unter dem Zeiger lässt fremde Orte auf 22 % zurücktreten und vergrößert die eigenen Punkte auf 155 %.
- **Scroll-Aufbau (alle Seiten):** Trennlinien werden von links gezogen (0,9 s), Abschnittsüberschriften tauchen aus ihrer Zeile auf, Fotos, Karten und Felder werden wie lose Bögen aufgelegt (leicht gedreht, 0,75 s, Geschwister je 80 ms versetzt, höchstens fünf Stufen), Listenzeilen rücken von links ein. Greift nur mit `html.bewegt`, das ein kleines Skript in `Base.astro` setzt; ohne Skript bleibt alles sichtbar.
- **Mitwandern:** Die Karte der Startseite bleibt beim Scrollen bis 90 px zurück, die Kartenausschnitte in Seitenkopf und Fuß verschieben sich um wenige Prozent (CSS Scroll-Timeline, nur wo der Browser sie kann).
- **Seitenwechsel:** Cross-Document View Transitions. Kopfzeile und Blattrand (`.blattrand`, fest stehend) bleiben stehen, die alte Seite wird abgehoben (0,22 s), die neue von oben aufgelegt (0,5 s). Browser ohne Unterstützung wechseln ohne Übergang.
- **Reduzierte Bewegung:** Aufnahme, Scroll-Aufbau, Mitwandern und Seitenübergänge entfallen vollständig; Farbwechsel bei Hover und Fokus bleiben.

## Do's and Don'ts

### Do:
- **Do** jedes Feld, jede Karte und jede Schaltfläche mit der 1,5-px-Tintenlinie (`linie`) rahmen.
- **Do** neue Inhalte einem Bereich zuordnen und ihn mit der passenden Signatur zeigen (Kreis, Ring, Quadrat, Raute).
- **Do** Kartenausschnitte aus `public/karte/witzwort.svg` als Seitengrund verwenden statt Stimmungsfotos.
- **Do** Angaben wie Datum, Ort, Bereich und Zahlen als Etikett in schmaler Grotesk und Versalien setzen.
- **Do** Rot nur für Markierungen und Handlungen einsetzen; Textlinks in Tiefrot.
- **Do** auf der Karte nur Orte markieren, die in OpenStreetMap belegt sind.

### Don't:
- **Don't** `box-shadow`, Unschärfe oder Verläufe für Tiefe verwenden.
- **Don't** Flächen abrunden; Kreise und Rauten bleiben den Kartensignaturen, Listenpunkten und Schrittnummern vorbehalten.
- **Don't** Abschnitte rot füllen oder neben Blattpapier, Marschgrün und Forstgrün weitere Abschnittsgründe einführen.
- **Don't** das Vereins-Schema aus Stimmungsfoto, Leitsatz und drei gleichen Karten bauen.
- **Don't** Elemente einschweben oder hüpfen lassen; Bewegung zeichnet oder setzt.
- **Don't** Orte, Termine oder Zahlen für die Karte oder die Randzeile erfinden.

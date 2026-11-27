// Erzeugt das Kartenblatt von Witzwort (public/karte/witzwort.svg) und die Ortsmarken
// (src/data/karte.json) aus OpenStreetMap-Daten. Einmalig bzw. bei Bedarf ausführen:
//
//   node scripts/karte.mjs            (nutzt _karte/osm.json, falls vorhanden)
//   node scripts/karte.mjs --laden    (holt die Daten neu von der Overpass-API)
//
// Kartendaten © OpenStreetMap-Mitwirkende, Lizenz ODbL.
import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const CACHE = path.join(ROOT, '_karte/osm.json');
// Blattschnitt: Süd, West, Nord, Ost
const B = { s: 54.378, w: 8.925, n: 54.422, e: 9.015 };
const W = 2000;
const kx = Math.cos(((B.s + B.n) / 2) * Math.PI / 180);
const H = Math.round((W * (B.n - B.s)) / ((B.e - B.w) * kx));
const breiteKm = (B.e - B.w) * kx * 111.32;

const bbox = `${B.s},${B.w},${B.n},${B.e}`;
const QUERY = `[out:json][timeout:90];(
  way["highway"](${bbox}); way["waterway"](${bbox}); way["railway"="rail"](${bbox});
  way["building"](${bbox}); way["natural"="water"](${bbox});
  way["landuse"~"residential|forest|farmyard|cemetery"](${bbox});
  node["place"](${bbox}); nwr["name"]["amenity"](${bbox}); nwr["name"]["leisure"](${bbox});
  nwr["railway"~"station|halt"](${bbox});
);out body geom;`;

async function laden() {
  const res = await fetch('https://overpass-api.de/api/interpreter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'User-Agent': 'site-map-builder/1.0' },
    body: 'data=' + encodeURIComponent(QUERY),
  });
  if (!res.ok) throw new Error(`Overpass antwortet mit ${res.status}`);
  const text = await res.text();
  await fs.mkdir(path.dirname(CACHE), { recursive: true });
  await fs.writeFile(CACHE, text);
  return JSON.parse(text);
}

let daten;
if (process.argv.includes('--laden')) daten = await laden();
else {
  try { daten = JSON.parse(await fs.readFile(CACHE, 'utf8')); } catch { daten = await laden(); }
}

const px = (lon) => ((lon - B.w) / (B.e - B.w)) * W;
const py = (lat) => ((B.n - lat) / (B.n - B.s)) * H;
const f = (n) => (Math.round(n * 10) / 10).toString();
const drin = (g) => g.some((p) => p.lat > B.s - 0.002 && p.lat < B.n + 0.002 && p.lon > B.w - 0.004 && p.lon < B.e + 0.004);
const pfad = (g, zu) => {
  let d = '', lx, ly;
  g.forEach((p, i) => {
    const x = f(px(p.lon)), y = f(py(p.lat));
    if (i && x === lx && y === ly) return;
    d += (i ? 'L' : 'M') + x + ' ' + y;
    lx = x; ly = y;
  });
  return d + (zu ? 'Z' : '');
};

const L = { graben: '', siel: '', fluss: '', wasser: '', wald: '', ort: '', haus: '', bahn: '', haupt: '', strasse: '', weg: '', feldweg: '', pfad: '' };
for (const e of daten.elements) {
  if (e.type !== 'way' || !e.geometry || !drin(e.geometry)) continue;
  const t = e.tags ?? {};
  const g = e.geometry;
  if (t.building) L.haus += pfad(g, true);
  else if (t.natural === 'water') L.wasser += pfad(g, true);
  else if (t.landuse === 'forest') L.wald += pfad(g, true);
  else if (t.landuse === 'residential' || t.landuse === 'farmyard' || t.landuse === 'cemetery') L.ort += pfad(g, true);
  else if (t.waterway === 'ditch') L.graben += pfad(g);
  else if (t.waterway === 'river' || t.waterway === 'canal') L.fluss += pfad(g);
  else if (t.waterway) L.siel += pfad(g);
  else if (t.railway === 'rail') L.bahn += pfad(g);
  else if (t.highway === 'primary' || t.highway === 'primary_link') L.haupt += pfad(g);
  else if (t.highway === 'secondary' || t.highway === 'tertiary') L.strasse += pfad(g);
  else if (['residential', 'unclassified', 'living_street', 'service'].includes(t.highway)) L.weg += pfad(g);
  else if (t.highway === 'track') L.feldweg += pfad(g);
  else if (t.highway === 'path' || t.highway === 'footway') L.pfad += pfad(g);
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" fill="none" stroke-linecap="round" stroke-linejoin="round">
<rect width="${W}" height="${H}" fill="#dfe8cf"/>
<path d="${L.wald}" fill="#b9cf9f"/>
<path d="${L.ort}" fill="#eef1e0"/>
<path d="${L.wasser}" fill="#a9c9dd" stroke="#2f6f9f" stroke-width="1"/>
<path d="${L.graben}" stroke="#2f6f9f" stroke-width="1" opacity=".75"/>
<path d="${L.siel}" stroke="#2f6f9f" stroke-width="2.2"/>
<path d="${L.fluss}" stroke="#2f6f9f" stroke-width="5"/>
<path d="${L.pfad}" stroke="#1c2321" stroke-width="1" stroke-dasharray="1 4"/>
<path d="${L.feldweg}" stroke="#1c2321" stroke-width="1.2" stroke-dasharray="7 4"/>
<path d="${L.weg}" stroke="#1c2321" stroke-width="4.2"/>
<path d="${L.strasse}" stroke="#1c2321" stroke-width="6.4"/>
<path d="${L.haupt}" stroke="#1c2321" stroke-width="8.4"/>
<path d="${L.weg}" stroke="#f8f7f1" stroke-width="2.6"/>
<path d="${L.strasse}" stroke="#f8f7f1" stroke-width="4.6"/>
<path d="${L.haupt}" stroke="#c4161c" stroke-width="6"/>
<path d="${L.bahn}" stroke="#1c2321" stroke-width="5"/>
<path d="${L.bahn}" stroke="#f8f7f1" stroke-width="3" stroke-dasharray="14 14" stroke-linecap="butt"/>
<path d="${L.haus}" fill="#1c2321"/>
</svg>`;
await fs.mkdir(path.join(ROOT, 'public/karte'), { recursive: true });
await fs.writeFile(path.join(ROOT, 'public/karte/witzwort.svg'), svg);

// Benannte Orte als Prozent-Positionen auf dem Blatt
const orte = [];
for (const e of daten.elements) {
  const t = e.tags ?? {};
  if (!t.name) continue;
  const art = t.place ?? t.amenity ?? t.leisure ?? t.railway;
  if (!art) continue;
  const lat = e.lat ?? (e.bounds ? (e.bounds.minlat + e.bounds.maxlat) / 2 : null);
  const lon = e.lon ?? (e.bounds ? (e.bounds.minlon + e.bounds.maxlon) / 2 : null);
  if (lat == null || lat < B.s || lat > B.n || lon < B.w || lon > B.e) continue;
  orte.push({ name: t.name, art, x: +((px(lon) / W) * 100).toFixed(2), y: +((py(lat) / H) * 100).toFixed(2) });
}
const gewaesser = [...new Set(daten.elements.filter((e) => e.tags?.waterway && e.tags?.name).map((e) => e.tags.name))];
await fs.writeFile(
  path.join(ROOT, 'src/data/karte.json'),
  JSON.stringify({ blatt: B, breite: W, hoehe: H, breiteKm: +breiteKm.toFixed(3), orte, gewaesser }, null, 2) + '\n',
);
console.log(`Blatt ${W}×${H}, ${breiteKm.toFixed(2)} km breit, SVG ${(svg.length / 1024).toFixed(0)} KB`);
console.log(orte.map((o) => `${o.name} (${o.art}) ${o.x}/${o.y}`).join('\n'));
console.log('Gewässer:', gewaesser.join(', '));

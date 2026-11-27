// Holt die neuesten Instagram-Beiträge über einen Behold-JSON-Feed (kostenloser Tarif)
// und legt Bilder + Daten lokal ab. Läuft automatisch vor jedem Build.
//
// Einrichtung: Feed-Adresse als Umgebungsvariable BEHOLD_FEED_URL setzen
// (lokal in .env, auf GitHub als Repository-Secret). Ohne Adresse oder bei
// einem Fehler bleibt der letzte Stand erhalten und der Build läuft weiter.
import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const DATA = path.join(ROOT, 'src/data/instagram.json');
const DIR = path.join(ROOT, 'public/instagram');
const MAX = 6;

try {
  process.loadEnvFile(path.join(ROOT, '.env'));
} catch {}
const url = process.env.BEHOLD_FEED_URL?.trim();

async function main() {
  if (!url) return console.log('[instagram] BEHOLD_FEED_URL nicht gesetzt – Feed wird übersprungen.');
  if (new URL(url).hostname !== 'feeds.behold.so') throw new Error('BEHOLD_FEED_URL muss auf feeds.behold.so zeigen');

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Feed antwortet mit ${res.status}`);
  const feed = await res.json();
  const roh = (Array.isArray(feed) ? feed : (feed.posts ?? [])).slice(0, MAX);

  await fs.mkdir(DIR, { recursive: true });
  const posts = [];
  for (const p of roh) {
    const quelle = p.sizes?.medium ?? p.sizes?.large ?? p.sizes?.small;
    const bildUrl = quelle?.mediaUrl ?? p.thumbnailUrl ?? (p.mediaType === 'VIDEO' ? null : p.mediaUrl);
    if (!bildUrl || !/^\w+$/.test(String(p.id))) continue;
    const bild = await fetch(bildUrl);
    if (!bild.ok) continue;
    const typ = bild.headers.get('content-type') ?? '';
    const ext = typ.includes('webp') ? 'webp' : typ.includes('png') ? 'png' : 'jpg';
    const datei = `${p.id}.${ext}`;
    await fs.writeFile(path.join(DIR, datei), Buffer.from(await bild.arrayBuffer()));
    posts.push({
      id: String(p.id),
      permalink: p.permalink,
      timestamp: p.timestamp,
      type: p.mediaType ?? 'IMAGE',
      caption: (p.prunedCaption ?? p.caption ?? '').trim(),
      alt: p.altText ?? '',
      image: `/instagram/${datei}`,
      width: quelle?.width ?? 700,
      height: quelle?.height ?? 875,
    });
  }
  if (posts.length === 0) throw new Error('Feed enthält keine verwertbaren Beiträge');

  // alte Bilder aufräumen
  const behalten = new Set(posts.map((p) => path.basename(p.image)).concat('.gitkeep'));
  for (const f of await fs.readdir(DIR)) if (!behalten.has(f)) await fs.rm(path.join(DIR, f));

  const daten = { username: feed.username ?? 'wgw.witzwort', fetchedAt: new Date().toISOString(), posts };
  await fs.writeFile(DATA, JSON.stringify(daten, null, 2) + '\n');
  console.log(`[instagram] ${posts.length} Beiträge aktualisiert.`);
}

main().catch((e) => console.warn(`[instagram] Abruf fehlgeschlagen (${e.message}) – letzter Stand bleibt erhalten.`));

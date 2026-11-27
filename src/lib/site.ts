const base = import.meta.env.BASE_URL.replace(/\/$/, '');
/** Interner Link inkl. Basis-Pfad (wichtig für GitHub Pages ohne eigene Domain). */
export const u = (p: string) => base + p;

export const SITE = {
  name: 'Wählergemeinschaft Witzwort',
  kurz: 'WGW',
  claim: 'Wir gemeinsam für Witzwort',
  beschreibung:
    'Die Wählergemeinschaft Witzwort (WGW) – seit 1978 unabhängig und parteifrei für unser Dorf. Verein und Fraktion, gemeinsam für Witzwort.',
  instagram: { name: 'wgw.witzwort', url: 'https://www.instagram.com/wgw.witzwort/' },
  email: 'info@waehlergemeinschaft-witzwort.de',
  // Postanschrift fürs Impressum (Pflichtangabe!) – bitte ergänzen, z. B. 'Musterweg 1, 25889 Witzwort'
  anschrift: '',
  verein: { rolle: 'Vereinsvorsitzender', name: 'Daniel Mittag', email: 'danielmittag@gmx.net', telefon: '0172 17 71 23 1' },
  fraktion: { rolle: 'Fraktionsvorsitzender', name: 'Holger Drosdowski', email: 'holger.drosdowski@t-online.de' },
};

export const datum = (d: Date) =>
  d.toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

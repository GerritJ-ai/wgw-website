import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Auf GitHub Pages ohne eigene Domain liegt die Seite unter /<repo>/ – die
// Werte kommen dann aus dem Deploy-Workflow. Mit eigener Domain bleibt BASE_PATH leer.
const site = process.env.SITE_URL || 'https://www.waehlergemeinschaft-witzwort.de';
const base = (process.env.BASE_PATH || '').replace(/\/$/, '') || '/';
const prefix = base === '/' ? '' : base;

// Alte Jimdo-Adressen -> neue Seiten (damit Lesezeichen und Google-Treffer weiter funktionieren)
const alt = {
  '/about': '/impressum/',
  '/unser-team-1': '/team/',
  '/unser-team-1/unser-ehrenbürgermeister': '/team/ehrenbuergermeister/',
  '/unser-verein': '/verein/',
  '/unser-verein/aktivitäten-2017-2019': '/aktuelles/',
  '/unser-verein/vereinsmitglied-werden': '/mitglied-werden/',
  '/unser-verein/unsere-satzung': '/satzung/',
  '/unsere-fraktion': '/fraktion/',
  '/unsere-fraktion/kommunalwahl-2023': '/fraktion/',
  '/unser-programm': '/programm/',
  '/unser-programm/grundsätzliches': '/programm/',
  '/unser-programm/familie-und-vereine': '/programm/',
  '/unser-programm/umwelt-und-zukunft': '/programm/',
};

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [sitemap()],
  redirects: Object.fromEntries(Object.entries(alt).map(([from, to]) => [from, prefix + to])),
});

import type { ImageMetadata } from 'astro';
import sievers from '../assets/team/johann-sievers.webp';
import roeckendorf from '../assets/team/uwe-roeckendorf.webp';
import hennings from '../assets/team/ariane-hennings.webp';
import drosdowski from '../assets/team/holger-drosdowski.webp';
import loebbecke from '../assets/team/andreas-loebbecke.webp';
import jessen from '../assets/team/anja-jessen.webp';
import thomsen from '../assets/team/annelene-thomsen.webp';
import alberts from '../assets/team/ove-alberts.webp';
import mittag from '../assets/team/daniel-mittag.webp';

export interface Person {
  name: string;
  bild: ImageMetadata;
  gruppe: 'fraktion' | 'verein' | 'beide';
  rolle: string;
  seit: number;
  aemter: [string, string][];
}

// Stand der Angaben: alte Website (2023). Bitte bei Änderungen hier pflegen.
export const team: Person[] = [
  {
    name: 'Johann Sievers', bild: sievers, gruppe: 'fraktion', rolle: 'Bürgermeister', seit: 2016,
    aemter: [
      ['2018 – 2028', 'Bürgermeister'], ['2018 – 2028', 'Vertreter im Amtsausschuss'], ['2018 – 2028', 'Vorsitz im Schulverband'],
      ['2018 – 2028', 'Mitglied im Kindergartenverband'], ['2018 – 2028', 'Mitglied im WBV Eiderstedt'], ['2023 – 2028', 'Mitglied im WBV Treene'],
    ],
  },
  {
    name: 'Uwe Röckendorf', bild: roeckendorf, gruppe: 'fraktion', rolle: 'Gemeindevertreter und 2. stellv. Bürgermeister', seit: 2018,
    aemter: [
      ['2023 – 2028', 'Gemeindevertreter'], ['2023 – 2028', 'Mitglied im Bauausschuss'], ['2023 – 2028', 'Mitglied im Finanzausschuss'],
      ['2023 – 2028', 'Mitglied im Ausschuss Jahresrechnung'], ['2023 – 2028', 'Mitglied im Schulverband'], ['2023 – 2028', 'Mitglied im Amtsausschuss'],
      ['2023 – 2028', 'Stellv. Mitglied im WBV Eiderstedt'], ['2023 – 2028', 'Stellv. Mitglied im WBV Treene'],
    ],
  },
  {
    name: 'Ariane Hennings', bild: hennings, gruppe: 'fraktion', rolle: 'Gemeindevertreterin und Vorsitzende im Sozialausschuss', seit: 2018,
    aemter: [
      ['2023 – 2028', 'Gemeindevertreterin'], ['2023 – 2028', 'Vorsitz im Sozialausschuss'], ['2023 – 2028', 'Mitglied im Schulverband'],
      ['2023 – 2028', 'Stellv. Mitglied im Kindergartenbeirat'],
    ],
  },
  {
    name: 'Holger Drosdowski', bild: drosdowski, gruppe: 'fraktion', rolle: 'Gemeindevertreter, Fraktionsvorsitzender und Vorsitz im Bauausschuss', seit: 1981,
    aemter: [['2003 – 2028', 'Gemeindevertreter'], ['2003 – 2028', 'Vorsitz im Bauausschuss']],
  },
  {
    name: 'Andreas Löbbecke', bild: loebbecke, gruppe: 'fraktion', rolle: 'Gemeindevertreter', seit: 2021,
    aemter: [
      ['2023 – 2028', 'Gemeindevertreter'], ['2023 – 2028', 'Mitglied im Bauausschuss'], ['2023 – 2028', 'Mitglied im Finanzausschuss'],
      ['2023 – 2028', 'Vorsitz im Wahlprüfungsausschuss'], ['2023 – 2028', 'Stellv. Mitglied im Schulverband'],
    ],
  },
  {
    name: 'Anja Jessen', bild: jessen, gruppe: 'fraktion', rolle: 'Gemeindevertreterin', seit: 2021,
    aemter: [
      ['2023 – 2028', 'Gemeindevertreterin'], ['2023 – 2028', 'Mitglied im Sozialausschuss'], ['2023 – 2028', 'Mitglied im Finanzausschuss'],
      ['2023 – 2028', 'Stellv. Mitglied im Schulverband'],
    ],
  },
  {
    name: 'Annelene Thomsen', bild: thomsen, gruppe: 'beide', rolle: 'Bürgerliches Mitglied im Sozialausschuss · Schriftführerin im Vereinsvorstand', seit: 1982,
    aemter: [['2013 – 2028', 'Bürgerliches Mitglied im Sozialausschuss'], ['1996 – 2026', 'Vereinsvorstand: Schriftführerin']],
  },
  {
    name: 'Ove Alberts', bild: alberts, gruppe: 'fraktion', rolle: 'Bürgerliches Mitglied im Bauausschuss', seit: 2023,
    aemter: [['2018 – 2028', 'Bürgerliches Mitglied im Bauausschuss']],
  },
  {
    name: 'Daniel Mittag', bild: mittag, gruppe: 'verein', rolle: 'Vereinsvorsitzender', seit: 2016,
    aemter: [['2021 – 2025', 'Vereinsvorstand: 2. Vereinsvorsitzender']],
  },
];

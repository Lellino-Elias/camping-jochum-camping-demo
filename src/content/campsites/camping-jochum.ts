import type { CampsiteConfig } from "../types";

/**
 * Camping Jochum · Riezlern im Kleinwalsertal (Vorarlberg, AT)
 * Quelle: raw/digest (camping-jochum.at) + contact.json. Bilderarmer Lead:
 * nur 3 herkunftssichere, ausreichend große Fotos vorhanden → Hero + 2-Kachel-
 * Camping-Sektion; Pillars, Galerie und optionale Sektionen ehrlich weggelassen.
 */
const IMG = "/campsites/camping-jochum";

const campingJochum: CampsiteConfig = {
  name: "Camping Jochum",
  shortName: "Jochum",
  slug: "camping-jochum",
  ort: "Riezlern",
  region: "Kleinwalsertal",
  brandKind: "Camping",
  regionLong: "Kleinwalsertal · Vorarlberg · Österreich",

  heroVariant: "center",

  claim: "Wo die Sonne im Kleinwalsertal am längsten scheint",
  claimEmphasis: "am längsten",
  emailDetail: "die inkludierte Bergbahn-Nutzung von Mai bis November",
  intro:
    "Gleich am Ortseingang von Riezlern, dort wo die Sonne am längsten scheint: 75 Stellplätze, von denen du direkt zum Wandern, Biken oder auf die Piste startest — der kostenlose Walserbus hält gleich nebenan.",

  statement: {
    text: "Vom ersten Frühlingsgrün bis ins watteweiße Winterwunderland — Sommer wie Winter ein echter Bergurlaub.",
    emphasis: "Sommer wie Winter",
  },

  // Bilderarm: keine 3 herkunftssicheren Pillar-Fotos vorhanden → Pillars weggelassen
  // (die BrandStatement-Sektion blendet sich dadurch ehrlich aus, statt 2 von 3 Kacheln
  // mit einer Lücke zu zeigen).
  pillars: [],

  usps: [
    "75 Stellplätze",
    "Bergbahn unlimited inkl.",
    "Kostenloses WLAN",
    "Hundedusche am Platz",
    "Trockenraum für Ski",
  ],

  trust: {
    heading: "Das ganze Kleinwalsertal vor dem Vorzelt",
    headingEmphasis: "Kleinwalsertal",
    intro:
      "Über 100 km Pisten, rund 50 km Loipen und unzählige Wanderwege liegen rund um den Platz — und mit Bergbahn unlimited fährst du von Mai bis November kostenlos auf die Berge.",
  },

  awards: [],

  hero: {
    aerial: {
      src: `${IMG}/gallery-f4c0efdd7f.webp`,
      alt: "Wanderstart direkt vom Camping Jochum: Gäste beim Aufbruch ins Kleinwalsertal mit Alpenkulisse im Hintergrund",
    },
  },

  camping: {
    heading: "Gut ausgestattet, Sommer wie Winter",
    intro:
      "75 Stellplätze mit Strom, moderne Einzel-Wasch- und Duschkabinen, Waschmaschine, Geschirrspülküche und ein behindertengerechtes Bad — alles gepflegt und nah.",
    features: [
      {
        title: "Rezeption & Brotzeitstübchen",
        text: "Familie Jochum empfängt dich persönlich — mit Brotzeitstübchen, WLAN und Gasverkauf direkt am Platz.",
        image: {
          src: `${IMG}/award-62e310b6d4.png`,
          alt: "Rezeptionsgebäude von Camping Jochum im Abendlicht",
        },
      },
      {
        title: "Wintercamping",
        text: "Eigener Trockenraum, Skiabstellraum und eine praktische Hundedusche machen Wintercamping hier richtig komfortabel.",
        image: {
          src: `${IMG}/gallery-8bce57cba1.webp`,
          alt: "Wohnmobil im verschneiten Kleinwalsertal – Wintercamping direkt auf dem Camping Jochum",
        },
      },
    ],
  },

  anreise: {
    heading: "Über Oberstdorf ins Tal",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A7 bis Oberstdorf, dann die Walserstraße hinauf ins Kleinwalsertal — der Platz liegt direkt am Ortseingang von Riezlern.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhof Oberstdorf, von dort mit dem Walserbus ins Tal — die Haltestelle liegt nur wenige Schritte vom Campingplatz.",
      },
      {
        title: "Walserbus vor Ort",
        text: "Mit der Gästekarte fährst du kostenlos im ganzen Tal — die nächste Haltestelle ist gleich nebenan.",
      },
    ],
  },

  // Bilderarm: keine 4 herkunftssicheren, sonst ungenutzten Fotos für das Galerie-Bento
  // übrig → leer, die Sektion blendet sich unter 4 Bildern ehrlich aus.
  galerie: {
    heading: "Eindrücke vom Platz",
    headingEmphasis: "Eindrücke",
    intro: "Sommer wie Winter direkt im Kleinwalsertal.",
    tag: "Riezlern · Kleinwalsertal",
    images: [],
  },

  booking: {
    heading: "Jetzt deinen Platz in Riezlern anfragen",
    headingEmphasis: "in Riezlern",
    intro:
      "Wähle Zeitraum und Personen — Familie Jochum meldet sich persönlich mit deiner Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreise Sommer 2026 · Stellplatz inkl. 2 Erwachsene/Nacht · weitere Personen & Gästetaxe (€ 4,40 ab 14 J.) zzgl. · Strom € 1/kWh",
    highlight: {
      title: "Bergbahn unlimited",
      text: "Von Mai bis November fahren unsere Gäste an den teilnehmenden Bergbahnen kostenlos.",
    },
    categories: [
      { id: "caravan", label: "Caravan + Auto", perNight: 49, perExtraGuest: 16.5 },
      { id: "wohnmobil", label: "Wohnmobil", perNight: 47, perExtraGuest: 16.5 },
    ],
  },

  kontakt: {
    coords: { lat: 47.362535, lng: 10.194127 },
    tel: "+43 5517 5792",
    telHref: "tel:+4355175792",
    mail: "info@camping-jochum.at",
    adresse: "Walserstraße 10 · 6991 Riezlern · Österreich",
  },

  languages: ["DE"],

  nav: [
    { label: "Camping", href: "#camping" },
    { label: "Lage", href: "#anreise" },
    { label: "Preise & Anfrage", href: "#booking" },
  ],
};

export default campingJochum;

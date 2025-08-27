/*
 * Sample data for the Highcoon Studio backend.  In a production system this
 * information would live in a database and be augmented with additional
 * metadata (e.g., sources, citations, versioning).  For the purposes of the
 * prototype the data lives in memory and resets when the server restarts.
 */

const terpenes = [
  {
    id: 'limonene',
    name: 'Limonene',
    color: 'yellow',
    aromas: ['citrus'],
    flavors: ['lemon', 'orange'],
    sources: ['lemons', 'oranges'],
    effects: ['uplifting', 'focus']
  },
  {
    id: 'myrcene',
    name: 'Myrcene',
    color: 'green',
    aromas: ['earthy', 'musky'],
    flavors: ['herbal'],
    sources: ['mango', 'hops'],
    effects: ['relaxing', 'sleepy']
  },
  {
    id: 'pinene',
    name: 'Pinene',
    color: 'pine',
    aromas: ['pine', 'woodsy'],
    flavors: ['pine'],
    sources: ['pine needles', 'rosemary'],
    effects: ['alertness', 'memory retention']
  },
  {
    id: 'caryophyllene',
    name: '\u03b2-Caryophyllene',
    color: 'purple',
    aromas: ['spicy', 'peppery'],
    flavors: ['spice', 'clove'],
    sources: ['black pepper', 'cloves'],
    effects: ['stress relief', 'anti-inflammatory']
  }
];

const strains = [
  {
    id: 'blueDream',
    name: 'Blue Dream',
    terpenes: ['myrcene', 'pinene'],
    description: 'A sativa-leaning hybrid with a sweet berry aroma and calming but uplifting effects.'
  },
  {
    id: 'sourDiesel',
    name: 'Sour Diesel',
    terpenes: ['caryophyllene', 'limonene', 'myrcene'],
    description: 'A pungent, diesel-scented strain popular for its energizing effects.'
  },
  {
    id: 'ogKush',
    name: 'OG Kush',
    terpenes: ['limonene', 'caryophyllene'],
    description: 'An iconic hybrid with earthy and pine notes, known for its relaxing qualities.'
  }
];

// Simple in‑memory array to store check‑in records.  Each record includes
// strain, state, goal, consumption details and timestamp.  In a real
// application this would be persisted in a database.
const checkIns = [];

module.exports = {
  terpenes,
  strains,
  checkIns
};

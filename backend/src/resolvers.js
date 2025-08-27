const { v4: uuidv4 } = require('uuid');
const { terpenes, strains, checkIns } = require('./data');

/*
 * Resolver functions for the Highcoon Studio GraphQL schema.  The
 * recommendation logic implemented here is intentionally simple: it
 * selects a handful of modules based on the user’s desired goal.  In
 * production this could be replaced by a sophisticated rule engine
 * leveraging the knowledge graph of terpenes, machine learning models
 * and user behaviour analytics.
 */

const resolvers = {
  Query: {
    terpenes: () => terpenes,
    strains: () => strains,
    checkIns: () => checkIns
  },
  Mutation: {
    checkIn: (_, { input }) => {
      const id = uuidv4();
      const createdAt = new Date().toISOString();
      const record = {
        id,
        strain: input.strain || null,
        state: input.state,
        goal: input.goal,
        consumption: input.consumption || null,
        createdAt
      };
      checkIns.push(record);

      // Simple recommendation engine.  For each goal, propose a set of
      // modules.  In the future you could incorporate strain and terpene
      // information into these suggestions.
      const rec = {
        games: [],
        music: [],
        stories: [],
        glossary: [],
        tips: []
      };

      for (const g of input.goal) {
        switch (g.toLowerCase()) {
          case 'focus':
          case 'enfocado':
            rec.games.push('memory_citrics');
            rec.music.push('focus_playlist_citrics');
            rec.glossary.push('limonene');
            rec.tips.push('Permanece hidratado y evita distracciones visuales.');
            break;
          case 'calmado':
          case 'relajado':
            rec.games.push('trippy_terpene_trials');
            rec.music.push('relaxing_playlist');
            rec.glossary.push('myrcene');
            rec.tips.push('Practica respiraciones profundas y deja que el juego te guíe.');
            break;
          case 'creativo':
          case 'creativity':
            rec.games.push('obstacle_runner');
            rec.music.push('creative_playlist');
            rec.glossary.push('pinene');
            rec.tips.push('Mantén una mente abierta y experimenta diferentes rutas.');
            break;
          case 'social':
          case 'sociable':
            rec.games.push('domino_terpenico');
            rec.music.push('social_playlist');
            rec.glossary.push('caryophyllene');
            rec.tips.push('Comparte tu experiencia con amigos y escucha sus notas también.');
            break;
          default:
            rec.games.push('terpene_trials');
            rec.music.push('default_playlist');
            rec.glossary.push('limonene');
            rec.tips.push('Disfruta explorando los módulos y vuelve cuando tengas una meta más clara.');
            break;
        }
      }
      // De‑duplicate arrays so the user doesn't see repeated entries
      rec.games = Array.from(new Set(rec.games));
      rec.music = Array.from(new Set(rec.music));
      rec.stories = rec.stories.length ? Array.from(new Set(rec.stories)) : null;
      rec.glossary = Array.from(new Set(rec.glossary));
      rec.tips = Array.from(new Set(rec.tips));

      return rec;
    }
  }
};

module.exports = resolvers;

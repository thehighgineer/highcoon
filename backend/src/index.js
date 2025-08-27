const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

/*
 * Entry point for the Highcoon Studio backend.  This file creates an
 * ApolloServer instance with the defined schema and resolvers and
 * listens on the default port (4000).  Visit the URL printed in the
 * console to interact with GraphQL Playground.
 */

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });
  server
    .listen()
    .then(({ url }) => {
      console.log(`🚀 Highcoon Studio GraphQL server ready at ${url}`);
    })
    .catch(err => {
      console.error('Failed to start server', err);
    });
}

startServer();

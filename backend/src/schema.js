const { gql } = require('apollo-server');

/*
 * GraphQL type definitions for the Highcoon Studio backend.  The schema
 * exposes basic entities such as Terpene and Strain and supports a
 * single mutation for logging a check‑in and retrieving simple
 * recommendations.  Feel free to expand this schema with additional
 * fields and queries/mutations (e.g., to support journaling, games,
 * achievements and more sophisticated recommendation logic).
 */

const typeDefs = gql`
  "A terpene is an aromatic compound found in cannabis and many other plants."
  type Terpene {
    id: ID!
    name: String!
    color: String!
    aromas: [String!]!
    flavors: [String!]!
    sources: [String!]!
    effects: [String!]!
  }

  "A cannabis strain along with its dominant terpenes and a brief description."
  type Strain {
    id: ID!
    name: String!
    terpenes: [String!]!
    description: String!
  }

  "Details of how the user consumed their cannabis product.  All fields are optional."
  type Consumption {
    type: String
    equipment: String
    material: String
    method: String
    temperature: Float
    grams: Float
    duration: Int
  }

  "A record of a user session including the strain consumed, current feelings, desired goal and optional consumption details."
  type CheckIn {
    id: ID!
    strain: String
    state: [String!]!
    goal: [String!]!
    consumption: Consumption
    createdAt: String!
  }

  "The set of modules recommended to the user after a check‑in."
  type Recommendation {
    games: [String!]!
    music: [String]
    stories: [String]
    glossary: [String]
    tips: [String]
  }

  "Input object for logging a check‑in.  The strain is optional to allow for scenarios where the user doesn’t know or doesn’t wish to specify the product."
  input CheckInInput {
    strain: String
    state: [String!]!
    goal: [String!]!
    consumption: ConsumptionInput
  }

  "Input object for consumption details.  All fields are optional."
  input ConsumptionInput {
    type: String
    equipment: String
    material: String
    method: String
    temperature: Float
    grams: Float
    duration: Int
  }

  type Query {
    "Return the list of supported terpenes with their attributes."
    terpenes: [Terpene!]!
    "Return the list of sample strains and their dominant terpenes."
    strains: [Strain!]!
    "Return the history of check‑ins (for debugging)."
    checkIns: [CheckIn!]!
  }

  type Mutation {
    "Record a new user check‑in and return a set of recommended modules based on the state and goal."
    checkIn(input: CheckInInput!): Recommendation!
  }
`;

module.exports = typeDefs;

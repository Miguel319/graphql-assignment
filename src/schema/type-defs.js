const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Place {
    _id: ID
    country: String
    year: String
    area: Int
    totalPopulation: Int
    createdAt: String
    updatedAt: String
  }

  input CountryFilterInput {
    country: String
  }

  type Query {
    getPlaces(input: CountryFilterInput): [Place!]!
    getPlaceById(input: String): Place!
  }

  input PlaceCreationInput {
    country: String!
    year: String!
    area: Int!
    totalPopulation: Int!
  }

  input PlaceUpdateInput {
    country: String
    year: String
    area: Int
    totalPopulation: Int
  }

  type Mutation {
    createPlace(input: PlaceCreationInput!): Place!
    updatePlace(_id: ID!, input: PlaceUpdateInput!): Place!
    deletePlace(_id: ID): Place!
  }
`;

module.exports = { typeDefs };

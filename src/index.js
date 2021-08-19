const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { resolvers } = require("./schema/resolvers");
const { connectToDb } = require("./config/db");

const { typeDefs } = require("./schema/type-defs");

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

connectToDb();

server.start().then(() => server.applyMiddleware({ app }));

app.listen({ port: 4000 }, () => {
  console.log("Server running on port 4000");
});

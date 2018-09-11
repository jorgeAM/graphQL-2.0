const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema/schema');
const resolvers = require('./resolvers/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

module.exports = server;

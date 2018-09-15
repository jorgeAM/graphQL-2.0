const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema/schema');
const resolvers = require('./resolvers/resolvers');
const context = require('./context/context');

const server = new ApolloServer({ typeDefs, resolvers, context });

module.exports = server;

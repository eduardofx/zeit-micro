import { ApolloServer, gql } from 'apollo-server-micro'

const typeDefs = gql`
    type Query {
        message: String
    }
`;

const resolvers = {
    Query: {
        message: () => 'Data Return'
    }
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });
module.exports = apolloServer.createHandler();
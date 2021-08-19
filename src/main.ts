import { ApolloServer } from 'apollo-server';

import typeDefs from './schema';
import resolvers from './resolvers';

const port = process.env.PORT || 5000

const server = new ApolloServer({
    cors: {
		origin: '*',	
		credentials: true},
    typeDefs: typeDefs,
    resolvers: resolvers
});

server.listen({port: port}).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
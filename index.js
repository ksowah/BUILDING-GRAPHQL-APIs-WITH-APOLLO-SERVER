const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const connectDB = require('./config/db');
require("dotenv").config();

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });


( async () => {

    connectDB();

    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
    });
    
    console.log(`🚀  Server ready at: ${url}`);
}
)()



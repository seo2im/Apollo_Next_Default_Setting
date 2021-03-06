import { ApolloServer } from 'apollo-server'
import resolvers from './Apollo/Resolver'
import typeDefs from './Apollo/Schema'
import { AutoWork } from './Apollo/Schedule'
import dbConnect from './Model'


const server = new ApolloServer({ typeDefs, resolvers })
dbConnect();

server.listen().then(({ url }) => {
    setInterval(() => AutoWork(), 10000) /* AutoWork work automatically interval 10s */
    console.log(`server ready at ${url}`)
})

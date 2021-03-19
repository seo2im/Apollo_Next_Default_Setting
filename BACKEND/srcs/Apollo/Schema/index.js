import { gql } from 'apollo-server'

export default gql`
    # Data Schema
    type User {
        _id: ID          # mongodb set _id automatically
        id: String
        password: String 
    }
    
    # Query
    type Query {
        getUsers: [User]
    }

    # Mutation
    type Mutation {
        addUser(login: String!, password: String!): User
    }
`
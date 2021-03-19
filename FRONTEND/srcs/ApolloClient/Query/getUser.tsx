/*
    Query must same format of apollo server query
    Test work 
*/
import { gql } from '@apollo/client'

const getUser = gql`
    query User($id: String!) {
        getUser(id: $id) {
            id
            password
        }
    }
`

export default getUser

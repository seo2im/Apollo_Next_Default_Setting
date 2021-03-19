import React from 'react'
import { Div, Text } from './styles'
import { UsersState } from '../../Redux/REDUCER/Users'

type Props = {
    users: UsersState
}
const Main = ({ users }: Props) => {
    return (
        <Div>
            {users.map((user, i) => (
                <Text key={`user${i}`}>{user.id}</Text>
            ))}
        </Div>
    )
}

export default Main

import React from 'react'
import Main from './Main'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/REDUCER'

const Container = () => {
    const users = useSelector((state: RootState) => state.Users)

    return <Main users={users} />
}

export default Container

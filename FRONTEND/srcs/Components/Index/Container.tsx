import React, { useEffect } from 'react'
import Index from './Index'
import { useApollo, getUser } from '../../ApolloClient'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/dist/client/router'
import { UsersSave } from '../../Redux/REDUCER/Users'
/*
    This page is container
    
    Container work data logic of React components
    so use Hook or api in this
*/
const Container = () => {
    const apolloCleint = useApollo()
    const router = useRouter()
    const dispatch = useDispatch()

    const link = (url: string) => {
        router.push(url)
    }

    const getData = async () => {
        try {
            const { data } = await apolloCleint.query({
                query: getUser,
            })
            if (data.getUser) {
                dispatch(UsersSave(data.getUser.id))
                link('/main')
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return <Index />
}

export default Container

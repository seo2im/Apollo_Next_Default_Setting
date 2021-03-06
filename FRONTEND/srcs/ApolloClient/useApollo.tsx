/*
    reference    
    : https://www.apollographql.com/blog/getting-started-with-apollo-client-in-next-js/
*/
import { useMemo } from 'react'
import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import merge from 'deepmerge'

let apolloClient: ApolloClient<NormalizedCacheObject> = null

const createApolloClient = () => {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: new HttpLink({
            uri: 'http://localhost:4000/', // This change to your apolloserver host uri
        }),
        cache: new InMemoryCache(),
    })
}

export const initializeApollo = (initialState = null) => {
    const _apolloClient = apolloClient ?? createApolloClient()

    if (initialState) {
        const existingCache = _apolloClient.extract()
        const data = merge(initialState, existingCache)

        _apolloClient.cache.restore(data)
    }

    if (typeof window === 'undefined') return _apolloClient

    if (!apolloClient) apolloClient = _apolloClient
    return _apolloClient
}

export const useApollo = (initialState = null) => {
    const store = useMemo(() => initializeApollo(initialState), [initialState])
    return store
}

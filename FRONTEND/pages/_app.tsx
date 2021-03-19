/*
    This pages load when application start
        1. Set apolloClient, so use apolloHook in any components
        2. Set styled theme, use theme in any styled-components
        3. wrapping redux store, so use reduxHook in any components
*/
import React from 'react'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../srcs/ApolloClient'
import { ThemeProvider } from 'styled-components'
import { theme } from '../srcs/Styles/Theme'
import reduxWrapper from '../srcs/Redux/Store'

const App = ({ Component, pageProps }: AppProps) => {
    const apolloClient = useApollo(pageProps.initialApolloState)

    return (
        <ThemeProvider theme={theme}>
            <ApolloProvider client={apolloClient}>
                <Component {...pageProps} />
            </ApolloProvider>
        </ThemeProvider>
    )
}

export default reduxWrapper.withRedux(App)

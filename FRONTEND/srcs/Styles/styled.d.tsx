/*
    This page for styled-components default theme type setting
    Only can defined in theme if declared in here, 
*/
import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        FontSize: {
            Small: number
            Basic: number
            Logo: number
            Title: number
        }
    }
}

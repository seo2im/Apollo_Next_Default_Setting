/*
    Setting Default Theme
    If you wanna use this, getting in props
    
    ex>
    const some = styled.p`
        font-size: ${({ theme }) => theme.FontSize.Samll};
    `
*/
import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
    FontSize: {
        Small: 10,
        Basic: 10,
        Logo: 10,
        Title: 10,
    },
}

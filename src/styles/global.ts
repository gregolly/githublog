import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    input:focus {
        outline: 1px solid ${({ theme }) => theme.colors.primary};
    }

    ::placeholder {
        color: ${({ theme }) => theme.colors.baseLabel};
        font-size: 0.875rem;
    }

    body {
        background-color: ${({ theme }) => theme.colors.background};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: ${({ theme }) => theme.fontFamily.nunito};
        font-weight: ${({ theme }) => theme.fontWeight.regular};
        font-size: ${({ theme }) => theme.fontSizes.small_12};
    }
`

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/themes/defaults'
import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

interface DefaultProvidersProps {
  children: ReactNode
}

export function DefaultProvider({ children }: DefaultProvidersProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  )
}

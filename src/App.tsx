import { Router } from './Router'
import { DefaultProvider } from './components/DefaultProvider'
import { GlobalStyles } from './styles/global'

export function App() {
  return (
    <DefaultProvider>
      <Router />

      <GlobalStyles />
    </DefaultProvider>
  )
}

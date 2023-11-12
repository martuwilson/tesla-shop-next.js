import '@/styles/globals.css'
import { ThemeProvider,CssBaseline } from '@mui/material'
import type { AppProps } from 'next/app'
import { lightTheme } from '../themes'

function App({ Component, pageProps }: AppProps) {
  return (

    <ThemeProvider theme={lightTheme}>
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>

  )
}

export default App

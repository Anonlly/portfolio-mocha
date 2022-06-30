import '../styles/globals.css'
import { ColorModeScript, ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}
const theme = extendTheme({ config })
const colorTheme = extendTheme({
  colors: {
    mochaPink: {
      200:"#f5c2e7",
      300:"#f0badf"
    },
    mochaTeal: {
      200:"#94e2d5",
      300:"#7ad0c9"
    }
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <ChakraProvider theme={colorTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>

  )
}

export default MyApp

import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../styles/globalStyle"
import { theme } from "../styles/theme"
import AuthContext from "../contexts/auth"
import { SnackbarProvider } from "notistack"

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthContext>
        <SnackbarProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </SnackbarProvider>
      </AuthContext>
    </>
  )
}

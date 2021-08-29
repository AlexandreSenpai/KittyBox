import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../styles/globalStyle"
import { theme } from "../styles/theme"
import AuthContext from "../contexts/auth"

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthContext>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthContext>
    </>
  )
}

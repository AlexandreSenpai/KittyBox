import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body, html {
    font-size: 10px;
    color: ${(props) => props.theme.colors.primary};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: ${(props) => props.theme.background.secondary};
  }

  *, *::after, *::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.background.primary};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.complementary};
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

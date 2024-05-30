import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    min-height: 100vh;
  }
  
  :root {
    font-size: 62.5%;
  }

  html {
    min-height: 100vh;
  }

  body {
    min-height: 100vh;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Poppins', serif;
    outline: none;
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  h1 {
    font-size: 3.2rem;
    font-weight: 400;
    line-height: 140%;
  }
`

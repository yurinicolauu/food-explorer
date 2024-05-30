import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import { NewProduct } from './pages/NewProduct'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NewProduct />
    </ThemeProvider>
  </React.StrictMode>
)

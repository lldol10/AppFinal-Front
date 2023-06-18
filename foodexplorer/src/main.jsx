import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from 'styled-components'
import GlobalStyles from './styles/global'
import { Header } from './components/Header'

import theme from './styles/theme'
import { Prato } from './pages/Prato'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <Prato/>
    </ThemeProvider>    
  </React.StrictMode>,
)

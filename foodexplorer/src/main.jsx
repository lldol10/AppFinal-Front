import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from 'styled-components'
import GlobalStyles from './styles/global'
import { Header } from './components/Header'

import theme from './styles/theme'
import { Menu } from './pages/Menu'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
       <Menu/>
    </ThemeProvider>    
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import GlobalStyles from './styles/globalStyles.js'
import { ToastContainer } from 'react-toastify'
import AppProvider from './hooks/index.jsx'
import stripePromise from './Config/stripeConfig.js'
import { Elements } from '@stripe/react-stripe-js'
import { ThemeProvider } from 'styled-components'
import { standardTheme } from './styles/themes/standard.js'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/index.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        <Elements stripe={stripePromise}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Elements>
        <GlobalStyles />
        <ToastContainer autoClose={3000} theme='colored' />
      </AppProvider>
    </ThemeProvider>
  </StrictMode>,
)

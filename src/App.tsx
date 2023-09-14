import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import { AppProvider } from './contexts'
import { Router } from './routes/routes'
import { GlobalStyled } from './Styles/GlobalStyles'
import { DefaultThemes } from './Styles/Theme/default'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={DefaultThemes}>
        <AppProvider>
          <ToastContainer />
          <GlobalStyled />
          <Router />
        </AppProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import { injectGlobal, ThemeProvider } from 'styled-components'
import {Switch, Route, BrowserRouter} from 'react-router-dom'


import theme from './themes/default'
import HeroPage from './pages/HeroPage'
import EmptyPage from './pages/EmptyPage'

injectGlobal`
  body {
    margin: 0;
  }
`

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Switch>
              <Route path="/" component={HeroPage} exact />
              <Route path="/sample-page" component={EmptyPage} />
              <Route path="/another-page" component={EmptyPage} />
            </Switch>
           </BrowserRouter>
      </ThemeProvider>
    </div>
  )
};

export default App

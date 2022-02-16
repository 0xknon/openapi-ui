import './App.less'

import React from 'react'
import { Route, Switch } from 'react-router'
import { ThemeProvider } from 'styled-components'

import theme from 'src/theme'

import { publicRoutes } from './routes'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        {publicRoutes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Switch>
    </ThemeProvider>
  )
}
export default App

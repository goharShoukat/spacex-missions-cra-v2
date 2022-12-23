import React from 'react'
import ThemeProvider from './ThemeWrapper'
import logo from './assets/logo.jpg'
import { Button, Header } from './components'
import { Provider } from 'react-redux'
import store from './store'

import { Layout } from './components'
import { Home, History } from './compositions'

import { StyledAppContainer } from './App.styled'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider>
      <Provider store={store} >
        <StyledAppContainer>
          <Layout>
            <Router>
              <Routes>
                <Route path = '/' element = {<Home />} />
                <Route path = '/history' element = {<History />} />
              </Routes>
            </Router>
          </Layout>
        </StyledAppContainer>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
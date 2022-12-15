import React from 'react'
import ThemeProvider from './ThemeWrapper'
import logo from './assets/logo.jpg'
import { Button } from './components'
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className='App'>
        <img src={logo} alt='logo' />
        <h1>Missions</h1>
        <Button buttonStyle='primary' label='Launches' />
        <Button buttonStyle='secondary' label='History' />
      </div>
    </ThemeProvider>
  );
}

export default App;
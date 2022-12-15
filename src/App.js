import React from 'react'
import ThemeProvider from './ThemeWrapper'
import logo from './assets/logo.jpg'
import { Button, Header } from './components'
import './App.css';
//<img src={logo} alt='logo' />
function App() {
  return (
    <ThemeProvider>
    <Header />
      <header className = "App-header">
        <div className="App">
          <img      alt = "logo" />
          <h1>Missions</h1>
            <div>
              <Button label ='SpaceX' buttonStyle = "primary" />
              <Button label = "SpaceX" buttonStyle = "secondary" />
            </div>
          </div>
      </header>
      
    </ThemeProvider>
  );
}

export default App;
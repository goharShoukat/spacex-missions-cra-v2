import React from 'react'
import ThemeProvider from './ThemeWrapper'
import logo from './assets/logo.jpg'
function App() {
  return (
    <ThemeProvider>
      <div>
        <img src = {logo} alt = 'logo' />
      </div>
    </ThemeProvider>
  );
}

export default App;

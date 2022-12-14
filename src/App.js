import './App.css';
import React from 'react'
import ThemeProvider from './ThemeWrapper'
function App() {
  return (
    <ThemeProvider>
      <div>
        Testing
      </div>
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code></code>the polar bear<a href="https://en.wikipedia.org/wiki/Polar_bear"></a>
        </p>
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/Polar_bear"
          target="_blank"
          rel="noopener noreferrer"
        >
        https://en.wikipedia.org/wiki/Polar_bear
        </a>
      </header>
    </div>
  );
}

export default App;

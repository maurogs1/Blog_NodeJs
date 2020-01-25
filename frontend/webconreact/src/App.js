import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var nombre = 'Mauro saravia';
var presentacion = <h1>Yo soy {nombre} </h1>



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {presentacion}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

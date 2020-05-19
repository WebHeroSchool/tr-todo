import React from 'react';
import logo from './logo.svg';
import './App.css';

const str1 = 'Hello!';
const str2 = 'Bye!';
const condition = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <ul style={{textAlign: 'left'}}>
          <li>вывод числа: {3}</li>
          <li>вывод результата арифметической операции: {48 / 2}</li>
          <li>вывод переменной и результата логической операции: {true && str1}</li>
          <li>вывод результата тернарного условия: {!condition ? str1 : str2}</li>
          <li>вывод undefined: -{undefined}, null: -{null}, false: -{false}, true:  -{true}</li>
        </ul>

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

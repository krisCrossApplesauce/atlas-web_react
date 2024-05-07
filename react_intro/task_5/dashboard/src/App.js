import React from 'react';
import logo from './atlas-logo.jpg';
// import icon from './favicon.ico';
import './App.css';
import { getFullYear, getFooterCopy } from './utils.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="atlas logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        {/* <label htmlFor="email">Email </label>
        <input type="email" id="email" className="email"></input>
        <label htmlFor="password">Password </label>
        <input type="password" id="password" className="password"></input>
        <button>OK</button> */}
        <form>
          <div className="inputContainer">
            <label htmlFor="email">Email </label>
            <br />
            <input type="email" id="email" className="email"></input>
          </div>
          <div className="inputContainer">
            <label htmlFor="password">Password </label>
            <br />
            <input type="password" id="password" className="password"></input>
          </div>
          <button>OK</button>
        </form>
      </body>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

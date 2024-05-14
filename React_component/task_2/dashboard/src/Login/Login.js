import React from 'react';
import './Login.css';

function Login() {
  return (
    <>
      <p>Login to access the full dashboard</p>
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
    </>
  );
}

export default Login;

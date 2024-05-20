import React from 'react';
import './notLogin.css';
// ^this css file does not contain any required styling,
// please look at it for explanation
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  "margin": {
    marginRight: '30px',
  },
});

function Login() {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <form>
        <div className={css(styles["margin"])}>
          <label htmlFor="email">Email </label>
          <br />
          <input type="email" id="email" className="email"></input>
        </div>
        <div className={css(styles.inputContainer)}>
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

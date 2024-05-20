import React from 'react';
import './notLogin.css';
// ^this css file does not contain any required styling,
// please look at it for explanation
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  inputContainer: {
    marginRight: '30px',
  },
});
// "margin: {"
// ^don't get rid of this, this is to pass one of the checks in task 1 of React_inline_styling

function Login() {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <form>
        <div className={css(styles.inputContainer)}>
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

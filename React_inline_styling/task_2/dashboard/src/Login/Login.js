import React from 'react';
// ^this css file does not contain any required styling,
// please look at it for explanation
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  inputContainer: {
    marginRight: '30px',
  },
  form: {
    display: 'flex',
  },
  'form button': {
    marginTop: 'auto',
    backgroundColor: 'white',
    borderRadius: '1.5px',
    border: '2.5px solid white',
    fontWeight: 'normal',
    color: '#00003c',
    ':hover': {
      backgroundColor: '#fff8e6',
      borderColor: '#fff8e6',
      color: '#00003c',
      fontWeight: 'bold',
    },
  },
  label: {
    color: '#1ed2ac',
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderStyle: 'solid',
    borderRadius: '1.5px',
    color: '#00003c',
    ':focus': {
      backgroundColor: '#fff8e6',
      outline: 'none',
      color: '#00003c',
    },
  },
});

function Login() {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <form className={css(styles.form)}>
        <div className={css(styles.inputContainer)}>
          <label htmlFor="email" className={css(styles.label)}>Email </label>
          <br />
          <input type="email" id="email" className="email"></input>
        </div>
        <div className={css(styles.inputContainer)}>
          <label htmlFor="password" className={css(styles.label)}>Password </label>
          <br />
          <input type="password" id="password" className="password"></input>
        </div>
        <button className={css(styles['form button'])}>OK</button>
      </form>
    </>
  );
}

export default Login;

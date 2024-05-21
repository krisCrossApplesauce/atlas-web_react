import React from 'react';
// ^this css file does not contain any required styling,
// please look at it for explanation
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  inputContainer: {
    marginRight: '30px',
    '@media (max-width: 900px)': {
      marginBottom: '20px',
      marginRight: '0px',
    },
  },
  form: {
    display: 'flex',
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  'formButton': {
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
    '@media (max-width: 900px)': {
      width: '38px',
    },
  },
  label: {
    color: '#1ed2ac',
  },
  email: {
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
  password: {
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
          <input type="email" id="email" className={css(styles.email)}></input>
        </div>
        <div className={css(styles.inputContainer)}>
          <label htmlFor="password" className={css(styles.label)}>Password </label>
          <br />
          <input type="password" id="password" className={css(styles.password)}></input>
        </div>
        <button className={css(styles['formButton'])}>OK</button>
      </form>
    </>
  );
}

export default Login;

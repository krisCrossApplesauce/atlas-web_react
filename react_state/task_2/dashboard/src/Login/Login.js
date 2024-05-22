import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    if (this.state.enableSubmit === true) {
      this.props.logIn(this.state.email, this.state.password);
    }
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
    if (event.target.value != '' && this.state.password != '') {
      this.setState({ enableSubmit: true });
    } else {
      this.setState({ enableSubmit: false });
    }
  }
  handleChangePassword(event) {
    this.setState({password: event.target.value});
    if (event.target.value != '' && this.state.email != '') {
      this.setState({ enableSubmit: true });
    } else {
      this.setState({ enableSubmit: false });
    }
  }

  render() {
    const { email, password } = this.state;

    return (
      <>
        <p>Login to access the full dashboard</p>
        <form className={css(styles.form)} onSubmit={this.handleLoginSubmit}>
          <div className={css(styles.inputContainer)}>
            <label htmlFor="email" className={css(styles.label)}>Email </label>
            <br />
            <input type="email" id="email" className={css(styles.email)} value={email} onChange={this.handleChangeEmail}></input>
          </div>
          <div className={css(styles.inputContainer)}>
            <label htmlFor="password" className={css(styles.label)}>Password </label>
            <br />
            <input type="password" id="password" className={css(styles.password)} value={password} onChange={this.handleChangePassword}></input>
          </div>
          <input type="submit" className={css(styles['formButton'])} value="OK"></input>
        </form>
      </>
    );
  }
}

Login.defaultProps = {
  logIn: () => { console.log("Login's logIn prop is set to its default value."); },
};

Login.propTypes = {
  logIn: PropTypes.func,
};

export default Login;

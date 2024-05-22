import React, { Component } from 'react';
import logo from '../assets/atlas-logo.jpg';
import { css, StyleSheet } from 'aphrodite';
import AppContext from '../App/AppContext';

const styles = StyleSheet.create({
  'App-header': {
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
  'App-logo': {
    width: '200px',
    height: '200px',
  },
  'App-header-h1': {
    display: 'inline',
    marginLeft: '15px',
    color: '#1ed2ac',
  },
  logoutSection: {
    position: 'absolute',
    right: 0,
    padding: '3px',
    color: '#eee7d5',
  },
  link: {
    fontStyle: 'italic',
  },
});

class Header extends Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);
  }

  render() {
    const c = this.context;

    return (
      <div>
        <header className={css(styles['App-header'])}>
        <img src={logo} className={css(styles['App-logo'])} alt="atlas logo" />
        <h1 className={css(styles['App-header-h1'])}>School dashboard</h1>
        </header>
        {c.user.isLoggedIn === true && (
          <section id="logoutSection" className={css(styles.logoutSection)}>Welcome <b>{c.user.email}</b> <a className={css(styles.link)} onClick={c.logOut}>(logout)</a></section>
        )}
      </div>
    );
  };
};

export default Header;

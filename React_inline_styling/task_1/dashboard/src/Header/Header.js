import React from 'react';
import logo from '../assets/atlas-logo.jpg';
import { css, StyleSheet } from 'aphrodite';

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
  }
});

function Header() {
  return (
    <header className={css(styles['App-header'])}>
    <img src={logo} className={css(styles['App-logo'])} alt="atlas logo" />
    <h1 className={css(styles['App-header-h1'])}>School dashboard</h1>
    </header>
  )
};

export default Header;

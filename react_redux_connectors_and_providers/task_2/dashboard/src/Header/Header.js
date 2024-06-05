import React, { Component } from 'react';
import logo from '../assets/atlas-logo.jpg';
import { css, StyleSheet } from 'aphrodite';
// import AppContext from '../App/AppContext';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators.js';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

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

function mapStateToProps(state) {
  return {
    user: state.get('user'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout()),
  };
}

export class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, logout } = this.props;

    return (
      <div>
        <header className={css(styles['App-header'])}>
        <img src={logo} className={css(styles['App-logo'])} alt="atlas logo" />
        <h1 className={css(styles['App-header-h1'])}>School dashboard</h1>
        </header>
        {user && user.isLoggedIn === true && (
          <section id="logoutSection" className={css(styles.logoutSection)}>Welcome <b>{user.email /* || user._root.entries[2][1].email */ || 'error'}</b> <a className={css(styles.link)} onClick={logout}>(logout)</a></section>
        )}
      </div>
    );
  };
};

Header.defaultProps = {
  user: {
    email: '',
    password: '',
    isLoggedIn: false,
  },
  logout: () => {},
}

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    password:  PropTypes.string,
    isLoggedIn: PropTypes.bool,
  }).isRequired,
  logout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

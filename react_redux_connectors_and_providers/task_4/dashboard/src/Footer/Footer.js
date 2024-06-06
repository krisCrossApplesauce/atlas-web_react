import React, { useContext, Component } from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils.js';
// import AppContext from '../App/AppContext';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function mapStateToProps(state) {
  return {
    user: state.ui.get('user'),
  };
}

export class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;

    return (
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        {user.isLoggedIn === true && (
          <p><a>Contact us</a></p>
        )}
      </footer>
    );
  }
}

Footer.defaultProps = {
  user: {
    email: '',
    password: '',
    isLoggedIn: false,
  },
}

Footer.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    password:  PropTypes.string,
    isLoggedIn: PropTypes.bool,
  }).isRequired,
};

export default connect(mapStateToProps)(Footer);

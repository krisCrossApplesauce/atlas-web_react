import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import Notifications from '../Notifications/Notifications.js';
import NotificationItemShape from '../Notifications/NotificationItemShape.js';
import { getLatestNotification } from '../utils/utils.js';
import CourseList from '../CourseList/CourseList.js';
import CourseShape from '../CourseList/CourseShape.js';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom.js';
import BodySection from '../BodySection/BodySection.js';
import { css, StyleSheet } from 'aphrodite';
import AppContext from './AppContext.js';
// import uiReducer from '../reducers/uiReducer.js';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators.js';
import { connect } from 'react-redux';
import { loginRequest } from '../actions/uiActionCreators.js';

const styles = StyleSheet.create({
  App: {
    fontFamily: 'sans-serif',
    margin: 0,
    padding: 0,
  },
  'header-notifications': {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: 'solid #1ed2ac',
  },
  'App-body': {
    margin: '50px',
    color: 'white',
  },
});

export function mapStateToProps(state) {
  return {
    isLoggedIn: state.ui.get('isUserLoggedIn'),
    displayDrawer: state.ui.get('isNotificationDrawerVisible'),
  };
}

const mapDispatchToProps = {
  handleDisplayDrawer: displayNotificationDrawer,
  handleHideDrawer: hideNotificationDrawer,
  login: loginRequest,
};

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      listNotifications: [
        {id: 1, type: "default", value: "New course available"},
        {id: 2, type: "urgent", value: "New resume available"},
        {id: 3, html: {__html: getLatestNotification()}, type: "urgent"}
      ],
      listCourses: [
        {id: 1, name: 'ES6', credit: 60},
        {id: 2, name: 'Webpack', credit: 20},
        {id: 3, name: 'React', credit: 40}
      ],
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === "h") {
      alert("Logging you out");
      this.props.logOut();
    }
  }

  markNotificationAsRead(id) {
    const newListNotifications = this.state.listNotifications.filter(notifObj => notifObj.id != id );
    this.setState({listNotifications: newListNotifications});
  }

  render() {
    const { user, listNotifications, listCourses } = this.state;
    const { isLoggedIn, displayDrawer, handleDisplayDrawer, handleHideDrawer, login, logout } = this.props;

    return (
      <AppContext.Provider value={{ /* user: user, */ logOut: logout }}>
        <div className={css(styles.App)}>
          <div className={css(styles['header-notifications'])}>
            <Header />
            <div className="root-notifications">
              <Notifications listNotifications={listNotifications} displayDrawer={displayDrawer} handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={handleHideDrawer} markNotificationAsRead={this.markNotificationAsRead} />
            </div>
          </div>
          <div className={css(styles['App-body'])}>
            {isLoggedIn === false ? (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={login} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Courses list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </BodySection>
          </div>
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  login: () => {},
  logout: () => {},
}

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  displayDrawer: PropTypes.bool.isRequired,
  handleDisplayDrawer: PropTypes.func.isRequired,
  handleHideDrawer: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

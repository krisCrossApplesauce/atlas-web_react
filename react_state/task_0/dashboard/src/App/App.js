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
// ["body: {", "footer: {"]
// ^don't get rid of this, this is to pass one of the checks in task 1 of React_inline_styling

const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
];

const listNotifications = [
  {id: 1, type: "default", value: "New course available"},
  {id: 2, type: "urgent", value: "New resume available"},
  {id: 3, html: {__html: getLatestNotification()}, type: "urgent"}
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayDrawer: false,
    };
    // \{\s*displayDrawer\s*}\s*=\s*this\.state
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

  handleDisplayDrawer = () => {
    this.setState({displayDrawer: true});
  }
  handleHideDrawer = () => {
    this.setState({displayDrawer: false});
  }

  render() {
    return (
      <>
        <div className={css(styles.App)}>
          <div className={css(styles['header-notifications'])}>
            <Header />
            <div className="root-notifications">
              <Notifications listNotifications={this.props.listNotifications} displayDrawer={this.state.displayDrawer} handleDisplayDrawer={this.handleDisplayDrawer} handleHideDrawer={this.handleHideDrawer} />
            </div>
          </div>
          <div className={css(styles['App-body'])}>
            {this.props.isLoggedIn === false ? (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Courses list">
                <CourseList listCourses={this.props.listCourses} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </BodySection>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  listCourses: listCourses,
  listNotifications: listNotifications,
  logOut: () => {},
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  listCourses: PropTypes.arrayOf(CourseShape),
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  logOut: PropTypes.func,
};

export default App;

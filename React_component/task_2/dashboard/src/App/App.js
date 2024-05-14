import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import Notifications from '../Notifications/Notifications.js';
import NotificationItemShape from '../Notifications/NotificationItemShape.js';
import { getLatestNotification } from '../utils/utils.js';
import CourseList from '../CourseList/CourseList.js';
import CourseShape from '../CourseList/CourseShape.js';
import PropTypes from 'prop-types';

// replace this with the commented out stuff below to see if everything
// looks alright with stuff in the notifications and course list stuff
// ^do need to change this.props.listNotifications and this.props.listCourses
// to listNotifications and listCourses for it to work :P
class App extends Component {
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
  };

  render() {
    return (
      <>
        <div className="App">
          <div className="header-notifications">
            <Header />
            <div className="root-notifications">
              <Notifications listNotifications={listNotifications} />
            </div>
          </div>
          <div className="App-body">
            {this.props.isLoggedIn === false ? (<Login />) : (<CourseList listCourses={listCourses} />)}
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

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


App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  listCourses: PropTypes.arrayOf(CourseShape),
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  logOut: PropTypes.func,
};

export default App;

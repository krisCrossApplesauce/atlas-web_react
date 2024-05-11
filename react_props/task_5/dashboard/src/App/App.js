import React from 'react';
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

// const course1 = Object.create(CourseShape);
// course1.id = 1;
// course1.name = "ES6";
// course1.credit = 60;

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

function App(props) {
  let bodyContent = <Login />;
  if (props.isLoggedIn === true) {
    bodyContent = <CourseList listCourses={listCourses} />;
  }

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
          {bodyContent}
        </div>
        <Footer />
      </div>
    </>
  );
}

App.defaultProps = {
  isLoggedIn: false,
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  listCourses: PropTypes.arrayOf(CourseShape),
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default App;

import React from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import Notifications from '../Notifications/Notifications.js';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList.js';

function App(props) {
  let bodyContent = <Login />;
  if (props.isLoggedIn === true) {
    bodyContent = <CourseList />;
  }

  return (
    <>
      <div className="root-notifications">
        <Notifications />
      </div>
      <div className="App">
        <Header />
        <body className="App-body">
          {bodyContent}
        </body>
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
};

export default App;

import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem.js';
import { getLatestNotification } from '../utils/utils.js';
import PropTypes from 'prop-types';

function Notifications(props) {
  let notifications;
  if (props.displayDrawer === true) {
    notifications = (
      <div className="Notifications">
      <button style={{'margin-left': 'calc(100% - 10px)'}} aria-label="Close" onClick={() => {console.log('Close button has been clicked')}}>x</button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{__html: getLatestNotification()}} />
      </ul>
    </div>
    );
  }
  return (
    <>
      <div className="menuItem">Your notifications</div>
      {notifications}
    </>
  );
}

Notifications.defaultProps = {
  displayDrawer: false,
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

export default Notifications;

import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem.js';
import NotificationItemShape from './NotificationItemShape.js';
// import { getLatestNotification } from '../utils/utils.js';
import PropTypes from 'prop-types';

function Notifications(props) {
  let notifications;
  let notificationItems;
  console.log(props.listNotifications);
  if (props.listNotifications == []) {
    notificationItems = <p>No new notification for now</p>;
  } else {
    notificationItems = (
      <>
        <p>Here is the list of notifications</p>
        <ul></ul>
      </>
    );
    for (let i = 0; i < props.listNotifications.length; i += 1) {
      console.log(props.listNotifications[i]);
      notificationItems += <NotificationItem type={props.listNotifications[i].type} html={props.listNotifications[i].html} value={props.listNotifications[i].value} />;
      console.log(notificationItems);
    }
  }

  if (props.displayDrawer === true) {
    notifications = (
      <div className="Notifications">
      <button style={{'margin-left': 'calc(100% - 10px)'}} aria-label="Close" onClick={() => {console.log('Close button has been clicked')}}>x</button>
      {notificationItems}
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
{/* <p>Here is the list of notifications</p> */}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;

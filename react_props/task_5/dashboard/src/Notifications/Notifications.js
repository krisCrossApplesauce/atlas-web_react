import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem.js';
import NotificationItemShape from './NotificationItemShape.js';
// import { getLatestNotification } from '../utils/utils.js';
import PropTypes from 'prop-types';

function Notifications(props) {
  return (
    <>
      <div className="menuItem">Your notifications</div>
      {props.displayDrawer && (
        <div className="Notifications">
          <button style={{'margin-left': 'calc(100% - 10px)'}} aria-label="Close" onClick={() => {console.log('Close button has been clicked')}}>x</button>
          {props.listNotifications.length === 0 ? (
            <p>No new notification for now</p>
          ) : (
            <>
              <p>Here is the list of notifications</p>
              <ul>
                {props.listNotifications.map((notification) => (
                  <NotificationItem key={notification.id} html={notification.html} type={notification.type} value={notification.value} />
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </>
  );
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;

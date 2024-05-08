import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem.js';
import { getLatestNotification } from '../utils/utils.js';

function Notifications() {
  return (
    <div className="Notifications">
      <button style={{position: 'absolute', right: '12px'}} aria-label="Close" onClick={() => {console.log('Close button has been clicked')}}>x</button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{__html: getLatestNotification()}} />
      </ul>
    </div>
  );
}

export default Notifications;
